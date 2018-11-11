angular.module("listaTelefonica").service("operadorasApi", function($http, config){
        this.getOperadoras = function(){
            return $http({
                        method: "GET",
                        url: config.baseUrl + "/operadoras"
                    });
    };
});
