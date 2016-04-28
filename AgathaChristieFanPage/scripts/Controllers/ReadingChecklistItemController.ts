/// <reference path="../typings/angularjs/angular.d.ts" />

module Controllers
{
    export class ReadingChecklistItemController
    {
        private _scope: Scopes.ReadingChecklistItemScope;

        static $inject = ["$scope"];

        constructor($scope: Scopes.ReadingChecklistItemScope){
            this._scope = $scope;
            this._scope.ShowNovelDetails = this.ShowNovelDetails.bind(this);
        }

        private ShowNovelDetails(novelId: number): void
        {
        }
    }
}

app.controller("ReadingChecklistItem_Controller", Controllers.ReadingChecklistItemController);