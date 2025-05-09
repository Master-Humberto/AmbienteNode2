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
npm init 
node server.js
```

## Modelo físico
```
-- Create tables
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    task_name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    UNIQUE (user_id, task_name)
);

-- Function to generate JSON structure
CREATE OR REPLACE FUNCTION get_system_json()
RETURNS JSON AS $$
SELECT json_object_agg(
    user_id::TEXT,
    json_build_object(
        'account', json_build_object('email', email, 'password', password),
        'tasks', COALESCE(
            (SELECT json_object_agg(task_name, ARRAY[description, category])
             FROM tasks WHERE tasks.user_id = users.user_id),
            '{}'::json
        )
    )
) AS database
FROM users;
$$ LANGUAGE SQL;

-- Execute with:
-- SELECT get_system_json();
```