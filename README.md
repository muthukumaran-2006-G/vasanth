# Vasantham Cafe

A React, TypeScript, and Vite website for Vasantham Cafe.

## Run locally

```sh
npm ci
npm run dev
```

Create a production build with `npm run build`.

## Deploy to GitHub Pages

The GitHub Actions workflow deploys the site whenever changes are pushed to
`main`. In the repository, open **Settings → Pages** and set the build and
deployment source to **GitHub Actions**. The site will be available at
https://muthukumaran-2006-g.github.io/vasanth/.

The Vite base path is configured for the `vasanth` repository. Update `base` in
`vite.config.ts` if the repository name changes.
