import * as React from 'react'
import { SVGProps } from 'react'

const SvgHaxePlain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <path
      fill="#EA8220"
      d="M0 0h32.3L64 16 96.3 0H128v32.6L111.8 64 128 95.8V128H95.2L64 112.1 32.6 128H0V94.7L15.7 64 0 31.8z"
    />
  </svg>
)

export default SvgHaxePlain
