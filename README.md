![](https://github.com/Carbine28/game-dev-recipes/blob/main/extraImages/mdGif.gif)
# GameDev Recipes 
GameDev Recipes is a web application primarily developed for managing and viewing game development tutorials found on Youtube.

The idea was implemented as I found the youtube playlist system to be lackluster. Having a large amount of videos in one playlist made finding specific tutorials difficult. Unless you created a new tab when selecting a video, the tab would change to the video player, this meant that you would need to reopen your playlist again from the beginning and scroll down to find additional videos.

## Implementation
Apis are used to communicate to the ASP.NET Core backend server. When a video is added using a youtube link, the server calls on Youtube's Data Api to fetch the required information needed to display the videos on the home screen.
## Links
![Full video demonstration can be found here](https://www.youtube.com/watch?v=toGPDNlenHc)

## Technologies Used
- Frontend: Angular, Angular Material, Bootstrap
- Backend: Asp.NET Core with Web API, Entity Framework and MSSQL database

## Current Features
- Ability To Search through videos using Tags.
- Add videos into database using submitting a youtube link
- Editing a video's tags or game engine
- Deletion of video in database

# Installation
## Prerequisites 
- Node.js and npm (Node Package Manager)
- Visual Studios
- MSSQL
- SQL Server Management Studio
> Clone the repo using: `git clone https://github.com/Carbine28/game-dev-recipes.git`
### Front-End Setup
1. Inside **GameDevRecipes.API** run the command `npm install`
2. In *GameDevRecipes.API/src/app/services/video.service.ts* change the port in `baseApiUrl` to the port for running the server later.
3. Run `ng serve` to build and start the angular app
### Back-End Setup
1. Create and connect to a local db using SQL Server Management Studio
2. Rename *appsettings - copy.json* to `appsettings.json`
3. Inside appsettings.json replace the youtube api key with your own.
4. Also replace `"server=localhost}...` name with the name of your database created using MSSQL
5. Go to Tools > Nuget Package Manager > Manage Nuget Packes for solution... and install the following:
- Microsoft.EntityFrameworkCore.SqlServer
- Microsoft.EnitityFrameworkCore.Tools
- Google.Apis.Youtube.v3
6. Go to Tools > Nuget Package Manager > Package Manager Console and enter the following commands to add a migration and update database
  - Add-Migration
  - Update-Database
7. Build the project and note down in Swagger UI console, the port number of the server.
8. Enter this port number in Front-End Setup Step 2.
