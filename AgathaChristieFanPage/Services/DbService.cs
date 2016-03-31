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
        public IEnumerable<NovelModel> GetAllNovels()
        {
            ApplicationDbContext applicationDbContext = new ApplicationDbContext();
            return applicationDbContext.Novels;
        }

        public IEnumerable<ImageModel> GetAllImages()
        {
            ApplicationDbContext applicationDbContext = new ApplicationDbContext();
            return applicationDbContext.Images;
        }
    }
}