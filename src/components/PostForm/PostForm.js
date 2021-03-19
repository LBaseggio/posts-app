import styles from './PostForm.module.scss';

const PostForm = ({ onSubmit }) => {
  function handleOnSubmit(event) {
    const { currentTarget } = event;
    const fields = Array.from(currentTarget.elements);
    const data = {};
    fields.forEach(field => {
      if ( !field.name ) return;
      data[field.name] = field.value;
    })

    if ( typeof onSubmit === 'function' ) {
      onSubmit(data, event);
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <textarea name="content" className={styles.formContent}></textarea>
      <input type="text" name="like" value="0"></input>
      <button className={styles.formButton}>Add New Post</button>
    </form>
  )
}

export default PostForm;