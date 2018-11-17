angular.module("listaTelefonica").directive("uiAccordions", function(){
    return {
        controller: function($scope, $element, $attrs){
            var accordions = [];

            this.registrarAccordion = function(accordion){
                accordions.push(accordion);
            };

            this.fecharTodos = function(){
                accordions.forEach(function(accordion){
                    accordion.isOpened = false;
                });
            };
        }
    };
});

angular.module("listaTelefonica").directive("uiAccordion", function(){
    return {
        // templateUrl: "view/accordion.html",
        template: "<div class='ui-accordion-title' ng-click='open()'>{{title}}</div><div class='ui-accordion-content' ng-transclude ng-show='isOpened'></div>",
        transclude: true,
        scope:{
            title: "@"
        },
        require: "^uiAccordions", // ^ - pq está chamando um elemento pai
        link: function(scope, element, attrs, ctrl){
            ctrl.registrarAccordion(scope);
            scope.open = function(){
                ctrl.fecharTodos();
                scope.isOpened = true;
            };
        }
    };
});