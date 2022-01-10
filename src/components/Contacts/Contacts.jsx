import s from './Contacts.module.css'
import { useGetContactsQuery } from '../../redux/Contacts/contacts-reducer'
import { getFilter } from '../../redux/Filter/filter-selectors'
import { useSelector } from 'react-redux'

import ContactItem from '../ContactItem/ContactItem'
import Loader from '../Loader/Loader'
import { onError } from '../../utilits/messages'
import { useEffect } from 'react'

export default function Contacts() {
  const { data, error, isFetching } = useGetContactsQuery()

  useEffect(() => {
    if (error) onError(`${error.status} ${error.data}`)
  }, [error])

  const filter = useSelector(getFilter)

  return (
    <ul className={s.list}>
      {isFetching && <Loader />}
      {data &&
        data
          .filter((el) => el?.name.toUpperCase().includes(filter.toUpperCase()))
          .map((el) => (
            <li className={s.item} key={el.id}>
              <ContactItem
                id={el.id}
                nameContact={el.name}
                numberContact={el.phone}
              />
            </li>
          ))}
    </ul>
  )
}
