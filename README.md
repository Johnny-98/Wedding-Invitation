# poc-react-frontend

React 18 + Vite + TypeScript frontend with MUI, Redux Toolkit, React Router, and i18next.

## Prerequisites

- Node.js 18+
- npm 9+

## Setup

```bash
npm install
```

### MUI X Pro license

This project uses `@mui/x-data-grid-pro` and `@mui/x-date-pickers-pro`. Set your license key before using Pro components:

```ts
import { LicenseInfo } from '@mui/x-license-pro';

LicenseInfo.setLicenseKey(import.meta.env.VITE_MUI_X_LICENSE_KEY);
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Dev server (port 3000) |
| `npm run start-dev` | Dev server in development mode |
| `npm run build` | Development build |
| `npm run build-s3` | Production build |
| `npm run build-s3-test` | Staging build |
| `npm test` | Run Vitest |
| `npm run lint` | ESLint with auto-fix |
| `npm run prettier` | Format with Prettier |

## Project structure

```
src/
  i18n/          # i18next configuration
  pages/         # Route pages
  routes/        # React Router setup
  store/         # Redux Toolkit store
  styles/        # Global SCSS
  theme.ts       # MUI theme
public/
  locales/       # i18n translation files
```
