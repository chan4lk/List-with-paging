module JetStream.Components {
    interface INewsItemController{
        item:Services.INewsResult;
    }
    export class NewsItemControler implements INewsItemController{
        item:Services.INewsResult;        
        name:string;
        $onInit() {
                         
        }
    }

	export class NewsItemComponent implements ng.IComponentOptions {
        public bindings:any;
        public controller:any;
        public templateUrl:string;
        public controllerAs:string;
        
        constructor(){
            this.controller =  NewsItemControler;
            this.templateUrl = '/app/news-item.html',
            this.controllerAs = 'vm';
            this.bindings = {
                name: '<?',
                item: '<?'
            };
        }
	};
	
}

