/// <reference path="../typings/angularjs/angular.d.ts" />
var Controllers;
(function (Controllers) {
    var NavigationController = (function () {
        function NavigationController($scope) {
            this._scope = $scope;
            this._scope.Alert = function () { window.alert("hello"); };
        }
        NavigationController.$inject = ["$scope"];
        return NavigationController;
    })();
    Controllers.NavigationController = NavigationController;
})(Controllers || (Controllers = {}));
app.controller("Navigation_Controller", Controllers.NavigationController);
//# sourceMappingURL=NavigationController.js.map