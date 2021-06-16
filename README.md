
# API de Meditação

Aplicação feita para o Code Challenge da empresa [Setta.co](https://setta.co)


## Instalação

Clone o repositório e instale as dependências

```bash 
  git clone https://github.com/alexsandroveiga/settas-code-challenge
  cd settas-code-challenge
  npm install
```

Rode o docker-compose, caso não tenha, instale seguindo os passos [aqui](https://docs.docker.com/compose/install/)

```bash 
  docker-compose up
```

Rode as migrations para a criação das tabelas

```bash 
  npm run typeorm migration:run
```

Rodando a aplicação
```bash 
  npm build
  npm start
```
    
## API Reference

#### Registrando um tempo de meditação

```http
  POST /api/time
```

| Parâmetro   | Tipo     | Descrição                                          |
| :---------- | :------- | :------------------------------------------------- |
| `device_id` | `string` | **Obrigatório**. Id do dispositivo                 |
| `startTime` | `number` | **Obrigatório**. Timestamp do início da meditação  |
| `endTime`   | `number` | **Obrigatório**. Timestamp de término da meditação |

#### Listando todos os tempos de meditação por dispositivo

```http
  GET /api/time/{id} 
```

| Parâmetro | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Obrigatório**. Id do dispositivo   |

  