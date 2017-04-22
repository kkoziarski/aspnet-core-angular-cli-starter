namespace AspNetCoreAngularCli
{
    using System.Collections.Generic;
    using System.IO;

    using AspNetCoreAngularCli.Auth;
    using AspNetCoreAngularCli.Backend.Data;
    using AspNetCoreAngularCli.Backend.Models;

    using IdentityServer4.Models;
    using IdentityServer4.Test;

    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Logging;

    using Resources = IdentityServer4.Models.Resources;

    public class Startup
    {
        public IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            this.Configuration = builder.Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            // Add framework services.
            services.AddMvc()
                .AddMvcOptions(options =>
                {
                    options.CacheProfiles.Add("NoCache", new Microsoft.AspNetCore.Mvc.CacheProfile
                    {
                        NoStore = true,
                        Duration = 0
                    });
                });
            
            services.AddIdentityServer()
                .AddInMemoryClients(Clients.Get())
                .AddInMemoryIdentityResources(Auth.Resources.GetIdentityResources())
                .AddInMemoryApiResources(Auth.Resources.GetApiResources())
                .AddTestUsers(Users.Get())
                .AddTemporarySigningCredential();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, ApplicationDbContext dbContext)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }

            // support the Routing of Angular2. If the Browser calls a URL which doesn't exists on the server, it could be a Angular route. Especially if the URL doesn't contain a file extension.
            app.Use(async (context, next) =>
            {
               await next();

                if (context.Response.StatusCode == 404
                    && !Path.HasExtension(context.Request.Path.Value)
                    && !context.Request.Path.Value.StartsWith("/api/")
                    && !context.Request.Path.Value.StartsWith("/libs/"))
                {
                    context.Request.Path = "/index.html";          // context.Request.Path = new Microsoft.AspNetCore.Http.PathString("/");
                    context.Response.StatusCode = 200;
                    
                    await next();
                }
            });

            app.UseDefaultFiles();

            // app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions
                {
                    OnPrepareResponse = context =>
                    {
                        context.Context.Response.Headers.Remove("Content-Length");
                    }
                });

            app.UseMvc();

            //app.UseMvc(routes =>
            //{
            //    routes.MapRoute(
            //        name: "default",
            //        template: "{controller=Home}/{action=Index}/{id?}");
            //});

            DbInitializer.Initialize(dbContext);

            app.UseIdentityServer();
        }
    }
}
