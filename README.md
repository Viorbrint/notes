## Backend nodejs portfolio project

## Документация к API - /docs

## Функционал Web API ✅

1. Получение списка всех заметок - GET /notes 
2. Получение определённой заметки по его Id - GET /notes/:id
3. Регистрация новой заметки - POST /notes
4. Изменение информации о существующей заметке - PATCH /notes/:id
5. Удаление заметки - DELETE /notes/:id

## Информация о заметке ✅

1. Название / тема;
2. Описание;
3. Набор тегов / ключевых слов;
4. Время и место создания.

## Стек ✅

1. Node.js;
2. Nest.js;
3. PostgreSQL;
4. Prisma ORM.

## Дополнительный функционал ✅

1. Система аутентификации (предлагается к использованию библиотека PassportJS), используя jwt - /auth
2. Валидация DTO ✅
3. Обработка запроса на получение списка заметок так, чтобы с его помощью можно было осуществить поиск по заметкам, отфильтровать их, отсортировать. Результат также должен быть разбит на страницы ✅

## Так же проект предполагает ✅

1. Придерживание GitFlow в проекте;
2. Придерживание cоглашения о коммитах;
3. Добавление документации к API через Swagger - /docs
4. Использование Docker для обеспечения легкости развертывания - docker compose up.
5. Чистота, понятность и расшияремость приложения.
