module Directives
{
    export class CarouselImageDirective implements ng.IDirective
    {
        public restrict = "A";
        public scope = { activeImageId: '@' };

        public link = (scope: ng.IScope, element: JQuery, attrs: ng.IAttributes) =>
        {
            var imageId: number = attrs["carouselImageDirective"];
            scope.$watch('activeImageId', (newValue) =>
            {
                if (newValue === imageId)
                {
                    element.fadeIn();
                }
                else
                {
                    element.fadeOut();
                }
            })
        }

        static Factory(): ng.IDirectiveFactory
        {
            return () => new CarouselImageDirective();
        }
    }

    app.directive("carouselImageDirective", Directives.CarouselImageDirective.Factory());
}