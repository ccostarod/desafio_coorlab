# Resultado - Desáfio CoorLab

# Implementação do Desafio

A implementação deste desafio envolveu a criação de uma aplicação web que permite ao usuário calcular o valor de uma viagem. A aplicação foi construída usando Vue.js para o frontend e Flask para o backend.

## Frontend

O frontend da aplicação foi construído usando Vue.js. A interface do usuário consiste em um formulário que permite ao usuário selecionar um destino e uma data para a viagem. Uma vez que o usuário submete o formulário, a aplicação faz uma requisição GET para o backend para obter as opções de transporte disponíveis.

As opções de transporte são então filtradas e ordenadas para encontrar a opção mais rápida e a opção mais barata. Essas opções são então exibidas para o usuário.

## Backend

O backend da aplicação foi construído usando Flask. Ele fornece uma única rota, `/data`, que retorna um conjunto de dados de opções de transporte. Esses dados são lidos de um arquivo `data.json` quando a rota é acessada.

O backend também utiliza a extensão CORS do Flask para permitir que o frontend faça requisições para o backend.

## Execução

Para executar esta aplicação web, siga os passos abaixo:

1. **Inicie o servidor backend**:

    Abra um terminal e navegue até o diretório onde o arquivo `server.py` está localizado. Execute o seguinte comando para iniciar o servidor Flask:

    ```bash
    python server.py
    ```
2. **Inicie o servidor frontend**:

    Em um novo terminal, navegue até o diretório onde os arquivos Vue.js estão localizados. No meu caso, como usei o Vue CLI, pode iniciar o servidor de desenvolvimento com o seguinte comando:

    ```bash
    npm run serve
    ```
    Isso iniciará o servidor de desenvolvimento Vue.js, na porta 8080.

3. **Acesse a aplicação**:

    Abra um navegador web e acesse `http://localhost:8080`. Você deverá ver a interface do usuário da aplicação e poderá interagir com ela.

# Interface

    A interface conta com um sistema de login (Sem nenhuma autenticação) e caso o login seja bem sucedido, direciona para uma tela onde é possível acessar a calculadora de viagem. Na calculadora de viagem, é possível enviar o destino e a data, e receber logo em seguida, os dados das viagens que melhores atendem o público alvo dessa aplicação.

# Conclusão

A implementação deste desafio envolveu a criação de uma aplicação web completa com frontend e backend. A aplicação permite ao usuário observar o valor de uma viagem, fornecendo uma interface fácil de usar para selecionar um destino e uma data, e exibindo as opções de transporte mais rápidas e mais baratas.