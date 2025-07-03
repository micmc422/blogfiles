function getStaticProps() {
  const res = await fetch('https://votre-site.com/wp-json/wp/v2/posts');
  const posts = await res.json();

  return {
    props: { posts },
    revalidate: 120, // ISR : régénération toutes les 2 minutes
  };
}

function Home({ posts }) {
  return (    
      {posts.map(post => (        
          {post.title.rendered}
      ))}    
  );
}
