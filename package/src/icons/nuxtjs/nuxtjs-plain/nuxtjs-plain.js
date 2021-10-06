import { createElement } from 'react'
import PropTypes from 'prop-types'

const NuxtJSPlain = (props) => {
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
      d:
        'M39.267 108.97l-.284-.567c-.567-1.135-.567-2.27-.283-3.689H8.059l45.395-80.576 19.01 34.33 6.241-4.54-19.01-34.33c-.283-.567-2.553-3.971-6.241-3.971-1.703 0-4.256.567-6.242 4.256L1.25 101.31c-.284.85-2.27 4.54-.568 7.66 1.135 1.702 2.837 3.405 6.81 3.405h38.586c-3.973 0-5.959-1.703-6.81-3.405zm87.385-7.377l-36.883-66.39c-.567-.568-2.554-4.257-6.242-4.257-1.702 0-4.256.852-6.242 4.256l-4.823 7.944v15.321l11.065-19.01 36.6 65.256h-13.903a6.526 6.526 0 01-.567 3.973l-.284.283c-1.702 3.121-5.958 3.405-6.526 3.405h21.563c.851 0 4.823-.284 6.81-3.405.85-1.418 1.418-3.972-.568-7.376zm-20.144 7.377v-.284l.284-.567c.283-1.135.567-2.27.283-3.405l-1.134-3.404L77 50.808l-4.255-7.66h-.284l-4.256 7.66-28.939 50.502-1.135 3.404a6.81 6.81 0 00.568 4.256c1.135 1.702 2.837 3.405 6.81 3.405h53.906c.851 0 5.107-.284 7.093-3.405zM72.462 58.468l26.386 46.246H46.076z',
    }),
  )
}

NuxtJSPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

NuxtJSPlain.defaultProps = {
  color: '#000000',
  size: '128',
}

export default NuxtJSPlain
