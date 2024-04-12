--- PARA RODAR O PROJETO ---

#Alterar o .env.example para .env e colocar os dados necessários

```
PORT= #porta para rodar aplicação
DB_USER= #usuario do banco de dados
DB_PASS= #senha do banco de dados
DB_HOST= #host do banco de dados
DB_NAME= #nome do banco de dados
JWT_SECRET= #senha secreta para o token
TIMEAUTH= #segundos para expirar token
apiEnv= #mudar para "production" caso faça o deploy
```

#Você poode utilizar o site render para criar um banco de dados gratuito -> https://render.com/

#Utilize o comando npm i (necessita ter o node.js instalado -> https://nodejs.org/en/download )

#Após utilize o comando "npm run migration:run" para rodar a migration e criar o banco de dados, ele irá ser criado no schema public.

#O próximo passo é utilizar o comando "npm run dev" para rodar a aplicação e ela estará pronta para ser usada.

