using AgathaChristieFanPage.ViewModels;
using System.Web.Mvc;

namespace AgathaChristieFanPage.Controllers
{
    public class ReadingChecklistController : Controller
    {
        private IDbService _dbService;

        public ReadingChecklistController(IDbService dbService)
        {
            _dbService = dbService;
        }

        public ActionResult Index()
        {
            ReadingChecklistViewModel model = new ReadingChecklistViewModel();
            model.Novels = _dbService.GetAllNovels();

            return View("~/Views/ReadingChecklist.cshtml", model);
        }
    }
}