var Directives;
(function (Directives) {
    function CarouselImageDirective() {
        return {
            restrict: "A",
            scope: { activeImageId: '@' },
            link: function (scope, element, attrs) {
                //element.hide();
                var imageId = attrs["carouselImageDirective"];
                scope.$watch('activeImageId', function (newValue) {
                    if (newValue === imageId) {
                        element.fadeIn();
                    }
                    else {
                        element.fadeOut();
                    }
                });
            }
        };
    }
    Directives.CarouselImageDirective = CarouselImageDirective;
    app.directive("carouselImageDirective", Directives.CarouselImageDirective);
})(Directives || (Directives = {}));
//# sourceMappingURL=CarouselImageDirective.js.map