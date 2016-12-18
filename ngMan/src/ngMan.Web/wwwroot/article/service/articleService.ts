/// <reference path="../../boots.ts" />
module ngMan.article.Services {
    export class ArticleService {
        static $inject = ["$http"];
        
        constructor(private $http: ng.IHttpService) {
            
        }

        public getArticle(): void {
            this.$http.get("http://localhost:54132/api/article/1")
                .then(data => {
                    console.log(data.data);
                });
        }
    }

    angular.module("article").service("articleService", ArticleService);
}