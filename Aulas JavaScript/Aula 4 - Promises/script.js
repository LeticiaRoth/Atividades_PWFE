//Requisições de API com JavaScript
fetch("https://csscolorsapi.com/api/colors")
    .then(res=> res.json())
    .then(dados => {
        //Chamado pelo meu elemento ID
        const lista = document.getElementById(lista)
        const cores = dados.colors || dados; // || = ou

        cores.forEach(cor => {
            const item = document.createElement("article");
            item.className = "cor";

            //Crio o elemento e sua classe
            const quadrado = document.createElement("div");
            quadrado.className = "quadrado";

            //Estilizo o quadrado criado, com o hexadecimal
            quadrado.style.backgroundColor = "#" + cor.hex;


            const texto = document.createElement("h2");
            texto.textContent = `${cor.name} - #${cor.hex}`;

            //Append child colocando embaixo como filho
            item.appendChild(quadrado);
            item.appendChild(texto);
            lista.appendChild(item);
        });
    })
    .catch(err => console.error("Erro ao carregar as cores", err));



 