# Configuration

## .env 
Untuk development, `.env` wajib berada di root project. Isi .env meliputi konfigurasi unik yang bisa saja berbeda-beda tiap developer. untuk konfigurasi wajib yang diperlukan antara lain :
```
APP_PORT=3000
NODE_ENV=development
API_HOST=https://api.github.com
FRONT_HOST=http://localhost:18080
```
Contoh bisa dilihat pada `.env.example` 

## Configuration
Meliputi konfigurasi global yang ditujukan untuk aplikasi dan terletak di directory `/src/config/*.js`, ada 3 file dengan ketentuan sebagai berikut :

**app.js**
Meliputi konfigurasi untuk :
- caching static file
- default Title dan Description yang berada di  meta html. Title dan Description ini akan dipanggil oleh `/src/client/components/Helmet.jsx`, yang merupakan turunan dari [react-helmet](https://github.com/nfl/react-helmet) .

**httpExceptions**
Default response dari api untuk menjaga agar response selalu 

**store**
Konfigurasi store yang akan dipanggil oleh component [`<Provider />`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store), baik dari sisi client ataupun server.