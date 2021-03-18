import { FaHeart, FaShareAlt } from 'react-icons/fa';
import styles from './Post.module.scss';

const Post = ({ content, date }) => (
  <>
    <p className={styles.postContent}>
      {content}
    </p>
    <ul className={styles.postMeta}>
      <li className={styles.postMetaData}>
        <FaHeart />
        23
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
