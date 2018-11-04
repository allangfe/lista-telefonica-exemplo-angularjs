angular.module("listaTelefonica").factory("contatosApi", function ($http, config){
    var _getContatos = function (){
        return $http({
                        method: "GET",
                        url: config.baseUrl + "/api/herois/personagem/2"
                    });
    };

    return{
        getContatos: _getContatos
    };
});