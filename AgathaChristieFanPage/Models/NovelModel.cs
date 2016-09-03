using System.Collections.Generic;

namespace AgathaChristieFanPage.Models
{
    public class NovelModel
    {
        public NovelModel()
        {
            Images = new HashSet<ImageModel>();
        }

        public int Id { get; set; }
        public string NovelName { get; set; }
        public string PublishingYear { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string ThumbnailUrl { get; set; }
        public virtual IEnumerable<ImageModel> Images { get; set; }
    }
}