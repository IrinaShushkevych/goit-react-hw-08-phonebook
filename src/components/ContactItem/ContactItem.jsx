//ДЗ виконала Шушкевич Ірина
import PropTypes from 'prop-types'
import { useState } from 'react'
// import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import {
  useDeleteContactMutation,
  useEditContactMutation,
} from '../../redux/Contacts/contacts-reducer'
import s from './ContactItem.module.css'
import Loader from '../Loader/Loader'

export default function ContactItem({ id, nameContact, numberContact }) {
  const [isEdit, setIsEdit] = useState(false)
  const [name, setName] = useState(nameContact)
  const [number, setNumber] = useState(numberContact)
  const [deleteContact, { isLoading }] = useDeleteContactMutation()
  const [changeContact] = useEditContactMutation()

  const onChange = (isCgange) => {
    if (!isCgange) {
      setName(nameContact)
      setNumber(numberContact)
    } else {
      changeContact({ id, name, phone: number })
    }
    setIsEdit(false)
  }

  return (
    <>
      {isEdit ? (
        <input
          type="text"
          name="name"
          className={s.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      ) : (
        <span className={s.itemText}>{name}</span>
      )}
      {isEdit ? (
        <input
          type="tel"
          name="number"
          className={s.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={(e) => {
            setNumber(e.target.value)
          }}
        />
      ) : (
        <span className={s.itemText}>{number}</span>
      )}
      {!isEdit && (
        <button
          type="button"
          className={s.button}
          data-id={id}
          onClick={() => {
            setIsEdit(true)
          }}
          disabled={isLoading}
        >
          Edit
        </button>
      )}
      {isEdit && (
        <button
          type="button"
          className={s.button}
          data-id={id}
          onClick={() => {
            onChange(true)
          }}
          disabled={isLoading}
        >
          Save
        </button>
      )}
      {isEdit && (
        <button
          type="button"
          className={s.button}
          data-id={id}
          onClick={() => {
            onChange(false)
          }}
          disabled={isLoading}
        >
          Cancel
        </button>
      )}
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
        {/* <DeleteForeverRoundedIcon /> */}
        Delete
      </button>
    </>
  )
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  nameContact: PropTypes.string.isRequired,
  numberContact: PropTypes.string.isRequired,
}
