//created by Irina Shushkevych
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import s from './Contacts.module.css'
import { useGetContactsQuery } from '../../redux/Contacts/contacts-reducer'
import { getFilter } from '../../redux/Filter/filter-selectors'
import ContactItem from '../ContactItem/ContactItem'
import Loader from '../Loader/Loader'
import { onError } from '../../utilits/messages'

export default function Contacts() {
  const { data, error, isFetching } = useGetContactsQuery()

  useEffect(() => {
    if (error) onError(`${error.status} ${error.data}`)
  }, [error])

  const filter = useSelector(getFilter)

  return (
    <>
      {isFetching && <Loader />}
      <table width="100%">
        <thead>
          <tr className={[s.rowHead]}>
            <th className={s.cell}>Name</th>
            <th className={s.cell}>Phone</th>
            <th className={s.cell}></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data
              .filter((el) =>
                el?.name.toUpperCase().includes(filter.toUpperCase()),
              )
              .map((el) => (
                <tr key={el.id} className={s.row}>
                  <ContactItem
                    id={el.id}
                    nameContact={el.name}
                    numberContact={el.number}
                  />
                </tr>
              ))}
        </tbody>
      </table>
      {/* <ul className={s.list}>
        {data &&
          data
            .filter((el) =>
              el?.name.toUpperCase().includes(filter.toUpperCase()),
            )
            .map((el) => (
              <li className={s.item} key={el.id}>
                <ContactItem
                  id={el.id}
                  nameContact={el.name}
                  numberContact={el.number}
                />
              </li>
            ))}
      </ul> */}
    </>
  )
}
