declare module Data
{
    export interface Novel
    {
        Id: number;
        NovelName: string;
        PublishingYear: string;
        Category: string;
        Description: string;
        Images: Image[];
        Read: boolean;
        Watched: boolean;
        OwnACopy: boolean;
    }
}