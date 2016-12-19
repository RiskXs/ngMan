module ngMan.article.View {
    class ArticleTicketComponent {
        public templateUrl: string;
        public bindings: any;
        public controller: any;
        public controllerAs: string;

        constructor() {
            this.templateUrl = "article/view/ArticleTicket.tmpl.html";
            this.bindings = {
                article: '='
            }
            this.controller = function () {

            }

            this.controllerAs = "vm";
        }
    }
    angular.module("article").component("articleTicket", new ArticleTicketComponent());
}