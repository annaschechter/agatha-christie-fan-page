using AgathaChristieFanPage.ModelBuilders;
using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using System.Reflection;
using System.Web.Http;
using System.Web.Mvc;

namespace AgathaChristieFanPage
{
    public class AutofacConfig
    {
        public static void RegisterAutofac()
        {
            var builder = new ContainerBuilder();

            //Register MVC Controllers
            builder.RegisterControllers(Assembly.GetExecutingAssembly()); 

            //Register WebApi Controllers
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            //Register other components
            builder.RegisterType<DbService>().As<IDbService>();
            builder.RegisterType<ReadingChecklistModelBuilder>().As<IReadingChecklistModelBuilder>();

            var container = builder.Build();

            //Set the MVC DependencyResolver
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));

            //Set the WebApi DependencyResolver
            GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver((IContainer)container);
        }
    }
}