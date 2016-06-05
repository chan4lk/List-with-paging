module JetStream.Components {
     interface INewsListController{
        items:Array<Services.INewsResult>;
        pageItems:Array<Services.INewsResult>;
        onChange(index:number);
        next():void;
        previous():void;
        newsCount:number;
        currentPage:number;
    }
    export class NewsListControler implements INewsListController {
        name:string;
        items:Array<Services.INewsResult>;
        pageItems:Array<Services.INewsResult>;
        newsCount:number;
        currentPage:number;
        
        constructor(private SearchService: Services.ISearchService) {
          this.newsCount = 1; 
        }
       $onInit() {
            this.name = "chan";
             this.SearchService.getData().then((data)=>{
                this.items = data.results;
                this.pageItems = this.items.slice(0, this.newsCount);
                this.currentPage = 1;
            });
        }
        
        goTo(index:number){
            if(index > -1 && index < this.items.length){
                this.pageItems = this.items.slice(index, index + this.newsCount);
                this.currentPage = Math.floor(index/this.newsCount) + 1;
            }
        }
        
        next(){
              let index = this.currentPage * this.newsCount;
             this.pageItems = this.items.slice(index, index + this.newsCount);
             this.currentPage =  Math.floor(index/this.newsCount + 1);
        }
        
        previous(){
             let index = (this.currentPage * this.newsCount) - 2 * this.newsCount ;
             this.pageItems = this.items.slice(index, index + this.newsCount);
             this.currentPage =  Math.floor(index / this.newsCount + 1);
        }
        
        
    }
    
    export class NewsListComponent implements ng.IComponentOptions {
        public bindings:any;
        public controller:any;
        public templateUrl:string;
        public controllerAs:string;
        
        constructor(){
            this.controller = ["SearchService",NewsListControler];
            this.templateUrl = '/app/news-list.html',
            this.controllerAs = 'listCtrl';
            this.bindings = {
                name: '<?',
            };
        }
	};
	
}

