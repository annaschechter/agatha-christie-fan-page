using AgathaChristieFanPage.Models;
using AgathaChristieFanPage.Models.Auth;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace AgathaChristieFanPage.Helpers
{
    public static class CurrentUser
    {
        public static string GetDisplayName()
        {
            string userId = System.Web.HttpContext.Current.User.Identity.GetUserId();
            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));
            return manager.FindById(userId).DisplayName;
        }
    }
}