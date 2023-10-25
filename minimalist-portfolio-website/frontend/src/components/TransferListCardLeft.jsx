
const TransferListCardLeft = ({ listItem, onChangeHandler, selectedItems }) => {
  const { id, type, label, name } = listItem;

  return (
    <section className='transfer-form-group'>
      <input type={type} name={name ? name : 'left'} id={id}
        onChange={onChangeHandler}
      />
      <label htmlFor={id}>{label}</label>
    </section>
  )
}

export default TransferListCardLeft