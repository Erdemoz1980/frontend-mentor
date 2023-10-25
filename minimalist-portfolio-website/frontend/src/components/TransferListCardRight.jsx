
const TransferListCardRight = ({ listItem, onChangeHandler, selectedItems }) => {
  const { id, type, label, name } = listItem;

  return (
    <section className='transfer-form-group'>
      <input type={type} name={name ? name : 'right'} id={id} onChange={onChangeHandler} checked={selectedItems.includes(Number(id))}  />
      <label htmlFor={id}>{label}</label>
    </section>
  )
}

export default TransferListCardRight