# Install from source

## 1. Clone source

## 2. Install all dependencies with

```console
npm install
```

## 3. Create .env.local file and add:

```js
DB_URL=mongodb://localhost:27017/Cryptofolio
CLIENT_ORIGIN=http://localhost:3000
MAIL_USER="your gmail email"
MAIL_PASS="your gmail password"
```

## 4. Start application with

```console
npm start
```

## 5. Use Docz with

```console
npm run docz:dev
```

## 6. Use Cypress with

```console
npm run cypress:open
```
