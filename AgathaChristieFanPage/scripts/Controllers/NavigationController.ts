/// <reference path="../typings/angularjs/angular.d.ts" />

module Controllers
{
    export class NavigationController
    {
        private _scope: Scopes.NavigationScope;

        static $inject = ["$scope"];

        constructor($scope: Scopes.NavigationScope){
            this._scope = $scope;
            this._scope.Alert = () => { window.alert("hello"); }
        }
    }
}

app.controller("Navigation_Controller", Controllers.NavigationController);