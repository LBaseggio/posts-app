import { useState, useEffect } from 'react';
import Head from 'next/head'

import { useAuth } from '../hooks/useAuth';
import { getAllPosts, createPost } from '../lib/posts';

import Bio from '../components/Bio';
import Post from '../components/Post';
import PostForm from '../components/PostForm';

import styles from '../styles/Home.module.scss'

export default function Home({ posts: defaultPosts }) {

  const [posts, updatePosts] = useState(defaultPosts);

  const postsSorted = posts.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  });

  const { user, logIn, logOut } = useAuth();

  async function handleOnSubmit(data, e) {
    e.preventDefault();
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
  
      <main className={styles.main}>
          <span className={styles.buttonContainer}>
            { !user && (
                <button className={styles.logButton} onClick={logIn}>Log In</button>
            ) }

            { user && (
                <button className={styles.logButton} onClick={logOut}>Log Out</button>
            ) }
        </span>
        <h1 className={styles.title}>
        Twitter Dupe
        </h1>
        <h4 className={styles.subtitle}>
          |  Next.js  |  StoryBook  |  HTML  |  Sass  |  React-Icons  |  Applitools
          |<br/>|
          GitHub Actions  |  GitHub Authentication   |  Airtable |
        </h4>
        
        <a href="https://leandro-baseggio.netlify.app/">
          <Bio
            headshot="https://avatars.githubusercontent.com/u/68951643?s=460&u=bc0ec78a4231a7be156acd46bbcd0d489d1dc180&v=4"
            name="Leandro Baseggio"
            tagline="Learning by doing!"
            role="Frontend Developer"
          />
        </a>

        { user && (
          <PostForm onSubmit={handleOnSubmit} />
        ) }

        <ul className={styles.posts}>
          {postsSorted.map(post => {
            const { content, id, date, like } = post;
            return (
              <li key={id}>
                <Post
                  content={content}
                  date={new Intl.DateTimeFormat('en-GB', {
                    dateStyle: 'short',
                    timeStyle: 'short'
                  }).format(new Date(date))}
                  like={like}
                />
              </li>
            )
          })}
        </ul>

      </main>
    </section>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts
    }
  }
}