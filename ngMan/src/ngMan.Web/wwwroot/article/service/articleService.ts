/// <reference path="../../boots.ts" />
module ngMan.article.Services {
    export class ArticleService {
        static $inject = ["$http"];
        
        constructor(private $http: ng.IHttpService) {
            
        }

        public getArticle(): ng.IHttpPromise<ngMan.article.Model.Article> {
            return this.$http.get("http://localhost:54132/api/article/1");
        }
    }

    angular.module("article").service("articleService", ArticleService);
}