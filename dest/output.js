/// <reference path="../typings/angularjs/angular.d.ts" />
/**
 * This will create the angular module.
 */
(function () {
    angular.module("jetstreamApp", []);
})();

// </// <reference path="typings/angularjs/angular.d.ts" />
var JetStream;
(function (JetStream) {
    var Services;
    (function (Services) {
        /**
         * This will perform search.
         */
        var SearchService = (function () {
            /**
             * Initialize
             * @param $q
             * @param UtilityService
             */
            function SearchService($q) {
                this.$q = $q;
            }
            /**
             * Get Search Results.
             */
            SearchService.prototype.getData = function () {
                var defered = this.$q.defer();
                defered.resolve({
                    isDone: true,
                    results: [
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
                });
                return defered.promise;
            };
            SearchService.$intject = ['$q'];
            return SearchService;
        }());
        Services.SearchService = SearchService;
    })(Services = JetStream.Services || (JetStream.Services = {}));
})(JetStream || (JetStream = {}));

var JetStream;
(function (JetStream) {
    var Components;
    (function (Components) {
        var NewsListControler = (function () {
            function NewsListControler(SearchService) {
                this.SearchService = SearchService;
                this.newsCount = 1;
            }
            NewsListControler.prototype.$onInit = function () {
                var _this = this;
                this.name = "chan";
                this.SearchService.getData().then(function (data) {
                    _this.items = data.results;
                    _this.pageItems = _this.items.slice(0, _this.newsCount);
                    _this.currentPage = 1;
                });
            };
            NewsListControler.prototype.goTo = function (index) {
                if (index > -1 && index < this.items.length) {
                    this.pageItems = this.items.slice(index, index + this.newsCount);
                    this.currentPage = Math.floor(index / this.newsCount) + 1;
                }
            };
            NewsListControler.prototype.next = function () {
                var index = this.currentPage * this.newsCount;
                this.pageItems = this.items.slice(index, index + this.newsCount);
                this.currentPage = Math.floor(index / this.newsCount + 1);
            };
            NewsListControler.prototype.previous = function () {
                var index = (this.currentPage * this.newsCount) - 2 * this.newsCount;
                this.pageItems = this.items.slice(index, index + this.newsCount);
                this.currentPage = Math.floor(index / this.newsCount + 1);
            };
            return NewsListControler;
        }());
        Components.NewsListControler = NewsListControler;
        var NewsListComponent = (function () {
            function NewsListComponent() {
                this.controller = ["SearchService", NewsListControler];
                this.templateUrl = '/app/news-list.html',
                    this.controllerAs = 'listCtrl';
                this.bindings = {
                    name: '<?',
                };
            }
            return NewsListComponent;
        }());
        Components.NewsListComponent = NewsListComponent;
        ;
    })(Components = JetStream.Components || (JetStream.Components = {}));
})(JetStream || (JetStream = {}));

var JetStream;
(function (JetStream) {
    var Components;
    (function (Components) {
        var NewsItemControler = (function () {
            function NewsItemControler() {
            }
            NewsItemControler.prototype.$onInit = function () {
            };
            return NewsItemControler;
        }());
        Components.NewsItemControler = NewsItemControler;
        var NewsItemComponent = (function () {
            function NewsItemComponent() {
                this.controller = NewsItemControler;
                this.templateUrl = '/app/news-item.html',
                    this.controllerAs = 'vm';
                this.bindings = {
                    name: '<?',
                    item: '<?'
                };
            }
            return NewsItemComponent;
        }());
        Components.NewsItemComponent = NewsItemComponent;
        ;
    })(Components = JetStream.Components || (JetStream.Components = {}));
})(JetStream || (JetStream = {}));

(function () {
    angular.module("jetstreamApp")
        .service("SearchService", JetStream.Services.SearchService)
        .component("newsList", new JetStream.Components.NewsListComponent())
        .component("newsItem", new JetStream.Components.NewsItemComponent());
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiLCJzZXJ2aWNlcy9hcHAuc2VydmljZS5zZWFyY2gudHMiLCJhcHAuY29tcG9uZW50Lm5ld3NsaXN0LnRzIiwiYXBwLmNvbXBvbmVudC50cyIsImFwcC5pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBEQUEwRDtBQUUxRDs7R0FFRztBQUNILENBQUM7SUFFRyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUV2QyxDQUFDLENBQUMsRUFBRSxDQUFDOztBQ1RMLDJEQUEyRDtBQUUzRCxJQUFPLFNBQVMsQ0E2TGY7QUE3TEQsV0FBTyxTQUFTO0lBQUMsSUFBQSxRQUFRLENBNkx4QjtJQTdMZ0IsV0FBQSxRQUFRLEVBQUMsQ0FBQztRQThCdkI7O1dBRUc7UUFDSDtZQUdJOzs7O2VBSUc7WUFDSCx1QkFBb0IsRUFBZ0I7Z0JBQWhCLE9BQUUsR0FBRixFQUFFLENBQWM7WUFFcEMsQ0FBQztZQUVEOztlQUVHO1lBQ0gsK0JBQU8sR0FBUDtnQkFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUU5QixPQUFPLENBQUMsT0FBTyxDQUFDO29CQUNaLE1BQU0sRUFBQyxJQUFJO29CQUNYLE9BQU8sRUFBQzt3QkFDSjs0QkFDRyxLQUFLLEVBQUUsUUFBUTs0QkFDZCxXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUU7NEJBQ3ZCLFFBQVEsRUFBRSxRQUFROzRCQUNsQixPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixZQUFZLEVBQUUsQ0FBQzs0QkFDZixRQUFRLEVBQUUsS0FBSzs0QkFDZixjQUFjLEVBQUUsU0FBUzs0QkFDekIsRUFBRSxFQUFFLENBQUM7NEJBQ0wsSUFBSSxFQUFFLFlBQVk7NEJBQ2xCLFVBQVUsRUFBRSxLQUFLOzRCQUNqQixVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUU7NEJBQ3RCLElBQUksRUFBRSxXQUFXOzRCQUNqQixLQUFLLEVBQUUsSUFBSTs0QkFDWCxLQUFLLEVBQUUsSUFBSTt5QkFDZDt3QkFDRDs0QkFDRyxLQUFLLEVBQUUsUUFBUTs0QkFDZCxXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUU7NEJBQ3ZCLFFBQVEsRUFBRSxRQUFROzRCQUNsQixPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixZQUFZLEVBQUUsQ0FBQzs0QkFDZixRQUFRLEVBQUUsS0FBSzs0QkFDZixjQUFjLEVBQUUsU0FBUzs0QkFDekIsRUFBRSxFQUFFLENBQUM7NEJBQ0wsSUFBSSxFQUFFLFlBQVk7NEJBQ2xCLFVBQVUsRUFBRSxLQUFLOzRCQUNqQixVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUU7NEJBQ3RCLElBQUksRUFBRSxXQUFXOzRCQUNqQixLQUFLLEVBQUUsSUFBSTs0QkFDWCxLQUFLLEVBQUUsSUFBSTt5QkFDZDt3QkFDRDs0QkFDRyxLQUFLLEVBQUUsUUFBUTs0QkFDZCxXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUU7NEJBQ3ZCLFFBQVEsRUFBRSxRQUFROzRCQUNsQixPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixZQUFZLEVBQUUsQ0FBQzs0QkFDZixRQUFRLEVBQUUsS0FBSzs0QkFDZixjQUFjLEVBQUUsU0FBUzs0QkFDekIsRUFBRSxFQUFFLENBQUM7NEJBQ0wsSUFBSSxFQUFFLFlBQVk7NEJBQ2xCLFVBQVUsRUFBRSxLQUFLOzRCQUNqQixVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUU7NEJBQ3RCLElBQUksRUFBRSxXQUFXOzRCQUNqQixLQUFLLEVBQUUsSUFBSTs0QkFDWCxLQUFLLEVBQUUsSUFBSTt5QkFDZDt3QkFDRDs0QkFDRyxLQUFLLEVBQUUsUUFBUTs0QkFDZCxXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUU7NEJBQ3ZCLFFBQVEsRUFBRSxRQUFROzRCQUNsQixPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixZQUFZLEVBQUUsQ0FBQzs0QkFDZixRQUFRLEVBQUUsS0FBSzs0QkFDZixjQUFjLEVBQUUsU0FBUzs0QkFDekIsRUFBRSxFQUFFLENBQUM7NEJBQ0wsSUFBSSxFQUFFLFlBQVk7NEJBQ2xCLFVBQVUsRUFBRSxLQUFLOzRCQUNqQixVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUU7NEJBQ3RCLElBQUksRUFBRSxXQUFXOzRCQUNqQixLQUFLLEVBQUUsSUFBSTs0QkFDWCxLQUFLLEVBQUUsSUFBSTt5QkFDZDt3QkFDRDs0QkFDRyxLQUFLLEVBQUUsUUFBUTs0QkFDZCxXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUU7NEJBQ3ZCLFFBQVEsRUFBRSxRQUFROzRCQUNsQixPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixZQUFZLEVBQUUsQ0FBQzs0QkFDZixRQUFRLEVBQUUsS0FBSzs0QkFDZixjQUFjLEVBQUUsU0FBUzs0QkFDekIsRUFBRSxFQUFFLENBQUM7NEJBQ0wsSUFBSSxFQUFFLFlBQVk7NEJBQ2xCLFVBQVUsRUFBRSxLQUFLOzRCQUNqQixVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUU7NEJBQ3RCLElBQUksRUFBRSxXQUFXOzRCQUNqQixLQUFLLEVBQUUsSUFBSTs0QkFDWCxLQUFLLEVBQUUsSUFBSTt5QkFDZDt3QkFDRDs0QkFDRyxLQUFLLEVBQUUsUUFBUTs0QkFDZCxXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUU7NEJBQ3ZCLFFBQVEsRUFBRSxRQUFROzRCQUNsQixPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixZQUFZLEVBQUUsQ0FBQzs0QkFDZixRQUFRLEVBQUUsS0FBSzs0QkFDZixjQUFjLEVBQUUsU0FBUzs0QkFDekIsRUFBRSxFQUFFLENBQUM7NEJBQ0wsSUFBSSxFQUFFLFlBQVk7NEJBQ2xCLFVBQVUsRUFBRSxLQUFLOzRCQUNqQixVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUU7NEJBQ3RCLElBQUksRUFBRSxXQUFXOzRCQUNqQixLQUFLLEVBQUUsSUFBSTs0QkFDWCxLQUFLLEVBQUUsSUFBSTt5QkFDZDt3QkFDRDs0QkFDRyxLQUFLLEVBQUUsUUFBUTs0QkFDZCxXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUU7NEJBQ3ZCLFFBQVEsRUFBRSxRQUFROzRC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ZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9hbmd1bGFyanMvYW5ndWxhci5kLnRzXCIgLz5cclxuXHJcbi8qKlxyXG4gKiBUaGlzIHdpbGwgY3JlYXRlIHRoZSBhbmd1bGFyIG1vZHVsZS5cclxuICovXHJcbigoKT0+IHtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImpldHN0cmVhbUFwcFwiLCBbXSk7XHJcblxyXG59KSgpOyIsbnVsbCwibW9kdWxlIEpldFN0cmVhbS5Db21wb25lbnRzIHtcclxuICAgICBpbnRlcmZhY2UgSU5ld3NMaXN0Q29udHJvbGxlcntcclxuICAgICAgICBpdGVtczpBcnJheTxTZXJ2aWNlcy5JTmV3c1Jlc3VsdD47XHJcbiAgICAgICAgcGFnZUl0ZW1zOkFycmF5PFNlcnZpY2VzLklOZXdzUmVzdWx0PjtcclxuICAgICAgICBvbkNoYW5nZShpbmRleDpudW1iZXIpO1xyXG4gICAgICAgIG5leHQoKTp2b2lkO1xyXG4gICAgICAgIHByZXZpb3VzKCk6dm9pZDtcclxuICAgICAgICBuZXdzQ291bnQ6bnVtYmVyO1xyXG4gICAgICAgIGN1cnJlbnRQYWdlOm51bWJlcjtcclxuICAgIH1cclxuICAgIGV4cG9ydCBjbGFzcyBOZXdzTGlzdENvbnRyb2xlciBpbXBsZW1lbnRzIElOZXdzTGlzdENvbnRyb2xsZXIge1xyXG4gICAgICAgIG5hbWU6c3RyaW5nO1xyXG4gICAgICAgIGl0ZW1zOkFycmF5PFNlcnZpY2VzLklOZXdzUmVzdWx0PjtcclxuICAgICAgICBwYWdlSXRlbXM6QXJyYXk8U2VydmljZXMuSU5ld3NSZXN1bHQ+O1xyXG4gICAgICAgIG5ld3NDb3VudDpudW1iZXI7XHJcbiAgICAgICAgY3VycmVudFBhZ2U6bnVtYmVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgU2VhcmNoU2VydmljZTogU2VydmljZXMuSVNlYXJjaFNlcnZpY2UpIHtcclxuICAgICAgICAgIHRoaXMubmV3c0NvdW50ID0gMTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgJG9uSW5pdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gXCJjaGFuXCI7XHJcbiAgICAgICAgICAgICB0aGlzLlNlYXJjaFNlcnZpY2UuZ2V0RGF0YSgpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlSXRlbXMgPSB0aGlzLml0ZW1zLnNsaWNlKDAsIHRoaXMubmV3c0NvdW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZ29UbyhpbmRleDpudW1iZXIpe1xyXG4gICAgICAgICAgICBpZihpbmRleCA+IC0xICYmIGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlSXRlbXMgPSB0aGlzLml0ZW1zLnNsaWNlKGluZGV4LCBpbmRleCArIHRoaXMubmV3c0NvdW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBNYXRoLmZsb29yKGluZGV4L3RoaXMubmV3c0NvdW50KSArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbmV4dCgpe1xyXG4gICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuY3VycmVudFBhZ2UgKiB0aGlzLm5ld3NDb3VudDtcclxuICAgICAgICAgICAgIHRoaXMucGFnZUl0ZW1zID0gdGhpcy5pdGVtcy5zbGljZShpbmRleCwgaW5kZXggKyB0aGlzLm5ld3NDb3VudCk7XHJcbiAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gIE1hdGguZmxvb3IoaW5kZXgvdGhpcy5uZXdzQ291bnQgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJldmlvdXMoKXtcclxuICAgICAgICAgICAgIGxldCBpbmRleCA9ICh0aGlzLmN1cnJlbnRQYWdlICogdGhpcy5uZXdzQ291bnQpIC0gMiAqIHRoaXMubmV3c0NvdW50IDtcclxuICAgICAgICAgICAgIHRoaXMucGFnZUl0ZW1zID0gdGhpcy5pdGVtcy5zbGljZShpbmRleCwgaW5kZXggKyB0aGlzLm5ld3NDb3VudCk7XHJcbiAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gIE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLm5ld3NDb3VudCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGNsYXNzIE5ld3NMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgbmcuSUNvbXBvbmVudE9wdGlvbnMge1xyXG4gICAgICAgIHB1YmxpYyBiaW5kaW5nczphbnk7XHJcbiAgICAgICAgcHVibGljIGNvbnRyb2xsZXI6YW55O1xyXG4gICAgICAgIHB1YmxpYyB0ZW1wbGF0ZVVybDpzdHJpbmc7XHJcbiAgICAgICAgcHVibGljIGNvbnRyb2xsZXJBczpzdHJpbmc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyID0gW1wiU2VhcmNoU2VydmljZVwiLE5ld3NMaXN0Q29udHJvbGVyXTtcclxuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVVybCA9ICcvYXBwL25ld3MtbGlzdC5odG1sJyxcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyQXMgPSAnbGlzdEN0cmwnO1xyXG4gICAgICAgICAgICB0aGlzLmJpbmRpbmdzID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJzw/JyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblx0fTtcclxuXHRcclxufVxyXG5cclxuIiwibW9kdWxlIEpldFN0cmVhbS5Db21wb25lbnRzIHtcclxuICAgIGludGVyZmFjZSBJTmV3c0l0ZW1Db250cm9sbGVye1xyXG4gICAgICAgIGl0ZW06U2VydmljZXMuSU5ld3NSZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBleHBvcnQgY2xhc3MgTmV3c0l0ZW1Db250cm9sZXIgaW1wbGVtZW50cyBJTmV3c0l0ZW1Db250cm9sbGVye1xyXG4gICAgICAgIGl0ZW06U2VydmljZXMuSU5ld3NSZXN1bHQ7ICAgICAgICBcclxuICAgICAgICBuYW1lOnN0cmluZztcclxuICAgICAgICAkb25Jbml0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHRleHBvcnQgY2xhc3MgTmV3c0l0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBuZy5JQ29tcG9uZW50T3B0aW9ucyB7XHJcbiAgICAgICAgcHVibGljIGJpbmRpbmdzOmFueTtcclxuICAgICAgICBwdWJsaWMgY29udHJvbGxlcjphbnk7XHJcbiAgICAgICAgcHVibGljIHRlbXBsYXRlVXJsOnN0cmluZztcclxuICAgICAgICBwdWJsaWMgY29udHJvbGxlckFzOnN0cmluZztcclxuICAgICAgICBcclxuICAgICAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSAgTmV3c0l0ZW1Db250cm9sZXI7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVVcmwgPSAnL2FwcC9uZXdzLWl0ZW0uaHRtbCcsXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlckFzID0gJ3ZtJztcclxuICAgICAgICAgICAgdGhpcy5iaW5kaW5ncyA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICc8PycsXHJcbiAgICAgICAgICAgICAgICBpdGVtOiAnPD8nXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cdH07XHJcblx0XHJcbn1cclxuXHJcbiIsIigoKT0+IHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiamV0c3RyZWFtQXBwXCIpXHJcbiAgICAgICAgLnNlcnZpY2UoXCJTZWFyY2hTZXJ2aWNlXCIsIEpldFN0cmVhbS5TZXJ2aWNlcy5TZWFyY2hTZXJ2aWNlKVxyXG4gICAgICAgIC5jb21wb25lbnQoXCJuZXdzTGlzdFwiLCBuZXcgSmV0U3RyZWFtLkNvbXBvbmVudHMuTmV3c0xpc3RDb21wb25lbnQoKSlcclxuICAgICAgICAuY29tcG9uZW50KFwibmV3c0l0ZW1cIiwgbmV3IEpldFN0cmVhbS5Db21wb25lbnRzLk5ld3NJdGVtQ29tcG9uZW50KCkpO1xyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
