import s from './Contacts.module.css'
import { useGetContactsQuery } from '../../redux/Contacts/contacts-reducer'
import { getFilter } from '../../redux/Filter/filter-selectors'
import { useSelector } from 'react-redux'

import ContactItem from '../ContactItem/ContactItem'

export default function Contacts() {
  const { data, error, isFetching } = useGetContactsQuery()

  const filter = useSelector(getFilter)

  return (
    <ul className={s.list}>
      {data &&
        data
          .filter((el) => el?.name.toUpperCase().includes(filter.toUpperCase()))
          .map((el) => (
            <li className={s.item} key={el.id}>
              <ContactItem id={el.id} name={el.name} number={el.phone} />
            </li>
          ))}
    </ul>
  )
}
