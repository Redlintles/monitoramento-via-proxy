# Monitoramento via proxy

Este repositório contém duas aplicações separadas, um CRUD simples feito em node.js e um proxy escrito em python

O objetivo deste experimento é gerar um proxy capaz de monitorar a aplicação node.js, e guardar o resultado em dois arquivos separados(um para requisições GET, e o outro para requisições POST)

Para que possamos rodar ambas as aplicações, vamos começar com o CRUD em node.js

Após clonar o repositório, abra o terminal na pasta node_app e rode os comandos:

```bash
yarn
yarn start
```

Talvez o gerenciador de pacotes yarn não esteja instalado em sua máquina, para instalá-lo, rode o comando:

```
npm install -g yarn
```

Após isso, repita os passos acima

Após rodar os comandos, a aplicação deve estar rodando na porta local 3000
Abra o navegador e digite na barra de endereço:
```
localhost:3000
```

Você deve ver a aplicação rodando.

Agora para rodar o proxy, abra outra janela do terminal na pasta proxy, lá você deve rodar o comando:

```bash
  python proxy.py
```

O Proxy deve estar rodando na porta local 8000
Abra o navegador e digite na barra de endereço:
```
localhost:8000
```

para acessá-lo

Você deve ver a mesma aplicação rodando, porém agora na porta 8000

A diferença é que qualquer ação realizada aqui que venha a ativar uma requisição HTTP será rastreada e registrada em arquivos .txt localmente em sua máquina, no mesmo diretório que proxy.py.


