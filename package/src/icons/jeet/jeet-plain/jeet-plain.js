import { createElement } from 'react'
import PropTypes from 'prop-types'

const JeetPlain = (props) => {
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
        'M107.453 41.338l-.04-.04c-10.817-1.23-19.398-9.813-20.63-20.63l-.058-.058C85 9.35 75.27.723 63.528.723c-12.962 0-23.47 10.507-23.468 23.47 0 .368.01.735.028 1.1A23.49 23.49 0 0124.61 40.318c-.22-.006-.44-.017-.66-.017C10.987 40.3.48 50.81.48 63.77c0 12.67 10.04 22.988 22.598 23.447 8.885 2.07 15.835 9.17 17.655 18.148.802 12.234 10.974 21.91 23.41 21.91 12.548 0 22.794-9.845 23.437-22.23a23.49 23.49 0 0115.178-17.056c.43.022.86.036 1.295.036 12.96 0 23.468-10.507 23.468-23.468 0-11.806-8.718-21.572-20.067-23.22zM47.973 63.77c0-8.32 6.285-15.164 14.366-16.062.127-.014.257-.023.387-.035.146-.013.295-.014.442-.022.12.003.238.01.358.01.395 0 .788-.01 1.178-.03 8.667.3 15.606 7.4 15.606 16.14 0 .12-.01.24-.013.36-.187 8.444-6.837 15.29-15.202 15.78-.18.058-.362.108-.542.163-.185-.046-.372-.088-.555-.138-8.536-.072-15.493-6.76-15.995-15.19-.04-.12-.072-.247-.11-.37.03-.117.052-.238.085-.354 0-.083-.007-.165-.007-.25z',
    }),
  )
}

JeetPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

JeetPlain.defaultProps = {
  color: '#FF664A',
  size: '128',
}

export default JeetPlain
