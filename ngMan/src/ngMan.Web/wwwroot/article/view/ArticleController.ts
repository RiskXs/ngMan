/// <reference path="../../boots.ts" />
/// <reference path="../model/article.ts" />

  module ngMan.article.View {
    import Article = ngMan.article.Model.Article;
    class ArticleController {
        public article: Article;

        constructor() {
            this.article = new Article();
            this.article.title = "My Title";
            this.article.content = "My Content";
        }
    }

    angular.module("article").controller("articleController", ArticleController);
  }