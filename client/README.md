# GreenLoop Client ���

The frontend application for GreenLoop, built with React, TypeScript, and Vite.

## ��� Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Maps**: Leaflet / React-Leaflet

## ��� Getting Started

### Prerequisites

- Node.js 18+
- NPM or Yarn

### Installation

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file (optional, defaults are usually fine for dev):
   ```env
   VITE_API_URL=http://localhost:4000/api
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## ��� Project Structure

```
src/
├── assets/         # Static assets (images, svgs)
├── components/     # Reusable UI components
│   ├── layout/     # Header, Footer, Container
│   └── ui/         # Buttons, Inputs, Cards, etc.
├── hooks/          # Custom React hooks
├── lib/            # Utilities and API clients
├── pages/          # Page components (routes)
│   ├── admin/      # Admin dashboard pages
│   ├── collector/  # Collector dashboard pages
│   ├── donor/      # Donor dashboard pages
│   └── shared/     # Shared pages (404, etc.)
├── stores/         # Global state (Zustand)
└── types/          # TypeScript type definitions
```

## ��� Key Features

- **Role-based Dashboards**: Distinct interfaces for Donors, Collectors, and Admins.
- **Interactive Maps**: Location picking for donations and routing for collectors.
- **Real-time Updates**: Status tracking for donation requests.
- **Responsive Design**: Mobile-friendly UI using Tailwind CSS.
