## Sistema escolhido

O sistema escolhido é um modelo relacional chave-valor com alguns valores sendo
chave para outras tabelas, relacionando para cada chave (única) vários valores em 
sequência (e possívelmente outras chaves). Modelo cascata.

## Estrutura de pastas e arquivos
A estrutura usada é essa abaixo : 
```
meu-projeto/
│
├── config/              
│   └── database.js
├── controllers/        
│   └── HomeController.js
├── models/               
│   └── User.js
├── routes/             
│   └── index.js
├── services/           
│   └── userService.js
├── assets/            
├── scripts/              
├── styles/               
├── tests/              
│   └── example.test.js
├── .gitignore             
├── .env.example          
├── jest.config.js       
├── package-lock.json    
├── package.json        
├── readme.md             
├── server.js           
└── rest.http
```
## Como executar o código

Após instalar o Nodejs no seu computador e o npm, faça os seguintes comandos : 
```
npm install 
node server.js
```
