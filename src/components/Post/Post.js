import {  useState } from 'react';
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import styles from './Post.module.scss';

function Post ({ content, date, like }){
  const [count, setCount] = useState(0);

  <>
    <p className={styles.postContent}>
      {content}
    </p>
    <ul className={styles.postMeta}>s
      <li className={styles.postMetaData}>
        <button
            type="button"
            onClick={() => setCount(like + 1)}
          >
          <FaHeart />
        </button>
        <p>
          {like}
        </p>
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
};

export default Post;
