declare module Scopes
{
    export interface ReadingChecklistScope extends ng.IScope
    {
        ShowNovelDetails: (novelId: number) => void;
    }
}