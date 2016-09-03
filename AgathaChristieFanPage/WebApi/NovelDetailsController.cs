using AgathaChristieFanPage.Models;
using System.Linq;
using System.Web.Http;

namespace AgathaChristieFanPage.WebApi
{
    public class NovelDetailsController : ApiController
    {
        private IDbService _dbService;

        public NovelDetailsController(IDbService dbService)
        {
            _dbService = dbService;
        }

        [HttpGet]
        public NovelModel GetNovel(int id)
        {
            NovelModel novel = _dbService.GetNovelById(id);
            novel.Images = _dbService.GetImagesForNovel(id).ToList();
            return novel;
        }
    }
}