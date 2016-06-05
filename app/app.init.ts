(()=> {
    angular.module("jetstreamApp")
        .service("SearchService", JetStream.Services.SearchService)
        .component("newsList", new JetStream.Components.NewsListComponent())
        .component("newsItem", new JetStream.Components.NewsItemComponent());
})();