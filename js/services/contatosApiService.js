angular.module("listaTelefonica").factory("contatosApi", function ($http, config){
    var _getContatos = function (){
        return $http({
                        method: "GET",
                        url: config.baseUrl + "/contatos"
                    });
    };

    var _saveContatos = function (contato) {
        return $http({
            method: "POST",
            url: config.baseUrl + "/contatos",
            data: contato
        });
    };

    return{
        getContatos: _getContatos,
        saveContato: _saveContatos
    };
});