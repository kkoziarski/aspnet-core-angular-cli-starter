namespace AspNetCoreAngularCli
{
    using System.IO;
    using AspNetCoreAngularCli.Options;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Configuration;

    public class Program
    {
        public static void Main(string[] args)
        {
            /*
            hosting.json
            {
                "server.urls": "http://0.0.0.0:5000"
            }
            */

            var config = new ConfigurationBuilder()
                 .SetBasePath(Directory.GetCurrentDirectory())
                 .AddJsonFile("appsettings.json")
                 .AddJsonFile("hosting.json", optional: true)
                 .AddCommandLine(args)
                 .AddEnvironmentVariables(prefix: "ASPNETCORE_")
                 .Build();

            var appOptions = config.GetSection("App").Get<AppOptions>();

            System.Console.WriteLine($"Option1: {appOptions.Option1}");

            var host = new WebHostBuilder()
                .UseUrls("http://*:5002") // "https://*:5321", "http://0.0.0.0:5000")
                .UseConfiguration(config)
                .UseEnvironment("Development")
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                // .UseWebRoot("public")
                .Build();

            host.Run();

            /*
            cmd>     
            dotnet run urls=http://localhost:12541

            SET ASPNETCORE_URLS=https://*:12541 && dotnet run
            */
        }
    }
}
