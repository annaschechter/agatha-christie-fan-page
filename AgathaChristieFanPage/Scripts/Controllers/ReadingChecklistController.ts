/// <reference path="../typings/angularjs/angular.d.ts" />

module Controllers
{
    export class ReadingChecklistController
    {
        private _scope: Scopes.ReadingChecklistScope;
        private _http: ng.IHttpService;

        static $inject = ["$scope", "$http", "novelsData"];

        constructor($scope: Scopes.ReadingChecklistScope,
            $http: ng.IHttpService,
            novelsData: Data.Novel[])
        {
            this._scope = $scope;
            this._http = $http;

            this._scope.Novels = novelsData;
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

        //private ReadClick(novelName: string): void
        //{
        //    var checklistItem: Data.ChecklistItem = this._localStorageService.GetUserChecklistItem(novelName);
        //    if (checklistItem)
        //    {
        //        checklistItem.Read = !checklistItem.Read;
        //    }
        //    else
        //    {
        //        checklistItem = { NovelName: novelName, Read: true, Watched: false, OwnACopy: false }
        //    }

        //    this._localStorageService.UpdateChecklist(checklistItem);
        //}
    }
}

app.controller("ReadingChecklistController", Controllers.ReadingChecklistController);