const res = await fetch('https://cdn.wisp.blog/api/v1/blogs/<slug>/posts');
const posts = await res.json();
