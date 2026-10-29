# Контрольная работа №2

Тема: «CSS-фреймворки: разработка интерфейса на Bootstrap или альтернативном CSS-фреймворке».

## Описание

Проект представляет собой учебную версию интернет-магазина суперкаров **Supercar Shop**, разработанную с использованием Bootstrap 5.3.

## Практическая работа 9

Тема: «Bootstrap-сетка: container, row, col-* и базовая структура страницы».

Выполнена главная страница на Bootstrap-сетке.

Реализовано:

- подключение Bootstrap через CDN;
- подключение `css/custom.css`;
- шапка страницы;
- Bootstrap-навигация;
- hero-блок на сетке;
- блок преимуществ;
- сетка популярных товаров;
- подвал страницы.

## Практическая работа 10

Тема: «Страница на Bootstrap: компоненты».

Выполнено:

- добавлена единая Bootstrap-навигация на всех страницах;
- создана страница каталога `catalog.html`;
- создана страница товара `product.html`;
- создана страница заявки `order.html`;
- использованы компоненты `navbar`, `card`, `btn`, `badge`, `alert`, `modal`, `form-control`, `form-select`, `input-group`, `form-check`, `accordion`;
- добавлен файл `css/custom.css` для минимальных доработок;
- добавлен небольшой `js/main.js`: подстановка данных товара на `product.html` и вывод сообщений при отправке форм;
- проект подготовлен к сдаче контрольной работы №2.

## Используемые технологии

- HTML;
- Bootstrap 5.3 (CSS + JS Bundle, CDN);
- CSS;
- JavaScript (минимально);
- Git;
- GitHub.

## Структура проекта

```text
kr2-bootstrap-shop/
├── index.html
├── catalog.html
├── product.html
├── order.html
├── css/
│   └── custom.css
├── js/
│   └── main.js
├── images/
│   ├── car-ferrari.png
│   ├── car-lamborghini.png
│   └── car-mclaren.png
├── README.md
└── .gitignore
```

- `index.html` — главная страница;
- `catalog.html` — каталог товаров;
- `product.html` — страница товара (`product.html?id=1..3`);
- `order.html` — форма заявки;
- `css/custom.css` — дополнительные стили проекта;
- `js/main.js` — небольшой скрипт для данных товара и форм;
- `images/` — изображения проекта;
- `README.md` — описание проекта.

## Как запустить

Открыть `index.html` в браузере (или через расширение Live Server в VS Code).
