// </// <reference path="typings/angularjs/angular.d.ts" />

module JetStream.Services {
    /*
    * News result interface
    */
    export interface INewsResult {
        title: string,
        publishDate: Date,
        synopsis: string,
        picture: string,
        displayOrder: number,
        promoted: boolean,
        functionalArea: string,
        id: number,
        path: string,
        showInHome: boolean,
        expireDate: Date,
        body: string,
        onTop: boolean,
        video: string
    }

    export interface ISearchResults {
        isDone: boolean;
        results: Array<INewsResult>;
    }

    export interface ISearchService {
        getData(): ng.IPromise<ISearchResults>;
    }

    /**
     * This will perform search.
     */
    export class SearchService implements ISearchService {
        static $intject = ['$q'];

        /**
         * Initialize
         * @param $q
         * @param UtilityService
         */
        constructor(private $q: ng.IQService) {

        }

        /**
         * Get Search Results.
         */
        getData(): ng.IPromise<ISearchResults> {
            var defered = this.$q.defer();
            
            defered.resolve({
                isDone:true,
                results:[
                    {
                       title: "News 1",
                        publishDate: new Date(),
                        synopsis: "Sample",
                        picture: "images/news.jpg",
                        displayOrder: 0,
                        promoted: false,
                        functionalArea: "Finance",
                        id: 1,
                        path: "news/item1",
                        showInHome: false,
                        expireDate: new Date(),
                        body: "News BOdy",
                        onTop: true,
                        video: null 
                    },
                    {
                       title: "News 2",
                        publishDate: new Date(),
                        synopsis: "Sample",
                        picture: "images/news.jpg",
                        displayOrder: 0,
                        promoted: false,
                        functionalArea: "Finance",
                        id: 1,
                        path: "news/item1",
                        showInHome: false,
                        expireDate: new Date(),
                        body: "News BOdy",
                        onTop: true,
                        video: null 
                    },
                    {
                       title: "News 3",
                        publishDate: new Date(),
                        synopsis: "Sample",
                        picture: "images/news.jpg",
                        displayOrder: 0,
                        promoted: false,
                        functionalArea: "Finance",
                        id: 1,
                        path: "news/item1",
                        showInHome: false,
                        expireDate: new Date(),
                        body: "News BOdy",
                        onTop: true,
                        video: null 
                    },
                    {
                       title: "News 4",
                        publishDate: new Date(),
                        synopsis: "Sample",
                        picture: "images/news.jpg",
                        displayOrder: 0,
                        promoted: false,
                        functionalArea: "Finance",
                        id: 1,
                        path: "news/item1",
                        showInHome: false,
                        expireDate: new Date(),
                        body: "News BOdy",
                        onTop: true,
                        video: null 
                    },
                    {
                       title: "News 5",
                        publishDate: new Date(),
                        synopsis: "Sample",
                        picture: "images/news.jpg",
                        displayOrder: 0,
                        promoted: false,
                        functionalArea: "Finance",
                        id: 1,
                        path: "news/item1",
                        showInHome: false,
                        expireDate: new Date(),
                        body: "News BOdy",
                        onTop: true,
                        video: null 
                    },
                    {
                       title: "News 6",
                        publishDate: new Date(),
                        synopsis: "Sample",
                        picture: "images/news.jpg",
                        displayOrder: 0,
                        promoted: false,
                        functionalArea: "Finance",
                        id: 1,
                        path: "news/item1",
                        showInHome: false,
                        expireDate: new Date(),
                        body: "News BOdy",
                        onTop: true,
                        video: null 
                    },
                    {
                       title: "News 7",
                        publishDate: new Date(),
                        synopsis: "Sample",
                        picture: "images/news.jpg",
                        displayOrder: 0,
                        promoted: false,
                        functionalArea: "Finance",
                        id: 1,
                        path: "news/item1",
                        showInHome: false,
                        expireDate: new Date(),
                        body: "News BOdy",
                        onTop: true,
                        video: null 
                    },
                    {
                       title: "News 8",
                        publishDate: new Date(),
                        synopsis: "Sample",
                        picture: "images/news.jpg",
                        displayOrder: 0,
                        promoted: false,
                        functionalArea: "Finance",
                        id: 1,
                        path: "news/item1",
                        showInHome: false,
                        expireDate: new Date(),
                        body: "News BOdy",
                        onTop: true,
                        video: null 
                    }
                ]
            })
            return defered.promise;
            
        }
    }

}