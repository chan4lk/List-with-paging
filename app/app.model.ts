module JetStream{
    export interface INewsItem{
        title: string;
        onTop:boolean;
        publishDate:Date;
        image:string;
        displayOrder:number;
    }
}