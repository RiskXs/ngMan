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
                function ArticleController() {
                    this.article = new Article();
                    this.article.title = "My Title";
                    this.article.content = "My Content";
                }
                return ArticleController;
            }());
            angular.module("article").controller("articleController", ArticleController);
        })(View = article.View || (article.View = {}));
    })(article = ngMan.article || (ngMan.article = {}));
})(ngMan || (ngMan = {}));
//# sourceMappingURL=app.js.map