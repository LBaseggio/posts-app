/* eslint-disable max-len */
import styles from './Post.module.scss';

const Post = ({ content, date }) => (
  <>
    <p className={styles.postsContent}>
      {content}
    </p>
    <p className={styles.postDate}>
      {date}
    </p>
  </>
);

export default Post;
