import { createElement } from 'react'
import PropTypes from 'prop-types'

const ElmPlain = (props) => {
  const { color, size, ...otherProps } = props
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 128 128',
      ...otherProps,
    },
    createElement('path', {
      fill: color,
      d: 'M64 60.74l25.65-25.65h-51.3L64 60.74zM7.91 4.65l25.83 25.84h56.17L64.07 4.65H7.91zM67.263 63.993l28.08-28.08 27.951 27.953-28.08 28.079zM123.35 57.42V4.65H70.58l52.77 52.77zM60.74 64L4.65 7.91V120.1L60.74 64zM98.47 95.21l24.88 24.89V70.33L98.47 95.21zM64 67.26L7.91 123.35h112.18L64 67.26z',
    }),
  )
}

ElmPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

ElmPlain.defaultProps = {
  color: '#34495e',
  size: '128',
}

export default ElmPlain
