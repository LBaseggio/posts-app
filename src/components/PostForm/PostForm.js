import styles from './PostForm.module.scss';

const PostForm = ({ onSubmit }) => {
  function handleOnSubmit(event) {
    const { currentTarget } = event;
    const fields = Array.from(currentTarget.elements);
    // console.log('fields', fields);
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
      <input type="hidden" name="like" value={like} />
      <textarea name="content" className={styles.formContent}></textarea>
      <button className={styles.formButton}>Add New Post</button>
    </form>
  )
}

export default PostForm;