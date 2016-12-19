/// <reference path="../../boots.ts" />
module ngMan.article.View {
    class ArticleComponent {
        public templateUrl: string;
        public bindings: any;
        public controller: any;
        public controllerAs: string;
        constructor() {
            this.templateUrl = "article/view/ArticleComponent.tmpl.html";
            this.bindings = {
                article:'='
            }
            this.controller = function() {
                
            }

            this.controllerAs = "vm";
        }
    }

    angular.module("article").component("appArticle", new ArticleComponent);
}