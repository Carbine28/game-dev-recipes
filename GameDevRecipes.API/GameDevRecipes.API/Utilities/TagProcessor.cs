using GameDevRecipes.API.Models;

namespace GameDevRecipes.API.Utilities
{
    public class TagProcessor
    {
        // Finds if tag exists using hashset stored in each Video object
        public static bool FindTag(List<string> stringList, string targetTag)
        {
            return stringList.Contains(targetTag);
        }

        //// Adds tags from list into Hashset. Will only add up to Video.max_tag_count to prevent abuse
        //public static void AddTagsIntoList(List<string> tags, List<string> stringList)
        //{
        //    stringList.Clear(); // Clears hashset first and updates with new tags
        //    for(int i = 0; i < tags.Count; i++) 
        //    {
        //        if(i >= Video.max_tag_count)
        //        {
        //            break;
        //        }
        //        stringList.Add(tags[i]);
        //    }
        //}
    }
}
