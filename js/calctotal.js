var sorvete = document.getElementById("sorvete");

var acomp1 = document.getElementById("acomp1");
var acomp2 = document.getElementById("acomp2");
var acomp3 = document.getElementById("acomp3");

var lanche = document.getElementById("lanche");


var nome = document.getElementById("nome");
var sobreNome = document.getElementById("sobreNome");
var rua = document.getElementById("rua");
var numero = document.getElementById("numero");

var pagamento = document.getElementById("pagamento");

function gerarvalor() {

    switch (sorvete.value) {
        case "1":
            var sorv = 15;
            var escolhaSorvete = "Morango";
            break;

        case "2":
            var sorv = 19;
            var escolhaSorvete = "Delicia de abacaxi";
            break;

        case "3":
            var sorv = 16;
            var escolhaSorvete = "Chocolate";
            break;

        default:
            break;
    }

    switch (acomp1.value) {
        case "1":
            var ac1 = 5;
            var escolheacomp1 = "Jujuba Colorida";
            break;
        case "2":
            var ac1 = 4;
            var escolheacomp1 = "M&M";
            break;

        default:
            break;
    }

    switch (acomp2.value) {
        case "1":
            var ac2 = 2;
            var escolheacomp2 = "Granulado choc";
            break;
        case "2":
            var ac2 = 1.5;
            var escolheacomp2 = "granulado Color";
            break;

        default:
            break;
    }

    switch (acomp3.value) {
        case "1":
            var ac3 = 6;
            var escolheacomp3 = "Morango Creme";
            break;
        case "2":
            var ac3 = 4;
            var escolheacomp3 = "Caramelo TOP";
            break;

        default:
            break;
    }

    switch (lanche.value) {
        case "1":
            var lan1 = 8;
            var escolhelanche = "Cheetos Queijo";
            break;
        case "2":
            var lan1 = 10.5;
            var escolhelanche = "Brownnie Choco";
            break;

        default:
            break;
    }


    var total = sorv + lan1 + ac1 + ac2 + ac3;
    var infor = document.getElementById("infoCliente");
    var pedido = document.getElementById("pedido");


    valorTotal.innerHTML = "R$" + total;
    formaPagamento.innerHTML = pagamento.value;
    pedido.innerHTML = escolhaSorvete + ", " + escolheacomp1 + ", " + escolheacomp2 + "," + escolheacomp3 + " e " + escolhelanche;
    infor.innerHTML = nome.value + " " + sobreNome.value + ", " + "Rua " + rua.value + ", N° " + numero.value;




}

