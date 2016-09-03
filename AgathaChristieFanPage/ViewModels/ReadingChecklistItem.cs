namespace AgathaChristieFanPage.ViewModels
{
    public class ReadingChecklistItem
    {
        public string NovelName { get; set; }
        public int NovelId { get; set; }
        public string PublishingYear { get; set; }
        public string Category { get; set; }
        public string ThumbnailUrl { get; set; }
        public bool Read { get; set; }
        public bool Watched { get; set; }
        public bool OwnACopy { get; set; }
    }
}