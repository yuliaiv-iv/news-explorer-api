## news-explorer-api

Backend для приложения ***News Explorer***
Домен API доступен => https://api.newsonthecloud.students.nomoredomains.monster

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

При разработке API использованы следующие технологии:
* Mongoose
* Express
* NodeJS
* celebrate
* JWT

### Запуск и установка
* `npm install` устанавка зависимостей в package.json
* `npm run start` запустить проект
