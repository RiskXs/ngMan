var module = angular.module("article",[]);

function articleController() {
    var vm = this;
    vm.message = "Hello from controller";
}

module.controller("articleController", articleController);
module.component("appArticle",
{
    template: "Hello from component"
});