# Webpack в дії: Конфігурація та управління активами

## Опис

Цей проєкт демонструє використання **Webpack** для збірки сучасного веб-застосунку з підтримкою:

- хешування імен файлів для кешування;
- локальних шрифтів;
- зображень;
- CSS стилів;
- зовнішніх бібліотек (наприклад, `jQuery`, `normalize.css`).

## Структура проєкту

- `@` → `src/`
- `@model` → `src/model`
- `@css` → `src/css`
- `@assets` → `src/assets`

> Це дозволяє використовувати короткі та зрозумілі імпорти у коді, наприклад:  
> `import logo from '@assets/logo.png';`

## Використані технології

- [Webpack](https://webpack.js.org/)
- Webpack Plugins:
  - `html-webpack-plugin`
  - `clean-webpack-plugin`
- Webpack Loaders:
  - `style-loader`
  - `css-loader`
- Інші бібліотеки:
  - `jQuery`
  - `normalize.css`

## Встановлення та запуск

### 1. Клонувати репозиторій
```bash
git clone <посилання на репозиторій>
cd home-work-34-webpack
```
### 2. Встановити залежності
```bash
npm install
```

### 3. Запуск у режимі розробки
```bash
npm run dev
```
### 4. Збірка проєкту для продакшну
```bash
npm run build
```

### 5. Режим спостереження за змінами
```bash
npm run watch
```

## Основні можливості Webpack-конфігурації
- #### Хешування імен файлів:

```js
filename: '[name].[hash].js'
```
Це запобігає кешуванню старих версій скриптів браузером.

- #### Підтримка зображень та шрифтів:
Використано asset/resource з окремими папками assets/images та assets/fonts.

- #### Інтеграція CSS:
Використання style-loader та css-loader.

- #### Зовнішні бібліотеки:
jQuery та normalize.css підключені через npm.