module Directives
{
    export class ChecklistItemDirective implements ng.IDirective
    {
        public restrict = 'A';
        public scope = false; 

        constructor(private localStorageService: Services.LocalStorageService) {}

        link = (scope, element: JQuery, attrs: ng.IAttributes) =>
        {
            var checklistItem: Data.ChecklistItem = this.localStorageService.GetUserChecklistItem(scope.novel.NovelName);
            if (checklistItem)
            {
                scope.novel.Read = checklistItem.Read;
                scope.novel.Watched = checklistItem.Watched;
                scope.novel.OwnACopy = checklistItem.OwnACopy;
            }

            this.UpdateNovelOnChange(scope, 'novel.Read');
            this.UpdateNovelOnChange(scope, 'novel.Watched');
            this.UpdateNovelOnChange(scope, 'novel.OwnACopy');
        }

        private UpdateNovelOnChange(scope, property: string): void
        {
            scope.$watch(property, (oldValue, newValue) =>
            {
                if (oldValue !== newValue)
                {
                    var checklistItem: Data.ChecklistItem =
                        {
                            NovelName: scope.novel.NovelName,
                            Read: scope.novel.Read,
                            Watched: scope.novel.Watched,
                            OwnACopy: scope.novel.OwnACopy
                        }
                    this.localStorageService.UpdateChecklist(checklistItem);
                }
            });

        }

        static Factory(): ng.IDirectiveFactory
        {
            var directive = (localStorageService: Services.LocalStorageService) => new ChecklistItemDirective(localStorageService);
            directive.$inject = ['localStorageService'];
            return directive;
        }
    }

    app.directive("checklistItemDirective", Directives.ChecklistItemDirective.Factory());
}