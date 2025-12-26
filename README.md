git clone URL_DEL_REPOSITORIO
npm install
npm run dev

# 📦 Entrega Final

Proyecto backend desarrollado con **Node.js**, **Express** y **MongoDB**.

---

## 🧩 Tecnologías utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Handlebars
- dotenv
- Git / GitHub

---

## ⚙️ Instalación y ejecución

### Clonar el repositorio

```sh
git clone URL_DEL_REPOSITORIO
cd entrega-final-idbs
```

### Instalar dependencias

```sh
npm install
```

### Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
PORT=8080
MONGO_URL=tu_url_de_mongodb_atlas
```

> El proyecto no incluye `node_modules`.

### Ejecutar el servidor

```sh
npm run dev
```

El servidor se levanta en:

http://localhost:8080

---

## 📦 Products

- **GET** `/api/products`
	- filtros por categoría y disponibilidad
	- paginación con `limit` y `page`
	- ordenamiento por precio (`sort=asc | sort=desc`)
	- respuesta con metadata (`totalPages`, `prevPage`, `nextPage`, etc.)
- **GET** `/api/products/:pid`
- **POST** `/api/products`
- **PUT** `/api/products/:pid`
- **DELETE** `/api/products/:pid`

---

## 🛍️ Carts

- **POST** `/api/carts`
- **GET** `/api/carts/:cid` (uso de populate)
- **PUT** `/api/carts/:cid`
- **PUT** `/api/carts/:cid/products/:pid`
- **DELETE** `/api/carts/:cid/products/:pid`
- **DELETE** `/api/carts/:cid`

---

## 🖥️ Vistas con Handlebars

- `/products`: listado de productos con paginación
- `/carts/:cid`: vista de un carrito específico
	- botones o links para agregar productos (implementados a nivel visual)

---

## ⚠️ Manejo de errores

- middleware global de errores
- manejo de rutas inexistentes (404)
- validaciones básicas de IDs y requests

---

## 👨‍💻 Autor

Daniel Ignacio Bayugar Scarano