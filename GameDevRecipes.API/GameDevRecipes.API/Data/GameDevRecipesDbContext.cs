using GameDevRecipes.API.Models;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace GameDevRecipes.API.Data
{
    public class GameDevRecipesDbContext : DbContext
    {
        public GameDevRecipesDbContext(DbContextOptions options): base(options) { }

        public DbSet<Video> Videos { get; set; }
    }
}
