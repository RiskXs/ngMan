/// <reference path="../../boots.ts" />
/// <reference path="../model/article.ts" />

  module ngMan.article.View {
    import Article = ngMan.article.Model.Article;
    class ArticleController {
        public article: Article;
        static $inject =["articleService"];
        constructor(private articleService:ngMan.article.Services.ArticleService) {
            this.article = new Article();
            this.article.title = "My Title";
            this.article.content = "My Content";
        }

        public getArticle() {
            this.articleService.getArticle().then(promiseValue => {
                this.article = promiseValue.data;
            });
        }
    }

    angular.module("article").controller("articleController", ArticleController);
  }