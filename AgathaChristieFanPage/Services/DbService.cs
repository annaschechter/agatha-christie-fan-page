using AgathaChristieFanPage.Models;
using System.Collections.Generic;
using System.Linq;

namespace AgathaChristieFanPage
{
    public interface IDbService
    {
        IEnumerable<NovelModel> GetAllNovels();
        IEnumerable<ImageModel> GetAllImages();
        NovelModel GetNovelById(int novelId);
        IEnumerable<ImageModel> GetImagesForNovel(int novelId);
    }

    public class DbService : IDbService
    {
        private ApplicationDbContext _applicationDbContext;

        public DbService()
        {
            _applicationDbContext = new ApplicationDbContext();
        }

        public IEnumerable<NovelModel> GetAllNovels()
        {
            return _applicationDbContext.Novels;
        }

        public IEnumerable<ImageModel> GetAllImages()
        {
            return _applicationDbContext.Images;
        }

        public NovelModel GetNovelById(int novelId)
        {
            return _applicationDbContext.Novels.FirstOrDefault(novel => novel.Id == novelId);
        }

        public IEnumerable<ImageModel> GetImagesForNovel(int novelId)
        {
            return _applicationDbContext.Images.Where(image => image.NovelId == novelId);
        }
    }
}