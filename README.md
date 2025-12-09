# Recycle Charity 🌱

A recyclable waste donation platform connecting donors with collectors. Earn points by recycling!

## Features

- **Donors**: Create donation requests, earn Green Points, redeem rewards
- **Collectors**: Browse available donations, collect waste, complete pickups
- **Admin**: Manage users, categories, rewards, view analytics
- **AI Chatbot**: GreenBot powered by Gemini AI for user support

## Tech Stack

### Frontend (Client)

- React 19 + TypeScript
- TanStack Query (React Query)
- Tailwind CSS + Framer Motion
- Vite

### Backend (Server)

- Node.js + Express
- Prisma ORM + MySQL
- JWT Authentication
- Google Gemini AI

## Getting Started

### 1. Prerequisites

- **Node.js**: Version 18 or higher.
- **MySQL Server**.

### 2. Backend Setup

- Create a `.env` file and fill in the Database connection info, Cloudinary API Key, and Gemini AI API Key.
- Run `npm install` to install dependencies.
- Initialize the Database:
  ```bash
  npx prisma migrate dev --name init
  ```
- Update Prisma Client:
  ```bash
  npx prisma generate
  ```
- Seed the database:
  ```bash
  npx prisma db seed
  ```
- Start the server:
  ```bash
  npm run dev
  ```

### 3. Frontend Setup

- Navigate to the `client` folder and run `npm install`.
- Start the interface:
  ```bash
  npm run dev
  ```
- Access the browser at: http://localhost:5173.

## Environment Variables

### Server (.env)

```
DATABASE_URL="mysql://user:password@localhost:3306/greenloop_db"
```

**Other variables:**

```
JWT_SECRET="your-secret-key"
JWT_EXPIRES_IN="7d"
NODE_ENV="development"
PORT=4000
API_KEY="your-gemini-api-key"

# Cloudinary (optional - for cloud image storage)
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

> **Note**: Cloudinary is optional. If not configured, images will be stored locally in `server/uploads/`. Get free credentials at https://cloudinary.com/console

### Client (.env)

```
VITE_API_URL=http://localhost:4000/api
```

## Database Setup

1. Install MySQL
2. Create database:

```sql
CREATE DATABASE greenloop_db;
```

3. Update `.env`:

```
DATABASE_URL="mysql://root:yourpassword@localhost:3306/greenloop_db"
```

4. Run migrations:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

## Project Structure

```
greenloop/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── stores/
│   │   └── lib/
│   └── package.json
├── server/          # Express backend
│   ├── src/
│   │   ├── modules/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── lib/
│   ├── prisma/
│   └── package.json
└── README.md
```

## API Endpoints

See [Server API Docs](./server/API_DOCS.md) for detailed API documentation.

## License

MIT
