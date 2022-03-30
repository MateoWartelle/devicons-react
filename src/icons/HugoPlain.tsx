import * as React from 'react'
import { SVGProps } from 'react'

const SvgHugoPlain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <path
      fill="#FF4088"
      d="M110 26.1 73.3 4.8c-6.6-3.8-14.7-3.7-21.2.3L19.2 25.4c-6.5 4.1-10.4 11-10.4 18.7v41.4c0 7.6 4.1 14.7 10.7 18.5L53 123.3c3.1 1.8 6.5 2.7 10 2.7 3.4 0 6.8-.9 9.8-2.6l36.4-20.5c6.2-3.5 10-10.1 10-17.2V42c0-6.5-3.5-12.6-9.2-15.9zM52.5 67.9v29H38.6V30.5h13.9v24.2h23V30.5h13.9v66.4H75.5v-29h-23z"
    />
  </svg>
)

export default SvgHugoPlain
