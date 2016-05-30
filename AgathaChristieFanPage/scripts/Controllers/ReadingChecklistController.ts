/// <reference path="../typings/angularjs/angular.d.ts" />

module Controllers
{
    export class ReadingChecklistController
    {
        private _scope: Scopes.ReadingChecklistScope;
        private _http: ng.IHttpService;

        static $inject = ["$scope", "$http"];

        constructor($scope: Scopes.ReadingChecklistScope, $http: ng.IHttpService){
            this._scope = $scope;
            this._http = $http;
            this._scope.ShowNovelDetails = this.ShowNovelDetails.bind(this);
        }

        private ShowNovelDetails(novelId: number): void
        {
            this._http({
                method: 'GET',
                url: '/api/noveldetails/' + novelId
            }).then((response) => {
                this._scope.$broadcast("show-novel-details", response.data);
            });
        }
    }
}

app.controller("ReadingChecklistController", Controllers.ReadingChecklistController);