var Article = (function () {
    function Article() {
    }
    return Article;
}());
angular.module("article", []);
/// <reference path="../../boot.ts" />
/// <reference path="../model/article.ts" />
var ArticleService = (function () {
    function ArticleService($http) {
        this.$http = $http;
    }
    ArticleService.prototype.getArticle = function (id) {
        this.$http.get("http://localhost:54132/api/article/1").then(function (response) { return console.log(response.data); });
        return null;
    };
    return ArticleService;
}());
angular.module("article").service("ArticleService", ArticleService);
//# sourceMappingURL=app.js.map