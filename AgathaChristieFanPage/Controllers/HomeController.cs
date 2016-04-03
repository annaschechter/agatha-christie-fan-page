using System.Web.Mvc;

namespace AgathaChristieFanPage.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Views/Home.cshtml");
        }
    }
}