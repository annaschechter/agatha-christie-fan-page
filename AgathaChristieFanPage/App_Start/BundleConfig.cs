using System.Web.Optimization;

namespace AgathaChristieFanPage
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            #if !DEBUG
                BundleTable.EnableOptimizations = true;
            #endif

            var angularBundle = new ScriptBundle("~/bundle/angular");
            angularBundle.Include("~/Scripts/jquery-2.2.2.min.js");
            angularBundle.Include("~/Scripts/angular.min.js");
            angularBundle.Include("~/Scripts/ACFanPage.js");
            angularBundle.Include("~/Scripts/Controllers/*.js");
            angularBundle.Include("~/Scripts/Directives/*.js");
            angularBundle.Include("~/Scripts/Scopes/*.js");

            var stylesBundle = new StyleBundle("~/bundle/styles");
            stylesBundle.Include("~/Styles/masterLayout.less");
            stylesBundle.Include("~/Styles/readingChecklist.less");
            stylesBundle.Transforms.Add(new LessTransform());
            stylesBundle.Transforms.Add(new CssMinify());

            bundles.Add(angularBundle);
            bundles.Add(stylesBundle);
        }
    }

    public class LessTransform : IBundleTransform
    {
        public void Process(BundleContext context, BundleResponse response)
        {
            response.Content = dotless.Core.Less.Parse(response.Content);
            response.ContentType = "text/css";
        }
    }
}