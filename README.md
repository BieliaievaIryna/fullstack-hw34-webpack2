# Webpack mastery: Від препроцесорів до аналізатора

## Опис

Цей проєкт демонструє розширену конфігурацію **Webpack** з підтримкою сучасного фронтенд-стека:

- DevServer з автоматичним перезавантаженням сторінки;
- підтримка локальних шрифтів, зображень та favicon;
- підключення зовнішніх бібліотек (наприклад, `jQuery`, `normalize.css`, `lodash`);
- обробка CSS, LESS та SCSS;
- компіляція TypeScript;
- підтримка JSX (React);
- транспіляція JavaScript за допомогою Babel;
- перевірка коду через ESLint;
- візуалізація збірки через Webpack Bundle Analyzer.

## Структура проєкту

- `@` → `src/`
- `@model` → `src/model`
- `@css` → `src/css`
- `@assets` → `src/assets`
- `@less` → `src/less`
- `@sass` → `src/sass`

> Це дозволяє писати коротші імпорти, наприклад:
> ```js
> import logo from '@assets/logo.png';
> import styles from '@sass/main.scss';
> ```

## Використані технології

- **Система збірки:** [Webpack 5](https://webpack.js.org/)
- **Плагіни:**
  - `html-webpack-plugin`
  - `clean-webpack-plugin`
  - `copy-webpack-plugin`
  - `mini-css-extract-plugin`
  - `css-minimizer-webpack-plugin`
  - `terser-webpack-plugin`
  - `eslint-webpack-plugin`
  - `webpack-bundle-analyzer`
- **Завантажувачі (loaders):**
  - `babel-loader` + Babel (JS, JSX, TS)
  - `css-loader`, `style-loader`, `mini-css-extract-plugin`
  - `less-loader`, `sass-loader`
- **Зовнішні бібліотеки:**
  - `jQuery`
  - `normalize.css`
  - `lodash`
  - `React` + `ReactDOM`

## 🚀 Команди запуску

### Встановлення залежностей
```bash
npm install
```
### Режим розробки
```bash
npm run dev
```
### Продакшн збірка
```bash
npm run build
```
### DevServer із live reload
```bash
npm start
```
### Watch-режим
```bash
npm run watch
```
### Аналіз розміру бандлів
```bash
npm run analyze
```
> Після запуску analyze буде створено файл `stats.json` та відкрито інтерфейс аналізатора у браузері.

## Основні можливості Webpack-конфігурації
### Хешування імен файлів

```js
filename: '[name].[fullhash].js'
```
Це гарантує оновлення файлів при кожній новій збірці та усуває кешування застарілого коду.

### Робота з активами (assets)

- Зображення: png, jpg, svg, webp, тощо — копіюються в assets/images з хешами в іменах.
- Шрифти: ttf, woff, woff2, eot — зберігаються в assets/fonts.

### Підтримка стилів

-CSS через `css-loader` + `mini-css-extract-plugin`
- LESS та SCSS підтримуються відповідними loader'ами

### Підтримка JSX, TypeScript і Babel

- `babel-loader` транспілює сучасний JS, JSX і TypeScript в ES5 для кращої сумісності з браузерами.
- `@babel/preset-env`, `@babel/preset-react`, `@babel/preset-typescript`

### Лінтинг через ESLint

Код автоматично перевіряється та, за можливості, виправляється при збиранні.

### Аналіз бандлів

За допомогою `webpack-bundle-analyzer` можна побачити, які залежності займають найбільше місця у фінальній збірці.