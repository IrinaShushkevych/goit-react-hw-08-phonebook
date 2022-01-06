import { css } from '@emotion/react'
import { PropTypes } from 'prop-types'
import CircleLoader from 'react-spinners/CircleLoader'

const override = css`
  display: block;
  margin: 0px 6px;
`

const loading = true

function Loader({ size = 50 }) {
  return (
    <CircleLoader
      color="rgb(6, 255, 247)"
      loading={loading}
      css={override}
      size={size}
    />
  )
}

Loader.propTypes = {
  size: PropTypes.number,
}

export default Loader
