using AgathaChristieFanPage.Models.Auth;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;


namespace AgathaChristieFanPage.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext() : base("ACFanPage", throwIfV1Schema: false)
        {
            base.Configuration.ProxyCreationEnabled = false;
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public DbSet<ImageModel> Images { get; set; }
        public DbSet<NovelModel> Novels { get; set; }
    }
}