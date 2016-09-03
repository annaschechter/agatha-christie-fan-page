declare module Scopes
{
    export interface ReadingChecklistScope extends ng.IScope
    {
        Novels: Data.Novel[];
        ShowNovelDetails: (novelId: number) => void;
    }
}