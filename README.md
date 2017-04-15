This is a project to learn how to use Angular2 with ASP.NET Core and angular-cli using VSCode and Visual Studio 2017. 

Angular part is based on the official Angular's [Tour of Heroes](https://angular.io/docs/ts/latest/tutorial/) tutorial but using Angular-Cli instead of SystemJS.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

# Preconditions

* Install `Node.js` and `npm` 
    * Verify that you are running at least node **v5.x.x** and npm **3.x.x** by running `node -v` and `npm -v`
* `> npm install -g npm`
* `> npm install -g typescript`
* `> npm install -g @angular/cli` [angular-cli](https://github.com/angular/angular-cli)
* Install [.NET Core 1.1 runtime/SDK](https://www.microsoft.com/net/download/core/#/runtime/current)

### Optional packages:
* `> npm install -g typings`
* `> npm install -g gulp`
* `> npm install -g bower`
* `> npm install -g yo`
* `> npm install -g grunt-cli`
* __...OR SHORTLY: `> npm install -g npm typescript angular-cli gulp bower typings grunt-cli yo`__

# Development
## Steps during development
* `cd .\src\Frontend` __`> npm start`__ which starts __`ng serve`__
* `cd .\src\Backend` run command `> dotnet restore` only first time after clone
* `cd .\src\Backend` __`> dotnet watch run`__ or `> dotnet run`
* Navigate to [http://localhost:4200/](http://localhost:4200/) - this is the _Frontend_ URL created by __`ng serve`__ 
which is configured in `proxy.conf.json` to pass all the API requests to the running ASP.NET Core application on port __:5002__.
The `ng serve` does not create any files on disk and everything is served from memory.
* __`ng build`__ command will transpile and bundle all needed files and copy everything, including static files, to `wwwroot` folder of the _Backend_ application

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

# Frontend development (src\Frontend)

In terminal got to **Frontend** directory: `cd src\Frontend`

## Development server 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
this is the _Frontend_ URL created by __`ng serve`__ 
which is configured in `proxy.conf.json` to pass all the API requests to the running ASP.NET Core application on port :5002.
The `ng serve` does not create any files on disk and everything is served from memory.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `Backend/wwroot` directory. Use the `-prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

---

## References & Sources

[First version SystemJS & Gulp](https://github.com/krzyhook/aspnet-core-angular2-starter)

[ng quickstart](https://angular.io/docs/ts/latest/quickstart.html)

[ng tutorial](https://angular.io/docs/ts/latest/tutorial)

[mdymel/AspNetCoreAngular2Cli](https://github.com/mdymel/AspNetCoreAngular2Cli)

[antonybudianto/angular-webpack-starter](https://github.com/antonybudianto/angular-webpack-starter)

[antonybudianto/angular2-starter](https://github.com/antonybudianto/angular2-starter)