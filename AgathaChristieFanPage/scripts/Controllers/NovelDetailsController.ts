/// <reference path="../typings/angularjs/angular.d.ts" />

module Controllers
{
    export class NovelDetailsController
    {
        private _scope: Scopes.NovelDetailsScope;
        private _timeout: ng.ITimeoutService;

        static $inject = ["$scope", "$timeout"];

        constructor($scope: Scopes.NovelDetailsScope, timeout: ng.ITimeoutService)
        {
            this._scope = $scope;
            this._timeout = timeout;
            this._scope.$on("show-novel-details", this.OnNovelDataReceived.bind(this));
            this._scope.CloseOverlay = this.CloseOverlay.bind(this);
            this._scope.NextImage = this.NextImage.bind(this);
            this._scope.PreviousImage = this.PreviousImage.bind(this);
        }

        private NextImage(): void
        {
            if (this._scope.ActiveImageId < this._scope.Novel.Images.length)
            {
                this._scope.ActiveImageId += 1;
            }
        }

        private PreviousImage(): void
        {
            if (this._scope.ActiveImageId > 1)
            {
                this._scope.ActiveImageId -= 1;
            }
        }

        private OnNovelDataReceived(event: ng.IAngularEvent, data: any): void
        {
            this._scope.Novel = this.ConvertDataToNovel(data);
            this._scope.ActiveImageId = 1;
            this._scope.IsDisplaying = true;
        }

        private CloseOverlay(): void
        {
            this._scope.IsDisplaying = false;
        }

        private ConvertDataToNovel(data: any): Data.Novel
        {
            return {
                Id: data.id,
                NovelName: data.novelName,
                PublishingYear: data.publishingYear,
                Category: data.category,
                Description: data.description,
                Images: this.ConvertDataImagesToImages(data)
            }
        }

        private ConvertDataImagesToImages(data: any): Data.Image[]
        {
            var images: Data.Image[] = []
            for (var i = 0; i < data.images.length; i++)
            {
                var dataImage = data.images[i];
                var image: Data.Image =
                {
                    Id: i+1,
                    AltText: dataImage.altText,
                    ImageUrl: dataImage.imageUrl
                }
                images.push(image);
            }
            return images;
        }
    }
}

app.controller("NovelDetailsController", Controllers.NovelDetailsController);