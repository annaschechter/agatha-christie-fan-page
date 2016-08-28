module Services
{
    export class LocalStorageService
    {
        private _window: ng.IWindowService;

        static $inject = ["$window"];

        constructor(window: ng.IWindowService)
        {
            this._window = window;
        }

        public GetUserChecklistItem(novelName: string): Data.ChecklistItem
        {
            var checklist = this.GetUserChecklist();
            return this.FindMatchingItem(checklist, novelName);
        }

        public UpdateChecklist(checklistItem: Data.ChecklistItem): void
        {
            var checklist = this.GetUserChecklist();

            if (checklist.length > 0)
            {
                var checklistItemFromStorage: Data.ChecklistItem = this.FindMatchingItem(checklist, checklistItem.NovelName);
                if (checklistItemFromStorage)
                {
                    checklist = checklist.filter((item: Data.ChecklistItem) =>
                    {
                        return item.NovelName !== checklistItem.NovelName;
                    });
                }
            }
            checklist.push(checklistItem);
            this._window.localStorage.setItem("readingChecklist", JSON.stringify(checklist));
        }

        private GetUserChecklist(): Data.ChecklistItem[]
        {
            var localStorageValue: string = this._window.localStorage.getItem("readingChecklist");
            return localStorageValue ? JSON.parse(localStorageValue) : [];
        }

        private FindMatchingItem(checklist: Data.ChecklistItem[], novelName: string): Data.ChecklistItem
        {
            var matchingItemList = checklist.filter((item: Data.ChecklistItem) =>
            {
                return item.NovelName === novelName;
            });
            return matchingItemList.length > 0 ? matchingItemList[0] : null;
        }
    }

    app.service("localStorageService", Services.LocalStorageService);
}