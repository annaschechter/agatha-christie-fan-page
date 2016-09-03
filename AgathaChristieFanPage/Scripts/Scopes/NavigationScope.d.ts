declare module Scopes
{
    export interface NavigationScope extends ng.IScope
    {
        IsMenuDrawerOpen: boolean;
        OpenMenuDrawer: () => void;
    }
}