---
title: Быстрый старт
description: Первый запрос к API за пять минут.
---

Этот гайд покажет, как сделать первый запрос к Users API — создать пользователя.

## 1. Подготовьте токен

Передавайте персональный токен в заголовке `Token` (подробности — в разделе [Аутентификация](/authentication/)).

## 2. Создайте пользователя

```bash
curl -X POST https://api.documentat.io/api/prod/users \
  -H "Token: API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "ivan",
    "email": "ivan@example.com",
    "firstName": "Иван",
    "lastName": "Иванов",
    "age": 30,
    "isEmployee": true,
    "accountStatus": "active",
    "address": {
      "country": "Россия",
      "city": "Москва",
      "street": "Тверская",
      "house": "1"
    }
  }'
```

В случае успеха сервер вернёт `201 Created` и объект созданного пользователя с присвоенным `id`:

```json
{
  "id": 42,
  "username": "ivan",
  "email": "ivan@example.com",
  "firstName": "Иван",
  "lastName": "Иванов",
  "age": 30,
  "isEmployee": true,
  "accountStatus": "active",
  "address": {
    "country": "Россия",
    "city": "Москва",
    "street": "Тверская",
    "house": "1"
  }
}
```

## Что дальше

- Полный перечень эндпоинтов — в разделе API.
- Описание полей объекта пользователя — в схеме `User`.
- Если запрос вернул `401`, проверьте токен; `409` при создании означает, что пользователь с таким email уже существует.
