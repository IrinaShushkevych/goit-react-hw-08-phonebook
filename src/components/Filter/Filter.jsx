import { useSelector, useDispatch } from 'react-redux'
import s from './Filter.module.css'
import { setFilter } from '../../redux/Filter/filter-actions'
import { getFilter } from '../../redux/Filter/filter-selectors'

export default function Filter() {
  const filter = useSelector(getFilter)
  const dispatch = useDispatch()
  const onFilter = (value) => dispatch(setFilter(value))

  return (
    <label htmlFor="name" className={s.label}>
      Find contact by name
      <input
        type="text"
        name="name"
        className={s.input}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filter}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onInput={(e) => {
          onFilter(e.target.value)
        }}
      />
    </label>
  )
}
