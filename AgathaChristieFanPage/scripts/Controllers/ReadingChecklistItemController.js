/// <reference path="../typings/angularjs/angular.d.ts" />
var Controllers;
(function (Controllers) {
    var ReadingChecklistItemController = (function () {
        function ReadingChecklistItemController($scope) {
            this._scope = $scope;
            this._scope.ShowNovelDetails = this.ShowNovelDetails.bind(this);
        }
        ReadingChecklistItemController.prototype.ShowNovelDetails = function (novelId) {
        };
        ReadingChecklistItemController.$inject = ["$scope"];
        return ReadingChecklistItemController;
    })();
    Controllers.ReadingChecklistItemController = ReadingChecklistItemController;
})(Controllers || (Controllers = {}));
app.controller("ReadingChecklistItem_Controller", Controllers.ReadingChecklistItemController);
//# sourceMappingURL=ReadingChecklistItemController.js.map