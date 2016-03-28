var Directives;
(function (Directives) {
    function MenuDrawerDirective() {
        return {
            link: function (scope, element, attrs) {
                element.hide();
                var drawerHeight = $(document).height();
                element.css("height", drawerHeight);
                scope.$on("open-menu-drawer", function () {
                    element.show(300);
                });
                scope.$on("close-menu-drawer", function () {
                    element.hide(300);
                });
            }
        };
    }
    Directives.MenuDrawerDirective = MenuDrawerDirective;
    app.directive("menuDrawerDirective", Directives.MenuDrawerDirective);
})(Directives || (Directives = {}));
