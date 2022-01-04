import s from './Contacts.module.css'

import ContactItem from '../ContactItem/ContactItem'
import { useSelector } from 'react-redux'
import { getFilteredContacts } from '../../redux/Contacts/contacts-selectors'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts } from '../../redux/Contacts/contacts-operations'

export default function Contacts() {
  const contacts = useSelector(getFilteredContacts)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('effect contacts ')
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <ul className={s.list}>
      {contacts.map((el) => (
        <li className={s.item} key={el.id}>
          <ContactItem id={el.id} name={el.name} number={el.phone} />
        </li>
      ))}
    </ul>
  )
}
