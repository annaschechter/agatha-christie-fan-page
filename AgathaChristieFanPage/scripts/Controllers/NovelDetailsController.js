/// <reference path="../typings/angularjs/angular.d.ts" />
var Controllers;
(function (Controllers) {
    var NovelDetailsController = (function () {
        function NovelDetailsController($scope, timeout) {
            this._scope = $scope;
            this._timeout = timeout;
            this._scope.$on("show-novel-details", this.OnNovelDataReceived.bind(this));
            this._scope.CloseOverlay = this.CloseOverlay.bind(this);
            this._scope.NextImage = this.NextImage.bind(this);
            this._scope.PreviousImage = this.PreviousImage.bind(this);
        }
        NovelDetailsController.prototype.NextImage = function () {
            if (this._scope.ActiveImageId < this._scope.Novel.Images.length) {
                this._scope.ActiveImageId += 1;
            }
        };
        NovelDetailsController.prototype.PreviousImage = function () {
            if (this._scope.ActiveImageId > 1) {
                this._scope.ActiveImageId -= 1;
            }
        };
        NovelDetailsController.prototype.OnNovelDataReceived = function (event, data) {
            this._scope.Novel = this.ConvertDataToNovel(data);
            this._scope.ActiveImageId = 1;
            this._scope.IsDisplaying = true;
        };
        NovelDetailsController.prototype.CloseOverlay = function () {
            this._scope.IsDisplaying = false;
        };
        NovelDetailsController.prototype.ConvertDataToNovel = function (data) {
            return {
                Id: data.id,
                NovelName: data.novelName,
                PublishingYear: data.publishingYear,
                Category: data.category,
                Description: data.description,
                Images: this.ConvertDataImagesToImages(data)
            };
        };
        NovelDetailsController.prototype.ConvertDataImagesToImages = function (data) {
            var images = [];
            for (var i = 0; i < data.images.length; i++) {
                var dataImage = data.images[i];
                var image = {
                    Id: i + 1,
                    AltText: dataImage.altText,
                    ImageUrl: dataImage.imageUrl
                };
                images.push(image);
            }
            return images;
        };
        NovelDetailsController.$inject = ["$scope", "$timeout"];
        return NovelDetailsController;
    })();
    Controllers.NovelDetailsController = NovelDetailsController;
})(Controllers || (Controllers = {}));
app.controller("NovelDetailsController", Controllers.NovelDetailsController);
//# sourceMappingURL=NovelDetailsController.js.map