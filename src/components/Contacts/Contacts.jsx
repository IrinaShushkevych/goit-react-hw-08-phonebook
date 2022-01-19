//created by Irina Shushkevych
import s from './Contacts.module.css'
import { useGetContactsQuery } from '../../redux/Contacts/contacts-reducer'
import { getFilter } from '../../redux/Filter/filter-selectors'
import { useSelector } from 'react-redux'

import ContactItem from '../ContactItem/ContactItem'
import Loader from '../Loader/Loader'
import { onError } from '../../utilits/messages'
import { useEffect } from 'react'
import { getToken } from '../../redux/Auth/auth-selector'
import { useNavigate } from 'react-router-dom'

export default function Contacts() {
  const token = useSelector(getToken)
  const { data, error, isFetching } = useGetContactsQuery({ token })
  const navigate = useNavigate()

  useEffect(() => {
    if (error) onError(`${error.status} ${error.data}`)
  }, [error])

  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token, navigate])

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
                numberContact={el.number}
              />
            </li>
          ))}
    </ul>
  )
}
