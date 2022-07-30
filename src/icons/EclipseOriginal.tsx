import * as React from 'react'
import { SVGProps } from 'react'

const SvgEclipseOriginal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <defs>
      <linearGradient
        id="eclipse-original_svg__a"
        gradientUnits="userSpaceOnUse"
        x1={0.5}
        y1={10.894}
        x2={0.5}
        y2={-1.595}
        gradientTransform="matrix(76.53125 0 0 6.78125 32.176 54.11)"
      >
        <stop offset={0.303} stopColor="#473788" />
        <stop offset={0.872} stopColor="#2c2255" />
      </linearGradient>
      <linearGradient
        id="eclipse-original_svg__b"
        gradientUnits="userSpaceOnUse"
        x1={0.5}
        y1={8.965}
        x2={0.5}
        y2={-3.524}
        gradientTransform="matrix(76.53125 0 0 6.78125 32.176 67.191)"
      >
        <stop offset={0.303} stopColor="#473788" />
        <stop offset={0.872} stopColor="#2c2255" />
      </linearGradient>
      <linearGradient
        id="eclipse-original_svg__c"
        gradientUnits="userSpaceOnUse"
        x1={0.5}
        y1={2.152}
        x2={0.5}
        y2={-1.667}
        gradientTransform="matrix(69.61719 0 0 22.17969 35.633 80.27)"
      >
        <stop offset={0.303} stopColor="#473788" />
        <stop offset={0.863} stopColor="#2c2255" />
      </linearGradient>
    </defs>
    <path
      fill="#2c2255"
      d="M35.633 80.27H16.375c2.55 8.75 7.281 16.59 14.21 23.515 11.044 11.047 24.325 16.563 39.852 16.563 3.106 0 6.114-.23 9.036-.672 11.699-1.766 21.941-7.055 30.715-15.89 6.972-6.927 11.738-14.766 14.308-23.516ZM25.016 54.113H14.953a58.89 58.89 0 0 0-.734 6.782h112.445a58.833 58.833 0 0 0-.738-6.782M14.219 67.191a59.14 59.14 0 0 0 .734 6.782H125.93c.375-2.246.62-4.508.738-6.782M124.5 47.812c-2.57-8.769-7.336-16.648-14.313-23.624-8.75-8.754-18.964-14.004-30.624-15.77a60.963 60.963 0 0 0-9.122-.684c-15.53 0-28.812 5.489-39.855 16.453-6.93 6.977-11.668 14.856-14.215 23.625"
    />
    <path
      fill="#f7941e"
      d="M10.875 64.043c0-29.703 22.309-54.383 51.332-58.723-.719-.027-1.445-.058-2.172-.058-32.566.004-58.969 26.32-58.969 58.781 0 32.465 26.403 58.781 58.97 58.781.73 0 1.452-.027 2.175-.054-29.027-4.34-51.336-29.02-51.336-58.727Zm0 0"
    />
    <path
      fill="url(#eclipse-original_svg__a)"
      d="M108.707 60.89a38.413 38.413 0 0 0-1.164-6.78H33.34a38.413 38.413 0 0 0-1.164 6.78Zm0 0"
    />
    <path
      fill="url(#eclipse-original_svg__b)"
      d="M108.707 67.191H32.176c.183 2.29.574 4.559 1.164 6.782h74.203a38.45 38.45 0 0 0 1.164-6.782Zm0 0"
    />
    <path
      fill="url(#eclipse-original_svg__c)"
      d="M70.441 102.45c15.41 0 28.696-9.083 34.809-22.18H35.633c6.117 13.097 19.398 22.18 34.808 22.18Zm0 0"
    />
    <path
      fill="#fff"
      d="M26.504 67.191h100.082a55.61 55.61 0 0 0 .082-3.027c0-1.098-.04-2.187-.102-3.273H14.22a60.68 60.68 0 0 0-.102 3.273c0 1.016.031 2.023.082 3.027Zm8.906-19.379H16.371c-.625 2.051-1.031 4.157-1.418 6.301H125.57a55.385 55.385 0 0 0-1.515-6.3m-5.72 26.16H14.954c.375 2.14.805 4.246 1.422 6.297h108.05a56.053 56.053 0 0 0 1.49-6.297Zm0 0"
    />
  </svg>
)

export default SvgEclipseOriginal
