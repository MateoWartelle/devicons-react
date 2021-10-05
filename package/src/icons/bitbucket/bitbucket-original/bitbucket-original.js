import { createElement } from 'react'
import PropTypes from 'prop-types'

const BitbucketOriginal = (props) => {
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
      d: 'M64 1.023v.002-.002c-30 0-54.557 8.074-54.557 18.1 0 2.64 6.55 40.504 9.147 55.52 1.165 6.733 18.56 16.607 45.39 16.607l.02-.08v.08c27 0 44.238-9.874 45.403-16.61 2.598-15.015 9.15-52.878 9.15-55.518C118.554 9.097 94 1.022 64 1.022zm0 78.062c-9.578 0-17.343-7.766-17.343-17.343C46.657 52.164 54.422 44.4 64 44.4s17.343 7.764 17.343 17.343c0 9.577-7.765 17.342-17.343 17.342zm-.01-54.368c-19.296-.03-34.934-3.384-34.928-7.49.007-4.107 15.656-7.41 34.952-7.378 19.296.03 34.934 3.382 34.927 7.49-.005 4.106-15.653 7.407-34.95 7.377z',
    }),
    createElement('path', {
      fill: color,
      d: 'M103.212 89.69c-.83 0-1.494.588-1.494.588S88.283 100.918 64 100.918s-37.718-10.64-37.718-10.64-.665-.587-1.494-.587c-.99 0-1.93.666-1.93 2.135 0 .155.015.31.044.462 2.085 11.16 3.61 19.09 3.876 20.296 1.82 8.21 17.88 14.417 37.22 14.417H64c19.342 0 35.402-6.207 37.222-14.417.268-1.205 1.79-9.13 3.876-20.29.028-.153.044-.31.044-.465 0-1.47-.94-2.137-1.93-2.137z',
    }),
    createElement('circle', {
      fill: color,
      cx: '63.983',
      cy: '61.737',
      r: '8.691',
    }),
  )
}

BitbucketOriginal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

BitbucketOriginal.defaultProps = {
  color: '#205081',
  size: '128',
}

export default BitbucketOriginal
