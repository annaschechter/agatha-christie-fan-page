declare module Scopes
{
    export interface NovelDetailsScope extends ng.IScope
    {
        Novel: Data.Novel;
        IsDisplaying: boolean;
        ActiveImageId: number;
        NextImage(): () => void;
        PreviousImage(): () => void;
        CloseOverlay: () => void;
    }
}