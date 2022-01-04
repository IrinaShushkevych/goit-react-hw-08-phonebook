import PropTypes from 'prop-types'
import s from './ContactItem.module.css'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/Contacts/contacts-actions'

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch()

  return (
    <>
      <span className={s.itemText}>{name}</span>
      <span className={s.itemText}>{number}</span>
      <button
        type="button"
        className={s.button}
        data-id={id}
        onClick={() => {
          dispatch(deleteContact(id))
        }}
      >
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
