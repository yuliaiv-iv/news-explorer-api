## news-explorer-api

Backend для приложения ***News Explorer***
Домен API доступен => https://api.newsinthecloud.students.nomoredomains.monster

### Описание

Роуты и контроллеры
**`GET /users/me`** возвращает информацию о пользователе (email и имя)
**`GET /articles`** возвращает сохранённые пользователем статьи
**`POST /articles`** создаёт статью
**`DELETE /articles/articleId`** удаляет сохранённую статью  по _id

Аутентификация и авторизация
**`POST /signup`** создаёт пользователя с переданными в теле email, password и name
**`POST /signin`** проверяет переданные в теле почту и пароль и возвращает JWT

### Технологии

При разработке веб-сайта использованы следующие технологии:
* JS
* Express
* NodeJS
* MongoDB

### Запуск и установка
* `npm install` устанавка зависимостей в package.json
* `npm run start` запустить проект
