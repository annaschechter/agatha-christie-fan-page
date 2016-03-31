namespace AgathaChristieFanPage.Models
{
    public class ImageModel
    {
        public int Id { get; set; }
        public string AltText { get; set; }
        public string ImageUrl { get; set; }
        public int NovelId { get; set; }
        public virtual NovelModel Novel { get; set; }
    }
}