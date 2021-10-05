import { createElement } from 'react'
import PropTypes from 'prop-types'

const BehancePlain = (props) => {
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
      d: 'M48.53 48.26c0-7.16-4.87-7.16-4.87-7.16h-20v15.35h18.76c3.24 0 6.11-1.04 6.11-8.19zM43.66 67.06h-20v18.38h19.1c2.87-.08 8.18-1 8.18-8.94-.03-9.5-7.28-9.44-7.28-9.44zM94.93 56.45c-10.63 0-12.11 10.6-12.11 10.6h22.6s.14-10.6-10.49-10.6z',
    }),
    createElement('path', {
      fill: color,
      d: 'M111.25 2.16h-94.5A14.59 14.59 0 002.16 16.75v94.49a14.59 14.59 0 0014.59 14.59h94.49a14.59 14.59 0 0014.59-14.59V16.75a14.59 14.59 0 00-14.58-14.59zM79.86 32.92h28.38v8.48H79.86zM65.51 77.36c0 21-21.85 20.31-21.85 20.31H7.86v-68.8h35.8c10.88 0 19.47 6 19.47 18.32s-10.5 13.09-10.5 13.09c13.84 0 12.88 17.08 12.88 17.08zm53.09-1.12H83c0 12.78 12.11 12 12.11 12 11.43 0 11-7.4 11-7.4h12.09c0 19.64-23.54 18.29-23.54 18.29-28.25 0-26.43-26.3-26.43-26.3s0-26.43 26.43-26.43c27.85-.02 23.95 29.84 23.95 29.84z',
    }),
  )
}

BehancePlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

BehancePlain.defaultProps = {
  color: '#1d1d1b',
  size: '128',
}

export default BehancePlain
