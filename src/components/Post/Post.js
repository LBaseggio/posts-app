// import {  useState } from 'react';
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import styles from './Post.module.scss';


const Post = ({ content, date, like }) => (
  <>
    <p className={styles.postContent}>
      {content}
    </p>
    <ul className={styles.postMeta}>
      <li className={styles.postMetaData}>
        <button>
          <FaHeart />
        </button>
        {like}
      </li>
      <li className={styles.postMetaData}>
        <FaShareAlt />
        Share
      </li>
      <li className={styles.postMetaData}>
        {date}
      </li>
    </ul>
  </>
);

export default Post;


// async function handleOnClick(data, event) {
//   event.preventDefault();
//   await createPost(data);
//   const posts = await getAllPosts();
//   updatePosts(posts);
// }

// function Post() {
//   const [count, setCount] = useState(0);
//   const Postq = ({ content, date, like }) => (  
//   <>
//     <p className={styles.postContent}>
//       {content}
//     </p>
//     <ul className={styles.postMeta}>
//       <li className={styles.postMetaData}>
//         <button onClick={setCount(like + 1)}>
//           <FaHeart />
//         </button>
//         {like}
//       </li>
//       <li className={styles.postMetaData}>
//         <FaShareAlt />
//         Share
//       </li>
//       <li className={styles.postMetaData}>
//         {date}
//       </li>
//     </ul>
//   </>
// )};





