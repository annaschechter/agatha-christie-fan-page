module Directives
{
    export function MenuDrawerDirective(): ng.IDirective
    {
        return {
            link: (scope: ng.IScope, element: JQuery, attrs: ng.IAttributes) =>
            {
                element.hide();
                var drawerHeight: number = $(document).height();
                element.css("height", drawerHeight);

                scope.$on("open-menu-drawer", () => {
                    element.show(300);
                });

                scope.$on("close-menu-drawer", () => {
                    element.hide(300);
                });
            }
        }
    }

    app.directive("menuDrawerDirective", Directives.MenuDrawerDirective);
}