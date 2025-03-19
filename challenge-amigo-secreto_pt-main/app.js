
let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById("amigo").value.trim();

    if (nomeAmigo && !amigos.includes(nomeAmigo)) {
        amigos.push(nomeAmigo); 
        atualizarLista(); 

        document.getElementById("amigo").value = "";
    } else {
        alert("Adicione os amigos para sorteá-los ;)");
    }
}

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio!!");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "O(a) amigo(a) sorteado(a) foi: "+sorteado+"!!";
}

function reiniciarSorteio() {
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    
    if (amigos.length === 0) {
        alert("Para reiniciar o sorteio adicione ao menos 1 amigo(a) :)");
        return;
    }

    amigos = [];
    listaAmigos.innerHTML = "";
    resultado.innerHTML = "";
}