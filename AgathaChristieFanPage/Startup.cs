using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AgathaChristieFanPage.Startup))]
namespace AgathaChristieFanPage
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
