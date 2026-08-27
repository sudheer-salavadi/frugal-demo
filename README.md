# Frugal Demo Blog

A super-lite Astro blog. Push a markdown file and a jpeg, get a blog post.

## Publish a post

1. Add `posts/my-post.md`:

   ```yaml
   ---
   title: My Post Title
   description: Optional one-liner for the listing page.
   date: 2026-08-26
   image: /blog/image/my-post.jpeg
   ---

   Your markdown content here...
   ```

2. Add the image at `public/blog/image/my-post.jpeg`
3. Push to `main` — Cloudflare Pages rebuilds automatically.

The URL slug comes from the markdown filename: `posts/my-post.md` → `/blog/my-post/`.

## Local dev

```sh
npm install
npm run dev
```

## Deploy on Cloudflare Pages

In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick this repo, then:

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`

That's it — every push to `main` deploys.
