/// <reference path="../../boot.ts" />
/// <reference path="../model/article.ts" />

class ArticleService implements IArticleService {

    constructor(private $http: ng.IHttpService) {  }
    getArticle(id: number): Article {
        this.$http.get("http://localhost:54132/api/article/1").then(response => console.log(response.data))
        return null;
    }
}

angular.module("article").service("ArticleService", ArticleService);

