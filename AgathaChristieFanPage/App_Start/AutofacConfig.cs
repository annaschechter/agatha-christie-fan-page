using AgathaChristieFanPage.ModelBuilders;
using Autofac;
using Autofac.Integration.Mvc;
using System.Web.Mvc;

namespace AgathaChristieFanPage
{
    public class AutofacConfig
    {
        public static void RegisterAutofac()
        {
            var builder = new ContainerBuilder();

            // Register MVC controllers
            builder.RegisterControllers(typeof(MvcApplication).Assembly);

            // Register services
            builder.RegisterType<DbService>().As<IDbService>();
            builder.RegisterType<ReadingChecklistModelBuilder>().As<IReadingChecklistModelBuilder>();

            // Set the dependency resolver to be Autofac.
            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }
    }
}