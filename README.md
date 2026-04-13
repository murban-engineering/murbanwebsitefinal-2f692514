# Murban Engineering Website

Official website for Murban Engineering, built with Vite, React, TypeScript, and Tailwind CSS.

## Development

1. Install dependencies:

```sh
npm install
```

2. Start the development server:

```sh
npm run dev
```

## Production build

Create a production build:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Deployment notes

This project is configured for static hosting (including GitHub Pages):

- Vite `base` is set to `./` so built assets resolve correctly from repo and custom-domain pages.
- React Router uses `basename={import.meta.env.BASE_URL}` for route compatibility with static hosts.
