module Directives
{
    export function CarouselImageDirective(): ng.IDirective
    {
        return {
            restrict: "A",
            scope: { activeImageId: '@' },
            link: (scope: ng.IScope, element: JQuery, attrs: ng.IAttributes) =>
            {
                //element.hide();
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
        }
    }

    app.directive("carouselImageDirective", Directives.CarouselImageDirective);
}