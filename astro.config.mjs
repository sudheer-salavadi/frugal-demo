import { defineConfig } from 'astro/config';

// The publishing pipeline writes image URLs as /public/blog/image/...,
// but Astro serves the contents of public/ at the site root, so the
// /public prefix must be stripped for the URLs to resolve.
function stripPublicPrefix() {
  const fix = (value) => value.replaceAll('="/public/', '="/');
  const walk = (node) => {
    if (node.type === 'html' && typeof node.value === 'string') {
      node.value = fix(node.value);
    }
    if (node.type === 'image' && typeof node.url === 'string' && node.url.startsWith('/public/')) {
      node.url = node.url.slice('/public'.length);
    }
    if (node.children) node.children.forEach(walk);
  };
  return (tree) => walk(tree);
}

export default defineConfig({
  markdown: {
    remarkPlugins: [stripPublicPrefix],
  },
});
