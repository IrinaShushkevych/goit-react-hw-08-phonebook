import { useState } from 'react'
import s from './Phonebook.module.css'
import { addContact } from '../../redux/Contacts/contacts-operations'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getContacts } from '../../redux/Contacts/contacts-selectors'

export default function Phonebook() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const dispatch = useDispatch()
  const contacts = useSelector(getContacts)

  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = { name, phone: number }
    if (contacts.filter((el) => el.name === name).length !== 0) {
      alert(`Contacts ${name} already exist`)
    } else {
      dispatch(addContact(obj))
    }
    setName('')
    setNumber('')
  }

  return (
    <>
      <form className={s.mainForm} onSubmit={handleSubmit}>
        <label htmlFor="name" className={s.label}>
          Name
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
        </label>
        <label htmlFor="number" className={s.label}>
          Phone
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
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    </>
  )
}
