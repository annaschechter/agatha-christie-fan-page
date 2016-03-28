/// <reference path="../typings/angularjs/angular.d.ts" />

module Controllers
{
    export class NavigationController
    {
        private _scope: Scopes.NavigationScope;

        static $inject = ["$scope"];

        constructor($scope: Scopes.NavigationScope){
            this._scope = $scope;
            this._scope.OpenMenuDrawer = () => {
                if (this._scope.IsMenuDrawerOpen)
                {
                    this._scope.$broadcast("close-menu-drawer");
                }
                else
                {
                    this._scope.$broadcast("open-menu-drawer");
                }
                
                this._scope.IsMenuDrawerOpen = !this._scope.IsMenuDrawerOpen;
            }
        }
    }
}

app.controller("Navigation_Controller", Controllers.NavigationController);