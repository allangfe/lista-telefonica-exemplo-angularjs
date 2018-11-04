angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $filter, $http) {
            $scope.app = "Lista Telefonica";

            $scope.contatos = [
                {nome: $filter('uppercase')("Pedro"), telefone: "99998888", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, cor: "blue"},
                {nome: "Ana", telefone: "99998877", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}, cor: "red"},
                {nome: "Maria", telefone: "99998866", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}, cor: "green"}
            ];

            $scope.operadoras = [
                {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
                {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 3},
                {nome: "Tim", codigo: 41, categoria: "Celular", preco: 4},
                {nome: "GVT", codigo: 41, categoria: "Fixo", preco: 1},
                {nome: "Embratel", codigo: 41, categoria: "Fixo", preco: 3},
            ];

            var carregarHerois = function() {
                $http({
                    method: "GET",
                    url: "http://localhost:57795/api/herois/personagem/2"
                }).then(function (response){
                    console.log(response.data);
                }, function(error){
                    console.log(error);
                });
            };

            carregarHerois();

            $scope.adicionarContato = function(contato) {
                $scope.contatos.push(contato);
                delete $scope.contato;
                $scope.contatoForm.$setPristine();
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