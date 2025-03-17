let amigos = [];
let amigosSorteados = []; 
let amigoSorteadoAnterior = null;

function adicionarAmigo() {
  let nomeAmigo = document.getElementById("amigo").value.trim();

  if (nomeAmigo === "") {
    alert("Por favor, insira um nome válido!");
    return;
  }

  if (amigos.includes(nomeAmigo)) {
    alert("Este nome já foi adicionado.");
    return;
  }

  amigos.push(nomeAmigo);
  document.getElementById("amigo").value = "";
  atualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "Nenhum amigo para sortear.";
        return;
      }
    
      if (amigosSorteados.length === amigos.length) {
        document.getElementById("resultado").innerHTML = "Fim da lista. Todos os amigos já foram sorteados!";
        return;
      }
    
      let amigoSorteado;
      let indiceAleatorio;
    
      do {
        indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
      } while (
        amigoSorteado === amigoSorteadoAnterior ||
        amigosSorteados.includes(amigoSorteado)
      );
    
      amigoSorteadoAnterior = amigoSorteado;
      amigosSorteados.push(amigoSorteado);
      document.getElementById("resultado").innerHTML = `O amigo secreto sorteado é:  ${amigoSorteado}`;
}
  

function atualizarLista() {
  let listaAmigosElement = document.getElementById("listaAmigos");
  listaAmigosElement.innerHTML = "";

  for (let amigo of amigos) {
    let itemLista = document.createElement("li");
    itemLista.textContent = amigo;
    listaAmigosElement.appendChild(itemLista);
  }
}