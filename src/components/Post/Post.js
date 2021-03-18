import { FaHeart, FaShareAlt } from 'react-icons/fa';
import styles from './Post.module.scss';


async function handleOnClick(data, event) {
  event.preventDefault();
  await createPost(data);
  const posts = await getAllPosts();
  updatePosts(posts);
}

const Post = ({ content, date, like }) => (
  <>
    <p className={styles.postContent}>
      {content}
    </p>
    <ul className={styles.postMeta}>
      <li className={styles.postMetaData}>
        <FaHeart />
        <button onClick={handleOnClick}>
          {like}
        </button>
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
