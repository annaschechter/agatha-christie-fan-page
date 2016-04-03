using AgathaChristieFanPage.Models;
using System.Collections.Generic;

namespace AgathaChristieFanPage
{
    public interface IDbService
    {
        IEnumerable<NovelModel> GetAllNovels();
        IEnumerable<ImageModel> GetAllImages();
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
    }
}