using AgathaChristieFanPage.Models;
using AgathaChristieFanPage.ViewModels;
using System.Linq;

namespace AgathaChristieFanPage.ModelBuilders
{
    public interface IReadingChecklistModelBuilder
    {
        ReadingChecklist BuildModel();
    }

    public class ReadingChecklistModelBuilder : IReadingChecklistModelBuilder
    {
        private IDbService _dbService;

        public ReadingChecklistModelBuilder(IDbService dbService)
        {
            _dbService = dbService;
        }

        public ReadingChecklist BuildModel()
        {
            ReadingChecklist readingChecklist = new ReadingChecklist();
            readingChecklist.Novels = _dbService.GetAllNovels().Select(novel => NovelToChecklistItem(novel));
            return readingChecklist;
        }

        private ReadingChecklistItem NovelToChecklistItem(NovelModel novel)
        {
            ReadingChecklistItem model = new ReadingChecklistItem();
            model.NovelName = novel.NovelName;
            model.PublishingYear = novel.PublishingYear;
            model.ThumbnailUrl = novel.ThumbnailUrl;
            model.Category = novel.Category;
            return model;
        }
    }
}