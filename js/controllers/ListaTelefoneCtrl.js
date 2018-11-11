angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosApi, operadorasApi, serialGenerator) {
            console.log(serialGenerator.generate());
            $scope.app = "Lista Telefonica";

            $scope.contatos = [];
            $scope.operadoras = [];

            carregarContatos();
            carregarOperadoras();

            function carregarContatos () {
                contatosApi.getContatos().then(function (response){
                    $scope.contatos = response.data;
                }, function(error){
                    console.log(error);
                });
            };

            function carregarOperadoras () {
                operadorasApi.getOperadoras().then(function(response){
                    $scope.operadoras = response.data;
                }, function(error){
                    console.log(error);
                });
            };

            $scope.adicionarContato = function(contato) {              
                contato.serial = serialGenerator.generate();
                contato.data = new Date();

                contatosApi.saveContato(contato).then(function(){
                    $scope.contatos.push(contato);
                },
                function(error){
                    console.log(error);
                });
            };

            $scope.apagarContatos = function(contatos){
                 $scope.contatos = contatos.filter(function (contato){
                    if (!contato.selecionado) return contato;
                });
            };

            $scope.isContatoSelecionado = function(contatos){
                return contatos.some(function(contato){
                    return contato.selecionado;
                });
            };
            
            $scope.ordenarPor = function(campo){
                $scope.criterioDeOrdenacao = campo;
                $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
            };
});