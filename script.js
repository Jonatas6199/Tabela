document.addEventListener("DOMContentLoaded", function () {
    //carregarDados();
});


function carregarDados() {
    let body = document.getElementById("tabela-body");

    //[]Array, Lista
    //{} representa um objeto, mas só pq eu vou ter dados estruturados dentro; 
    const itensMercado = [
        {
            id: 1,
            nome: "Queijo Mussarela",
            marca: "Tirolez",
            preco: 54.90,
            dtValidade: "30/05/2026"
        },
        {
            id: 2,
            nome: "Mortadela",
            marca: "Marba",
            preco: 24.60,
            dtValidade: "13/05/2026"
        },
        {
            id: 3,
            nome: "Requeijão",
            marca: "Catupiry",
            preco: 70.00,
            dtValidade: "20/05/2026"
        }
    ]

    body.innerHTML = itensMercado.map(function(item){
        let codigoHtmlInterno =  
        "<tr>" +
            "<td>" +item.id+"</td>" +
            "<td>" +item.nome+"</td>" +
            "<td>" +item.marca+"</td>" +
            "<td>" +item.preco+"</td>" +
            "<td>" +item.dtValidade+"</td>" +
        "</tr>";
        return codigoHtmlInterno;
    }).join("");//remover o separador padrão que é uma vírgula

    /*
    body.innerHTML =
        "<tr>" +
        "<td>1</td>" +
        "<td>Queijo Mussarela</td>" +
        "<td>Tirolez</td>" +
        "<td>54,90</td>" +
        "<td>30/05/2026</td>" +
        "</tr>";
        */
}

function carregarDadosLocalStorage(){
     let body = document.getElementById("tabela-body");

    //[]Array, Lista
    //{} representa um objeto, mas só pq eu vou ter dados estruturados dentro; 
    const itensMercado = JSON.parse(localStorage.getItem("items-mercado")) || [];

    if(itensMercado.length === 0){
        body.innerHTML = "<tr> <td colspan='5'>Não há itens no local Storage</td> </tr>"
    }
    else{
         body.innerHTML = itensMercado.map(function(item){
        let codigoHtmlInterno =  
        "<tr>" +
            "<td>" +item.id+"</td>" +
            "<td>" +item.nome+"</td>" +
            "<td>" +item.marca+"</td>" +
            "<td>" +item.preco+"</td>" +
            "<td>" +item.dtValidade+"</td>" +
        "</tr>";
        return codigoHtmlInterno;
    }).join("");//remover o separador padrão que é uma vírgula
    }
   
}


/* Utilizar esse script para colocar itens no localStorage
localStorage.setItem("items-mercado", JSON.stringify([
    {
        id: 1,
        nome: "Arroz",
        marca: "Camil",
        preco: 28.90,
        dtValidade: "15/08/2026"
    },
    {
        id: 2,
        nome: "Feijão Carioca",
        marca: "Kicaldo",
        preco: 9.75,
        dtValidade: "10/09/2026"
    },
    {
        id: 3,
        nome: "Leite Integral",
        marca: "Piracanjuba",
        preco: 5.49,
        dtValidade: "02/04/2026"
    },
    {
        id: 4,
        nome: "Macarrão Espaguete",
        marca: "Barilla",
        preco: 8.99,
        dtValidade: "20/12/2026"
    },
    {
        id: 5,
        nome: "Óleo de Soja",
        marca: "Liza",
        preco: 7.89,
        dtValidade: "30/10/2026"
    },
    {
        id: 6,
        nome: "Açúcar Refinado",
        marca: "União",
        preco: 4.59,
        dtValidade: "18/11/2026"
    },
    {
        id: 7,
        nome: "Café Torrado e Moído",
        marca: "Melitta",
        preco: 15.90,
        dtValidade: "25/07/2026"
    },
    {
        id: 8,
        nome: "Manteiga",
        marca: "Aviação",
        preco: 12.50,
        dtValidade: "05/05/2026"
    }
]));
*/