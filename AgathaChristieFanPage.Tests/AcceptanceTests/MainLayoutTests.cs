using NUnit.Framework;
using OpenQA.Selenium;

namespace AgathaChristieFanPage.Tests.AcceptanceTests
{
    [TestFixture]
    class MainLayoutTests : BaseTests
    {
        [TestCase(MobileBrowserWidth, 230)]
        [TestCase(TabletBrowserWidth, 300)]
        [TestCase(DesktopBrowserWidth, 540)]
        public void HeaderHeightIsSetCorrectlyOnDifferentBrowserSizes(int browserWidth, int headerHeight)
        {
            GivenIAmOnTheHomepage();
            WhenISetTheBrowserWidthTo(browserWidth);
            ThenTheHeaderHeightIsSetTo(headerHeight);
        }

        [Test]
        public void SiteNavigationIsReplacedByTheBurgerButtonOnMobileBreakpoint()
        {
            GivenIAmOnTheHomepage();
            WhenISetTheBrowserWidthTo(MobileBrowserWidth);
            ThenTheSiteNavigationIsReplacedWithBurgerButton();
        }

        [Test]
        public void MenuDrawerOpensUpWhenIClickOnTheBurgerButtonOnMobileBreakpoint()
        {
            GivenIAmOnTheHomepage();
            WhenISetTheBrowserWidthTo(MobileBrowserWidth);
            WhenIClickOnBurgerButton();
            ThenTheMenuDrawerIsDisplayed();
        }

        private void GivenIAmOnTheHomepage()
        {
            VisitPage("/");
        }

        private void WhenISetTheBrowserWidthTo(int browserWidth)
        {
            SetBrowserSize(browserWidth, 500);
        }

        private void WhenIClickOnBurgerButton()
        {
            IWebElement burgerButton = PageContent.FindElement(By.ClassName("burger-menu"));
            burgerButton.Click();
        }

        private void ThenTheHeaderHeightIsSetTo(int headerHeight)
        {
            IWebElement header = PageContent.FindElement(By.TagName("header"));
            Assert.That(header.Size.Height, Is.EqualTo(headerHeight));
        }

        private void ThenTheSiteNavigationIsReplacedWithBurgerButton()
        {
            IWebElement burgerButton = PageContent.FindElement(By.ClassName("burger-menu"));
            IWebElement siteNavigation = PageContent.FindElement(By.TagName("nav")).FindElement(By.TagName("ul"));

            Assert.True(burgerButton.Displayed);
            Assert.False(siteNavigation.Displayed);
        }

        private void ThenTheMenuDrawerIsDisplayed()
        {
            IWebElement menuDrawer = PageContent.FindElement(By.ClassName("menu-drawer"));
            Assert.True(menuDrawer.Displayed);
        }
    }
}
