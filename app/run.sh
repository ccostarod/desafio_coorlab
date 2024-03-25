#!/bin/bash

echo "Iniciando a execução da solução"

# Instalação de dependências pip
pip install flask flask_cors

# Navegação para o diretório do projeto Vue e instalação de dependências npm
cd desafio_coorlab/app/app-vue/coorlab_challenge
npm install -g @vue/cli
npm install

# Navegação para o diretório do projeto Flask e ativação do ambiente virtual
cd ../../app-flask
source env/Scripts/activate

# Inicialização do servidor Flask
python server.py &

# Navegação de volta para o diretório do projeto Vue e inicialização do servidor Vue
cd ../app-vue/coorlab_challenge
npm run serve