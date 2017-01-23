This is a project to learn how to use Angular2 with ASP.NET Core and angular-cli using VSCode and Visual Studio 2017. 

Angular part is based on the official Angular's [Tour of Heroes](https://angular.io/docs/ts/latest/tutorial/) tutorial but using Angular-Cli instead of SystemJS.

## EntityFramework
* Drop database before enabling EF migrations: `dotnet ef database drop -c ApplicationDbContext`
* Enable and create EF migration: `dotnet ef migrations add InitialCreate -c ApplicationDbContext`
* Remove EF migrations: `dotnet ef migrations remove`
* __Apply the migration to the database: `dotnet ef database update -c ApplicationDbContext`__
* Add new migration after code changes: 
    ```
    dotnet ef migrations add HeroDescription -c ApplicationDbContext
    dotnet ef database update -c ApplicationDbContext
    ```
    
__References & Sources:__

[First version SystemJS & Gulp](https://github.com/krzyhook/aspnet-core-angular2-starter)

[ng quickstart](https://angular.io/docs/ts/latest/quickstart.html)

[ng tutorial](https://angular.io/docs/ts/latest/tutorial)

[mdymel/AspNetCoreAngular2Cli](https://github.com/mdymel/AspNetCoreAngular2Cli)

[antonybudianto/angular-webpack-starter](https://github.com/antonybudianto/angular-webpack-starter)

[antonybudianto/angular2-starter](https://github.com/antonybudianto/angular2-starter)