using AgathaChristieFanPage.ModelBuilders;
using AgathaChristieFanPage.ViewModels;
using System.Linq;
using System.Web.Mvc;

namespace AgathaChristieFanPage.Controllers
{
    public class ReadingChecklistController : Controller
    {
        private IReadingChecklistModelBuilder _modelBuilder;

        public ReadingChecklistController(IReadingChecklistModelBuilder modelBuilder)
        {
            _modelBuilder = modelBuilder;
        }

        public ActionResult Index()
        {
            ReadingChecklist model = _modelBuilder.BuildModel();

            return View("~/Views/ReadingChecklist.cshtml", model);
        }
    }
}