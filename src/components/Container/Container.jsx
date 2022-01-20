//created by Irina Shushkevych
import PropTypes from 'prop-types'
import s from './Container.module.css'

function Container({ title = '', children, size = 'small' }) {
  return (
    <div className={!size || size === 'small' ? s.container : s.containerFull}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </div>
  )
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'full']),
}

export default Container
