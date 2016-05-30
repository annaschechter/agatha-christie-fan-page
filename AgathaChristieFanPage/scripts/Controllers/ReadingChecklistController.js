/// <reference path="../typings/angularjs/angular.d.ts" />
var Controllers;
(function (Controllers) {
    var ReadingChecklistController = (function () {
        function ReadingChecklistController($scope, $http) {
            this._scope = $scope;
            this._http = $http;
            this._scope.ShowNovelDetails = this.ShowNovelDetails.bind(this);
        }
        ReadingChecklistController.prototype.ShowNovelDetails = function (novelId) {
            var _this = this;
            this._http({
                method: 'GET',
                url: '/api/noveldetails/' + novelId
            }).then(function (response) {
                _this._scope.$broadcast("show-novel-details", response.data);
            });
        };
        ReadingChecklistController.$inject = ["$scope", "$http"];
        return ReadingChecklistController;
    })();
    Controllers.ReadingChecklistController = ReadingChecklistController;
})(Controllers || (Controllers = {}));
app.controller("ReadingChecklistController", Controllers.ReadingChecklistController);
//# sourceMappingURL=ReadingChecklistController.js.map