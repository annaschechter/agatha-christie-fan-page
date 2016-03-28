using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.PhantomJS;
using System.Drawing;

namespace AgathaChristieFanPage.Tests.AcceptanceTests
{
    public class BaseTests
    {
        protected IWebDriver _driver;
        public const int MobileBrowserWidth = 728;
        public const int TabletBrowserWidth = 998;
        public const int DesktopBrowserWidth = 1200;

        [SetUp]
        public void Initialise()
        {
            _driver = new PhantomJSDriver();
        }

        [TearDown]
        public void Cleanup()
        {
            EndBrowserSession();
        }

        public void VisitPage(string pageUrl)
        {
            _driver.Navigate().GoToUrl(string.Format("http://fanpage.dev{0}", pageUrl));
        }

        public void SetBrowserSize(int width, int height)
        {
            _driver.Manage().Window.Size = new Size(width, height);
        }

        public void EndBrowserSession()
        {
            _driver.Quit();
        }

        public IWebElement PageContent
        {
            get { return _driver.FindElement(By.TagName("body")); } 
        }
    }
}
