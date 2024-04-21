let titulo = document.createElement ("h1");
titulo.innerText = ""
titulo.id = "titulo"

let body = document.querySelector("body");
body.appendChild(titulo);


let produto = document.createElement ("section");
produto.innerHTML = ""

body.appendChild(produto);

console.log(titulo)