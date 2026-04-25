---
title: Блоки кода
description: Возможности Expressive Code — подсветка, табы, выделение, diff, заголовки.
sidebar:
  order: 3
---

Starlight использует [Expressive Code](https://expressive-code.com/) для оформления блоков кода. Кнопка «Скопировать» появляется автоматически у каждого блока.

## Подсветка по языку

Достаточно указать язык после открывающих бэктиков.

```js
const greet = (name) => `Привет, ${name}!`;
console.log(greet('Иван'));
```

```python
def greet(name: str) -> str:
    return f"Привет, {name}!"

print(greet("Иван"))
```

```json
{
  "id": 42,
  "username": "ivan",
  "accountStatus": "active"
}
```

## Заголовок файла

Атрибут `title="..."` выводит имя файла над блоком.

```js title="src/api/users.js"
export async function listUsers(token) {
  const res = await fetch('https://api.documentat.io/api/prod/users', {
    headers: { Token: token },
  });
  return res.json();
}
```

Для shell-команд аналогично работает `frame="terminal"`:

```bash frame="terminal" title="bash"
curl https://api.documentat.io/api/prod/users \
  -H "Token: $API_TOKEN"
```

## Выделение строк

Номера и диапазоны строк указываются в фигурных скобках.

```js {2, 4-6} title="highlight.js"
function createUser(payload) {
  validate(payload); // подсвечена
  const id = generateId();
  const user = { id, ...payload }; // подсвечены
  save(user);                       // подсвечены
  return user;                      // подсвечены
}
```

Можно подсвечивать конкретные слова — заключите их в кавычки:

```js "process.env" "API_TOKEN"
const token = process.env.API_TOKEN;
fetch(url, { headers: { Token: token } });
```

Маркеры `mark`, `ins` и `del` дают цветовую разметку без diff-синтаксиса:

```js {"добавлено":3-4} {"удалено":6} ins={3-4} del={6}
function patchUser(id, patch) {
  const url = `https://api.documentat.io/api/prod/users/${id}`;
  const headers = { 'Content-Type': 'application/json' };
  headers.Token = process.env.API_TOKEN;
  return fetch(url, {
    method: 'PUT',
    method: 'PATCH',
    headers,
    body: JSON.stringify(patch),
  });
}
```

## Diff-маркеры

Используйте язык `diff` для классического вывода `git diff`:

```diff
- "accountStatus": "active",
+ "accountStatus": "suspended",
  "address": {
-   "city": "Москва",
+   "city": "Санкт-Петербург",
  }
```

Чтобы оставить подсветку конкретного языка, комбинируйте с `lang`:

```diff lang="js"
  function patchUser(id, patch) {
-   return fetch(url, { method: 'PUT', body: JSON.stringify(patch) });
+   return fetch(url, { method: 'PATCH', body: JSON.stringify(patch) });
  }
```

## Кнопка копирования и wrap

Кнопка `Copy` показывается у всех блоков по умолчанию. Длинные строки можно сворачивать атрибутом `wrap`:

```bash wrap title="long-command"
curl -X POST https://api.documentat.io/api/prod/users -H "Token: $API_TOKEN" -H "Content-Type: application/json" -d '{"username":"ivan","email":"ivan@example.com","firstName":"Иван","lastName":"Иванов"}'
```

А `collapse` сворачивает заданные диапазоны строк:

```js title="collapse-demo.js" collapse={1-10}
import { z } from 'zod';

const UserSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  age: z.number().int().nonnegative(),
  isEmployee: z.boolean(),
});

export function parseUser(json) {
  return UserSchema.parse(json);
}
```
