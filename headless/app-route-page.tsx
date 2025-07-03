async function Home() {
  const res = await fetch('https://votre-site.com/wp-json/wp/v2/posts', {
    next: { revalidate: 120 } // ISR automatique (rebuild toutes les 2 minutes)
  });
  const posts = await res.json();

  return (
    <main>
      {posts.map(post => (
        <article key={post.id}>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </article>
      ))}
    </main>
  );
}
