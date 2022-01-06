//ДЗ виконала Шушкевич Ірина
import PropTypes from 'prop-types'
import { useDeleteContactMutation } from '../../redux/Contacts/contacts-reducer'
import s from './ContactItem.module.css'
import Loader from '../Loader/Loader'

export default function ContactItem({ id, name, number }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation()
  return (
    <>
      <span className={s.itemText}>{name}</span>
      <span className={s.itemText}>{number}</span>
      <button
        type="button"
        className={s.button}
        data-id={id}
        onClick={() => {
          deleteContact(id)
        }}
        disabled={isLoading}
      >
        {isLoading && <Loader size={15} />}
        {/* <Loader size={15} /> */}
        Delete
      </button>
    </>
  )
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}
