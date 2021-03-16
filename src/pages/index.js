/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable max-len */
import Head from 'next/head';
import Bio from '../components/Bio';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import styles from '../styles/Home.module.scss';

export default function Home() {
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
        {/* <meta name="url" content="https://leandro-baseggio.netlify.app/" /> */}
        {/* <meta name="identifier-URL" content="https://leandro-baseggio.netlify.app/" /> */}
        <meta name="category" content="portfolio" />
        {/* <meta name="search_date" content="2021-03-01" /> */}
        <meta name="robots" content="index,follow" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
        Twitter Dupe
        </h1>
        <h4 className={styles.subtitle}>
          Next.js, StoryBook, HTML, Sass, React-Icons, Applitools, GitHub Actions.
        </h4>

        <Bio
          headshot="https://i.pravatar.cc/400?img=51"
          name="Colby Fayock"
          tagline="Helping others to learn by doing!"
          role="Developer Advocate @ Applitools"
        />

        <ul className={styles.posts}>
          <li>
            <Post
              content="This is the post prop CONTENT"
              date="12/03/2021"
            />
          </li>
          <li>
            <Post
              content="This is the post prop CONTENT"
              date="13/03/2021"
            />
          </li>
          <li>
            <Post
              content="This is the post prop CONTENT"
              date="14/03/2021"
            />
          </li>
          <li>
            <Post
              content="This is the post prop CONTENT"
              date="15/03/2021"
            />
          </li>
        </ul>

        <PostForm />

      </main>
    </section>
  );
}
