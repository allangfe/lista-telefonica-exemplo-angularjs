angular.module("listaTelefonica").directive("uiAlert", function(){
    return {
        // templateUrl: "view/alert.html",
        template: "<div class='ui-alert'><div class='ui-alert-tittle'> {{title}} </div><div class='ui-alert-message' ng-transclude></div></div>",
        replace: true,
        // restrict: "E",
        scope:{
            // tittle: "@tittle",
            title: "@", // se nome da diretiva e nome do atributo forem iguais, basta colocar o '@' 
            //message: "=", // = faz o two way data-bind
        },
        transclude: true
    };
});