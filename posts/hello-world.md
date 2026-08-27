---
title: Hello World
description: The first post on the frugal demo blog.
date: 2026-08-26
image: /blog/image/hello-world.jpeg
---

Welcome to the demo blog. This post lives in `/posts/hello-world.md` and its
image lives in `/public/blog/image/hello-world.jpeg` — pushed straight to the
repo, rendered as one post.

## How it works

Each markdown file needs this frontmatter:

```yaml
---
title: My Post Title
description: Optional one-liner shown on the listing page.
date: 2026-08-26
image: /blog/image/my-image.jpeg
---
```

Then just write markdown below it. Push to `main` and Cloudflare Pages
rebuilds the site automatically.
