/// <reference path="../typings/angularjs/angular.d.ts" />
var Controllers;
(function (Controllers) {
    var NavigationController = (function () {
        function NavigationController($scope) {
            var _this = this;
            this._scope = $scope;
            this._scope.OpenMenuDrawer = function () {
                if (_this._scope.IsMenuDrawerOpen) {
                    _this._scope.$broadcast("close-menu-drawer");
                }
                else {
                    _this._scope.$broadcast("open-menu-drawer");
                }
                _this._scope.IsMenuDrawerOpen = !_this._scope.IsMenuDrawerOpen;
            };
        }
        NavigationController.$inject = ["$scope"];
        return NavigationController;
    })();
    Controllers.NavigationController = NavigationController;
})(Controllers || (Controllers = {}));
app.controller("NavigationController", Controllers.NavigationController);
//# sourceMappingURL=NavigationController.js.map