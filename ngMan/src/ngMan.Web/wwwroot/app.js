var ngMan;
(function (ngMan) {
    var article;
    (function (article) {
        var Model;
        (function (Model) {
            var Article = (function () {
                function Article() {
                }
                return Article;
            }());
            Model.Article = Article;
        })(Model = article.Model || (article.Model = {}));
    })(article = ngMan.article || (ngMan.article = {}));
})(ngMan || (ngMan = {}));
angular.module("article", []);
/// <reference path="../../boots.ts" />
var ngMan;
(function (ngMan) {
    var article;
    (function (article) {
        var Services;
        (function (Services) {
            var ArticleService = (function () {
                function ArticleService($http) {
                    this.$http = $http;
                }
                ArticleService.prototype.getArticle = function () {
                    this.$http.get("http://localhost:54132/api/article/1")
                        .then(function (data) {
                        console.log(data.data);
                    });
                };
                return ArticleService;
            }());
            ArticleService.$inject = ["$http"];
            Services.ArticleService = ArticleService;
            angular.module("article").service("articleService", ArticleService);
        })(Services = article.Services || (article.Services = {}));
    })(article = ngMan.article || (ngMan.article = {}));
})(ngMan || (ngMan = {}));
/// <reference path="../../boots.ts" />
var ngMan;
(function (ngMan) {
    var article;
    (function (article) {
        var View;
        (function (View) {
            var ArticleComponent = (function () {
                function ArticleComponent() {
                    this.templateUrl = "article/view/template.html";
                    this.bindings = {
                        article: '='
                    };
                    this.controller = function () {
                    };
                    this.controllerAs = "vm";
                }
                return ArticleComponent;
            }());
            angular.module("article").component("appArticle", new ArticleComponent);
        })(View = article.View || (article.View = {}));
    })(article = ngMan.article || (ngMan.article = {}));
})(ngMan || (ngMan = {}));
/// <reference path="../../boots.ts" />
/// <reference path="../model/article.ts" />
var ngMan;
(function (ngMan) {
    var article;
    (function (article) {
        var View;
        (function (View) {
            var Article = ngMan.article.Model.Article;
            var ArticleController = (function () {
                function ArticleController(articleService) {
                    this.articleService = articleService;
                    this.article = new Article();
                    this.article.title = "My Title";
                    this.article.content = "My Content";
                }
                ArticleController.prototype.getArticle = function () {
                    this.articleService.getArticle();
                };
                return ArticleController;
            }());
            ArticleController.$inject = ["articleService"];
            angular.module("article").controller("articleController", ArticleController);
        })(View = article.View || (article.View = {}));
    })(article = ngMan.article || (ngMan.article = {}));
})(ngMan || (ngMan = {}));
//# sourceMappingURL=app.js.map