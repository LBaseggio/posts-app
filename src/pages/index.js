/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable max-len */
import Head from 'next/head';
import { useState , useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import Bio from '../components/Bio';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import styles from '../styles/Home.module.scss';

export default function Home({ posts: defaultPosts }) {

  const [posts, updatePosts] = useState(defaultPosts);

  useEffect(()=>{
    async function run(){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`);
    const { posts } = await response.json();
    updatePosts(posts);
    } run();
  }, []);


  const postsSorted = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const { user, login, logout } = useAuth();

  async function handleOnSubmit(data, event) {
    event.preventDefault();

    await createPost(data);

    const posts = await getAllPosts();
    updatePosts(posts);
  }

  return (
    <section className={styles.container}>
      <Head>
        <title>Twitter Dupe</title>
        <link rel="icon" href="/posts-app.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="owner" content="Leandro Baseggio, leandro.baseggio@gmail.com" />
        <meta name="author" content="Leandro Baseggio, leandro.baseggio@gmail.com" />
        <meta name="title" content="Posts App - Next.js" />
        <meta name="subtitle" content="Leandro Baseggio – Frontend Developer – React" />
        <meta name="keywords" content="Leandro Baseggio, Frontend Developer " />
        <meta name="subject" content="Leandro Baseggio – Portfolio | Frontend Developer – React" />
        <meta name="description" content="Leandro Baseggio | Frontend Developer – React" />
        <meta name="summary" content="Leandro Baseggio – Portfolio | Frontend Developer – React" />
        <meta name="reply-to" content="leandro.baseggio@gmail.com" />
        <meta name="url" content="https://twitter-dupe.netlify.app" />
        <meta name="identifier-URL" content="https://leandro-baseggio.netlify.app/" />
        <meta name="category" content="portfolio" />
        <meta name="search_date" content="2021-03-17" />
        <meta name="robots" content="index,follow" />

      /* -------------------------------------------------------------------------- */
      /*                Global site tag (gtag.js) - Google Analytics                */
      /* -------------------------------------------------------------------------- */
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C6HPZP768N" >
        </script>
        <script dangerouslySetInnerHTML={
            { __html: `
                window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments)}
                  gtag('js', new Date());
                  gtag('config', 'G-C6HPZP768N');
            `}
        }>
        </script>
      </Head>

        {!user && (
          <p>      
            <button onClick={login}>
              log in
            </button>
          </p>
        )}

        {user && (
          <p>      
            <button onClick={logout}>
              log out
            </button>
          </p>
        )}

      
      <main className={styles.main}>

        <h1 className={styles.title}>
        Twitter Dupe
        </h1>
        <h4 className={styles.subtitle}>
          |  Next.js  |  StoryBook  |  HTML  |  Sass  |  React-Icons  |  Applitools  |<br/>|  GitHub Actions  |  GitHub Authentication   |  Airtable |
        </h4>

        <Bio
          headshot="https://i.pravatar.cc/400?img=51"
          name="Colby Fayock"
          tagline="Helping others to learn by doing!"
          role="Developer Advocate @ Applitools"
        />

        <ul className={styles.posts}>
        {posts.map(post => {
          const {content, id, date} = post;
          return (
          <li key={id}>
            <Post
              content={content}
              date={new Intl.DateTimeFormat('en-US', {
                    dateStyle: 'short',
                    timeStyle: 'short'
                  }).format(new Date(date))}
            />
          </li>
        )
        })}
        </ul>
        {user && (
        <PostForm />
        )}
      </main>
    </section>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}api/posts`);
  const { posts } = await response.json();

  return {
    props: {
      posts
    }
  }
}

