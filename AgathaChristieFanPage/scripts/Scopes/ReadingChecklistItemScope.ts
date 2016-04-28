module Scopes
{
    export interface ReadingChecklistItemScope extends ng.IScope
    {
        NovelId: number;
        ShowNovelDetails: (novelId: number) => void;
    }
}