using System.ComponentModel.DataAnnotations.Schema;

namespace GameDevRecipes.API.Models
{
    public class Video
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string GameEngine { get; set; }
        public string ThumbnailLink { get; set; }
        public string VideoId { get; set; }
        public string TagsAsString { get; set; } // Store tags as a delimited string

        [NotMapped] // This property is not mapped to the database
        public List<string> Tags => TagsAsString?.Split(',').ToList() ?? new List<string>();
    }
}
