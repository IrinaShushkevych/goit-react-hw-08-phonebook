//ДЗ виконала Шушкевич Ірина
import { useEffect, useState } from 'react'
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/Contacts/contacts-reducer'
import { onError, onWarning } from '../../utilits/messages'
import s from './Phonebook.module.css'

export default function Phonebook() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const { data: contacts } = useGetContactsQuery()
  const [addContact, { error }] = useAddContactMutation()

  useEffect(() => {
    if (error) onError(`${error.status} ${error.data.msg}`)
  }, [error])

  const handleSubmit = (e) => {
    e.preventDefault()
    const contact = { name, number }
    if (
      contacts &&
      contacts.filter((el) => el.name.toLowerCase() === name.toLowerCase())
        .length !== 0
    ) {
      onWarning(`Contacts ${name} already exist`)
    } else {
      addContact(contact)
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
