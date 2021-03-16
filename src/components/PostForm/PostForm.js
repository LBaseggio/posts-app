import styles from './PostForm.module.scss';

const PostForm = () => (
  <>
    <form>
      <textarea className={styles.formContent} placeholder="Type your message" />
      <button className={styles.formButton} type="submit"> add post </button>
    </form>

  </>
);

export default PostForm;
