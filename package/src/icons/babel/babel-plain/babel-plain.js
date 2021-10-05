import { createElement } from 'react'
import PropTypes from 'prop-types'

const BabelPlain = (props) => {
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
      d: 'M90.18 50.5v.15h.31a1.18 1.18 0 01.09-.43v-.27c-.13 0-.26.21-.38.58zm-2.94-7.08v-.27h-.44v.27h.44zm-8.54 16a14.07 14.07 0 00-2.35-3c0-.32.5-.79 1.59-1.42L81 52.34A7.79 7.79 0 0082.28 48v-.46c-.12-1.38-1.12-2.49-3-3.34q-1.68-1.13-6-1.25a35.58 35.58 0 00-9.41 2.58 38.64 38.64 0 01-3.63 2.29v.23a.87.87 0 00.36-.16.21.21 0 01.26.21L61 48h.11v.1a12.79 12.79 0 01-2.52 2l.13.24h-.11l-.28-.1c0 .08-.11.14-.34.16v.1l.27.34a1 1 0 01-.39-.09 1.88 1.88 0 00-1.16.63l.16-.69a56.27 56.27 0 001.16-6.5L58 44a4.73 4.73 0 01-1.09-1 3.71 3.71 0 000-.49v-.1h-.11q-1.85 2.77-7.11 9.45-4 4.75-4.14 5.28c-1.09 1.13-1.61 1.81-1.56 2-.29.19-.41.37-.36.58a.12.12 0 01-.16-.09 3.17 3.17 0 01-2.08 1.45l-1 .22a.23.23 0 00-.19.28v.12l.36-.08v.1l-.82.32-1.45.34h-.76c-.11.11.61 0 .33.06l-1 .22c-.58.13-.89.08-1-.15h-.11a.54.54 0 010 .24l-.06-.23-.76.18Q35 62.29 32 59c0-.43.67-1.05 2.12-1.86l4.08-3.59q1.37-1.76 1.63-5.65l-.06-.61c-.16-1.83-1.48-3.3-4-4.44-1.47-1-4.12-1.53-7.94-1.61a47.82 47.82 0 00-12.39 3.36 47.39 47.39 0 01-4.78 3v.32a1.25 1.25 0 00.48-.19.27.27 0 01.34.26l.32-.18h.2V48a18.64 18.64 0 01-3.34 2.6l.18.28H8.7l-.34-.12c0 .09-.15.16-.48.19v.17l.37.41a1.36 1.36 0 01-.5-.1A3.17 3.17 0 005.63 53l.18.28a4.47 4.47 0 011.06-.85v.46a1.53 1.53 0 00-.48.19l.38.58a12.63 12.63 0 012.43-2c.44.11.67.25.68.4h.34a26 26 0 017.14-3.86v.32q-.66 1-.89 1a1 1 0 00.23.59q.06.6-3.21 8.1Q6.17 75.5 1.13 83.84a1.08 1.08 0 00.2.45 4.17 4.17 0 001.57-.6h.18v.32h.31l.32-.18c0 .09.11.14.33.12v.32a2.83 2.83 0 01-.52 1.42A7.37 7.37 0 002.48 88v.15h.31a19.55 19.55 0 003.06-4.41 48.85 48.85 0 009-3.38 8.39 8.39 0 004.74-1.63v-.17l-.78.23h-.18v-.17a7.07 7.07 0 003.17-1q4.46-3.44 6.74-4.87 4.68-3.44 6.08-6.7l.52-.12a6.81 6.81 0 00.75 0c0-.08 0-.13.1-.15.7-.07.36 0 .81-.06l1.17-.27h.2l-.09.06a1.14 1.14 0 00.43 0l.08.34-5.34 8.49L32 75.71l-.58 1.94h.11l.58-.24-.19.75.06.22.16.2c-.07 0-.1.07-.08.15v.12l.24-.06q.53-.46.45-.84a2.21 2.21 0 00.76.06v.12c-.23.06-.35.24-.37.56v.12h.13c1.94-2.12 6.69-9.35 10.5-14.27q-.18-.8 6-2.22h.13q.22 1-1 4.67a12.58 12.58 0 00-.71 2.44 18.69 18.69 0 00-.92 3.22l-1.37 4.69A43.46 43.46 0 0043.74 85a1 1 0 01.4 0l.21-.18a.12.12 0 00.16.09l-.08-.34h.63c.19 0 .34-.28.48-.71 0-.64.1-1 .39-1.06a10.29 10.29 0 01.72-2.32 10.29 10.29 0 01.81-2.6c.55-2 1-3 1.21-3.06l.06.24-.4 1a50.68 50.68 0 01-2.12 7.35l.21.89h.13q2.6-5.59 7.48-22.14A2.89 2.89 0 0155.4 60l-.19-.2v-.1a1.27 1.27 0 00.78-.44c0-.08-.34-.21-1-.37l1.62-7a2.41 2.41 0 01.62-.48v.35a.87.87 0 00-.36.16l.31.44A10 10 0 0159 50.83c.34.09.5.21.52.32h.24a19.75 19.75 0 015.43-2.91v.23q-.49.74-.67.75a1 1 0 00.15.45 42.49 42.49 0 01-2.41 6.16 167.41 167.41 0 01-9.44 19.55.87.87 0 00.17.34 3 3 0 001.18-.46h.11v.23h.26l.23-.12q0 .1.25.08v.25a2.12 2.12 0 01-.4 1.06 5.31 5.31 0 00-.85 1.82v.12h.24a14.72 14.72 0 002.32-3.35 37.55 37.55 0 006.8-2.56 6.39 6.39 0 003.62-1.24v-.12l-.61.18h-.13v-.12a5.36 5.36 0 002.4-.77c2.25-1.73 4-3 5.12-3.7 3.6-2.62 5.27-5.13 5.07-7.55zm-.62.16l.08.94c-.11.23-.23.35-.34.36l-.14-1.6c.26.09.39.19.4.3zM7.52 52h-.16v-.29l.64-.05v.15a1.24 1.24 0 00-.47.19zM4.38 83.4a2 2 0 00-1-.21v-.46c0-.18.08-.3.31-.34s.33.13.34.43a6.78 6.78 0 01.89-1l.34.14c-.11.93-.4 1.41-.86 1.44zm33.55-35.1c-.16 0-.48-.48-.93-1.45v-.29c.3 0 .61.46.93 1.45v.29zm-.45-3.48l-.13.31-4.56-1.9q4.56.15 4.69 1.59zM18.25 61.35l-.64.06v-.29l.64-.06v.29zm-.52-9.92h.16v.46c-.15 0-.34.23-.59.66v-.32c.29-.34.44-.61.42-.79zm-1.35 3.19l.06.61h-.16l-.06-.61zm-.71 1.14h.31c0 .5-.17.77-.42.79h-.16a1.46 1.46 0 00.27-.77zm-.53 1.58h.18v.15l-.29.48h-.31v-.15a.4.4 0 00.42-.49zm-.52 1.43l-.09.76h-.16l-.07-.75h.32zM9.38 73.62c-.21 1-.43 1.57-.66 1.59v-.15a1.67 1.67 0 01.67-1.44zm-1 2.08v.15a.27.27 0 01-.28.34V76q0-.27.28-.34zM8.15 80h.48v.17a1.25 1.25 0 00-.48.19h-.31c0-.16.08-.28.28-.34zm13.79-4.26a25.56 25.56 0 00-4.8 2.73q-4.42 1.53-4.38 1.92a48 48 0 00-5.17 2.27 1.86 1.86 0 01-.85-.22 1.37 1.37 0 01.71-1.3 2.75 2.75 0 011.31.21 12.78 12.78 0 012.53-.83v-.32l-1 .08A13.17 13.17 0 0113.1 79h.48v.15c-.83.07-1.29.32-1.39.75 0 .2.13.28.34.26.62-.39.93-.62.92-.69q1.77-.34 9.81-5.13v.29c0 .14-.45.53-1.37 1.2zm-8.22 2.7a3.17 3.17 0 002-.93c.22 0 .34.07.35.26a7.17 7.17 0 00-2.19 1h-.16v-.31zM27 68.27l-4.11 3.26a40.68 40.68 0 01-4.94 3q-7.3 4-9.07 4.17H8.7q.22-.82 6.5-13.31a35.47 35.47 0 008.71-2.58l1-.08a5.59 5.59 0 014.49 1.15l.06.61c-.74 2.13-1.56 3.38-2.44 3.75zm-8-4.52l.66-.06v.15l-.66.06v-.15zm9.29-1.57h.48c.45.21.68.4.7.57v.15a1.36 1.36 0 01-1.19-.67zm1.31-7.48a19 19 0 01-3.6 2.61c-.63.06-3 1-7.07 2.76a1.29 1.29 0 00-.63-.07v-.29a3.81 3.81 0 01.79-2.22c.32-1.68.66-2.64 1-2.87l3.4-7.65q-.06-.71 2.18-1.09h.48v.44c1.46-.22 2.38-.35 2.73-.38 2.7-.23 4.11.32 4.22 1.63h.31l-.07-.77h.34A2.12 2.12 0 0135 48.25a2.48 2.48 0 01-.69 1.59c-.21 0-.33-.13-.34-.43h-.34l-.07.93q-2.05 3.07-3 3.16c-.56.77-.9 1.16-1 1.16zm2.09 5.36a1.2 1.2 0 00-.67-.26v-.46h.31l.68.4a.27.27 0 01-.28.34zm2.16 2.56c.3.12.48.25.51.37h-.24l-.22.18-.06-.62zM34 63.9v-.12l.39-.09v.12l-.39.09zm.94 1.1c.4-.07.6-.09 1.34-.26v.12l-1.42.33a1.87 1.87 0 000-.19zm1.38.59a6.06 6.06 0 00-1.42.2v-.12l1.19-.38.57-.13.06.22c-.26.06-.07.06-.37.21zm1.26-.3a.26.26 0 01-.32-.19l.36-.08a.22.22 0 01.3.19l-.34.08zM41 61.57v-.12l.59-.14.06.22h-.62zm3.64 22.34a.92.92 0 000-.37h.13a.21.21 0 01.29.17v.12l-.48.11zm2.55-21.38h-.26a7.38 7.38 0 01-1.06.35l-.24.06a.24.24 0 01-.31-.17l1.68-.43.56-.26.19.21a1.25 1.25 0 00-.58.24zm1.31-.42v-.12a.71.71 0 00.32-.21l1.18-.27v.12a9.36 9.36 0 00-1.53.48zm.19-2.45a1 1 0 00-.34.21c0-.08-.19-.08-.5 0-.06-.23.84-.56 2.69-1l.26-.06.06.22c-1.3.38-2 .6-2.17.62zm3.26-3.52c-.13 1.48-.65 2.32-1.57 2.53v-.12l-.82.32-.36.08a.91.91 0 01-.5 0l-.07-.33a49.32 49.32 0 013.56-4.91h.28a5.09 5.09 0 01-.48 2.39zm5.77-4.94h-.12v-.23h.48v.12a1.57 1.57 0 00-.36.15zm-2.38 23.86a1.49 1.49 0 00-.75-.17v-.35q0-.18.22-.25c.16 0 .25.09.27.34a4.09 4.09 0 01.67-.77L56 74c-.09.71-.31 1.08-.64 1.11zm25.47-26.64c-.12 0-.35-.36-.72-1.12v-.23c.23 0 .48.34.72 1.09v.26zm-.34-2.66l-.11.24-3.45-1.44c2.3.07 3.49.48 3.56 1.2zM65.86 58.3h-.48v-.23h.48v.23zm-.4-7.54h.13v.35q-.18 0-.45.5v-.23a1.08 1.08 0 00.31-.62zm-1 2.42v.46h-.13v-.46zm-.55.87h.24q0 .59-.31.61h-.14a1.26 1.26 0 00.2-.61zm-.39 1.19h.11v.12l-.21.37h-.24v-.12c.25 0 .36-.15.34-.38zm-.39 1.08l-.08.6h-.11v-.59h.24zm-4 11.3q-.24 1.17-.5 1.2v-.1a1.33 1.33 0 01.51-1.1zm-.73 1.58v.1a.21.21 0 01-.22.27v-.12q0-.18.22-.25zm-.21 3.28h.37v.12a1.07 1.07 0 00-.36.14h-.24q0-.2.22-.25zm10.46-3.23A21.75 21.75 0 0065 71.31c-2.24.78-3.34 1.27-3.33 1.46a35.33 35.33 0 00-3.9 1.72 1.45 1.45 0 01-.64-.18 1 1 0 01.54-1 2.1 2.1 0 011 .15 10.83 10.83 0 011.93-.62v-.23l-.75.07a10 10 0 012.14-1h.37v.1c-.63.06-1 .24-1.06.58a.21.21 0 00.26.21c.47-.31.69-.48.69-.54q1.34-.24 7.44-3.9v.23c0 .09-.34.39-1 .9zm-6.24 2A2.5 2.5 0 0064 70.6c.16 0 .25.06.26.21a5.92 5.92 0 00-1.66.71h-.13v-.22zm10.08-7.74l-3.1 2.5a30.16 30.16 0 01-3.77 2.3q-5.53 3-6.89 3.16h-.13q.17-.63 4.95-10.1a27.26 27.26 0 006.61-2l.75-.07a4.2 4.2 0 013.4.89v.46c-.57 1.6-1.18 2.54-1.85 2.83zm-6.09-3.38h.48v.12h-.48v-.12zm7.05-1.2h.37c.34.17.52.32.53.44v.1a1 1 0 01-.91-.51zm1-5.67a14.26 14.26 0 01-2.66 2 35.66 35.66 0 00-5.37 2.08 1.23 1.23 0 00-.49-.07v-.23a2.92 2.92 0 01.59-1.69c.24-1.29.51-2 .79-2.17l2.6-5.81c0-.34.52-.62 1.64-.84h.37v.35q1.65-.27 2.07-.31c2-.18 3.12.23 3.21 1.24h.24v-.56h.24a1.55 1.55 0 011 1.18 1.93 1.93 0 01-.49 1.22c-.16 0-.25-.09-.27-.34h-.24l-.07.7c-1 1.57-1.79 2.39-2.26 2.42-.42.57-.68.86-.8.87zm1.09 3.88v-.35h.24l.52.32a.22.22 0 01-.22.25 1 1 0 00-.51-.2zM32.15 79.76l-.24.06-.21.18a.21.21 0 00.29.17c.16 0 .22-.13.19-.28v-.12zm-.92-1.84v.12c.16 0 .22-.13.19-.28v-.12a.22.22 0 00-.19.28zm6.6-12.39l.18-.11h-.09a.11.11 0 00-.08.13zm0-3.21l.28-.07L38 62l-.28.07.06.24zm65.85 9.41l-.63-.07-.11.24v.1l3.77-.32v-.23l-3 .26zm3.45-.29v.23-.23zm15.83-2.07v.23l.41.07v-.23l-.41-.07zm-.58 0a15.72 15.72 0 01-3.78.57v.23h.4l.31-.12c2.8-.31 3.13-.2 3.1-.51v-.11zm-17-4.12l-.25-.08a4.2 4.2 0 00-.3 1v.1c.2 0 .37-.34.54-1zm-3.41-1.84v-.12h-.13l-.23.15.13.22c.18 0 .26-.1.24-.26zm7.41 7.66v-.23h-.07v.23zm15.37-3.47h.18c.1 0 .15-.09.14-.24l-.1-.22a3 3 0 00-1.46.37v-.12l-.77.07c0-.23-.08-.35-.19-.34h-.4c-.47 0-.69 0-.92.2 0-.08 0-.12-.08-.12h-.45l-.26.15c0-.08 0-.12-.08-.12l-.16.14v-.12h-.77v.23l.32.08h.3a.54.54 0 00.34.07l.26-.13v.1a19.08 19.08 0 01-2.46.47.43.43 0 00-.25-.1.2.2 0 01-.19-.21l.52-.07a3.19 3.19 0 00.35.09c.42-.21.44-.29.66-.31v-.23a15.19 15.19 0 01-2.66.25h-.08v-.23c2.31-.28 1.54-.12 2.33-.34 0 .08 0 .12.08.12a.54.54 0 01.32-.16h.16a8.46 8.46 0 002.57-.28v.1l.26-.13h.24c0-.23.34-.27.46-.28v-.25c-2.81.57-3.55.41-4.33.63v-.1a3.41 3.41 0 01-1 .08.49.49 0 00-.23.15c0-.08 0-.12-.09-.12l-2.39.39c0-.07 0-.1-.09-.09a12.17 12.17 0 01-2.56.46.78.78 0 00-.31.13c0-.07 0-.1-.13-.09l-1 .08-.68.17c0-.07 0-.1-.13-.09a5.41 5.41 0 01-1 .19c-.17 0 .08 0 0-.1l-.21.12h-1.16c-1.8.22-1.6.25-1.8.26h-.67a.09.09 0 01-.1.11c-.76-.1-1.16-.22-1.16-.36q.15-1.09.53-1.12h.13l-.11.24h.13c.24-.13.35-.25.34-.36v-.25h-.24v-.23a.84.84 0 01.07-.47l.55-.89v.23h.26v-.23l-.15-.21a1 1 0 01.47-.27v-.12h-.35v-.35a10 10 0 001-2.57l.25.1c.16 0 .23-.1.22-.27h-.24v-.1a.89.89 0 01.09-.49 1.56 1.56 0 00.52-1.22c.07 0 .11 0 .12.11.33-.19.58-.68.76-1.5a46.87 46.87 0 002.47-6.25c2.05-5.52 2-6.1 2.25-7.41h-.24a.84.84 0 01-.09.48 1 1 0 00-.39-.09v-.1a2.83 2.83 0 01.61-1.71h.11l.21.8h.24a7.3 7.3 0 01.19-1c0-.12-.1-.2-.29-.21l-.23.15v-1.3h-.12a.91.91 0 01-.32-.51l-1.33.13a1.22 1.22 0 00-.15-.41c0-.12.29-.24.9-.36l.27.1.25-.15c0 .08.06.12.15.11l.25-.15c0 .08.06.12.15.11h.12v-.27h-1.46l-.25.17v-.15q-9.38.77-10.65.89H99.6c0 .1-.08.16-.27.18l-.27-.12L98 41a6.06 6.06 0 01-1.08 0 .93.93 0 01-.51.2l2.65-.2a1.22 1.22 0 01-.65.21.9.9 0 01-.53-.09 15.15 15.15 0 01-2 .47l-.27-.1-4.36.67a1.09 1.09 0 00-.59-.09 7.24 7.24 0 00-1.16.25l-2.11.88.16.26a1.17 1.17 0 00.43-.17l.75.07-.09.7a1.88 1.88 0 00-1.2 1.34c-1 .46-1.55.78-1.55 1v.12h.16l.28-.15.33.39v.54q0 .25-5.21 11c-3 6.9-4.6 10.67-4.75 11.35-1 .29-1.63.71-1.81 1.27 0 .18.33.3.92.34v.27l-.27.45v.54q0 .42 2.26.64c0-.09 0-.15.14-.16a8.16 8.16 0 01-.28 2H78a3.47 3.47 0 00.88-1.73H79c.15 0 .31.16.49.52q-.28.11-2 4.45l.16.26h.16q2.05-5.2 2.58-5.75 2.7-.24 9.33-1l.28-.17a.13.13 0 00.17.13h.29l.28-.17a.13.13 0 00.17.13l3.35-.29c.89-.07 1.3-.34 1.27-.8 0-.12.51-.26 1.57-.41a1.28 1.28 0 01.46.08c0-.08.52-.17 1.58-.26 0-.56.2-.86.52-.89v-.27a4.63 4.63 0 00-1 .23 6.26 6.26 0 01-1.33-.16 1.23 1.23 0 01-.43.17L94.51 69l-.28.15q0-.13-.17-.11h-.13l-.3.15c0-.08-.25-.15-.74-.21l-.3.18h-.58v-.15q4.5-.49 4.44-1.22a.26.26 0 01.32.27l.88-.22v-.27l-7.18.2c0 .09 0 .15-.14.16l-.88-.07a1.06 1.06 0 00-.56.2l-.35-.06a10 10 0 00-2 .33 12.73 12.73 0 00-2 0l-1.61.14-.75-.08c0-.48.89-2.81 2.79-7a6.11 6.11 0 011.54-2.64 1.08 1.08 0 01.46.11l1.03-.39.59.09a13.45 13.45 0 003.45-.85 1.62 1.62 0 01.75.07l.88-.21 2.61-.22a17.3 17.3 0 003.62-.74v-.27c-.48 0-.74 0-.75-.23 0-.36-.38-.51-1.06-.46v-.27l.72-.21 1.88-.16v-.27h-1.16v-.29l.73-.07c.2 0 .28-.11.26-.3-1 0-1.47 0-1.48-.15q-10.23.5-10.26.19a1.17 1.17 0 00-.43.19l-.29-.31q2.71-5.76 3.18-5.8a1.69 1.69 0 01-.22.72V49h.29c.72-1.71 1.32-2.6 1.83-2.64 2.14-.19-.3-.33 4.29-1a.89.89 0 00.41.11q2.7-.55 7.52-1.14v-.27l-1.71.16v-.27a.93.93 0 00.51-.2v.15a1 1 0 00.39-.19 1.23 1.23 0 01.68.08 9.92 9.92 0 011.44-.29l1.07-.1c.26-.17.38-.32.37-.46v-.12a3.38 3.38 0 01-.94-.06.27.27 0 01.24-.3l2-.19.91-.23c0 .1.06.14.13.14a1 1 0 00.39-.19h.15a7.45 7.45 0 00-.4 1.09h-.26a1.14 1.14 0 00-.15-.48H110c-2.42 6.75-3.5 9.89-5.74 15.07-.41 1.32-.75 2.06-1.05 2.22a.21.21 0 00.26.21 3.25 3.25 0 01-.46 1.93c-1 3-1.72 4.61-2.08 4.91l.23 1.41a.22.22 0 01-.22.25h-.24c0-.39-.18-.58-.43-.55h-.13a5.54 5.54 0 00-.72 1.72h.24a.81.81 0 00.45-.75h.48l.28.1a1.49 1.49 0 00-.31.85l.13.22-.32.75v.12a1.51 1.51 0 01.91.26A1.63 1.63 0 00102 71h3.12l.9-.31a20.9 20.9 0 002.23-.07h.39l.21-.14v.12a6.11 6.11 0 011.84.07v.12h-.55v.23a.79.79 0 00.44-.17c.14 0 .22.07.23.23a3.28 3.28 0 00-.75.17l-.24-.08c-.38.1-.3.13-.56.15l-.38-.07a.09.09 0 01-.09.11.2.2 0 00.23.21h.39l2-.18.77-.17c0 .07 0 .1.1.09l.37-.14.7-.06c.54 0 .53-.08 1.71-.27 0-.07 0-.1.07-.11v.1a17.2 17.2 0 002.34-.45v.06c.48-.11.21-.08.34-.18 0 .08 0 .12.08.12h.34v-.25h-.84a3.59 3.59 0 01-.76.06l-1.71.09v-.12l1-.13h.34l.2-.14V70c1.34-.11 1.82.22 8-1.1.34 0 .31-.31.52-.89a.58.58 0 01-.33-.07 9.7 9.7 0 01-1.77.26c-.08 0-.15-.07-.18-.21v-.1h1a2.4 2.4 0 001-.34c0 .08-.2.13-.08.12zm-45.88.74h-.44a8.26 8.26 0 01.7-2h.29a7.62 7.62 0 01-.55 2zm.53-2.12v-.12c0-.15.08-.25.29-.3v.2c0 .18-.08.28-.29.3zm5.82 4.5v.12l-.73.07v-.12l.73-.07zm-.88-.07c0 .15-.21.32-.7.48l-.89-.07h-.29v-.27l1.91-.18zm5.89-27.11h-.44v-.15c0-.15.07-.25.26-.3h.16l.3.12a.26.26 0 01-.27.3zm6.66-1.3H97v.27h-.4a.27.27 0 01.24-.3zm-1.68.59l-.66-.07v-.12a7.15 7.15 0 001.69-.32c0 .1.1.14.27.12v.27h-.26a.9.9 0 01-.53-.09 1.14 1.14 0 01-.51.19zm.79 2.46v-.12l1.07-.1v.12l-1.07.1zm1.15-.93v-.16h.52v.15h-.52zm.12-1.83h-.14l.12-.29 1.19-.11v.15a7.2 7.2 0 00-1.18.24zm.61 2.57v-.27h.52q.27 0 .28.25l-.78.07zm3.16-4.3l-.67.19h-.12A6.85 6.85 0 0199 41c.87-.06 1.7-.12 2-.17zm-.72 3v.12l-.92.08v-.12l.92-.08zm1.51.72c0-.11-.19-.19-.55-.22l-.92.26h-.71c-.16-.11-.24-.19-.25-.24h.82l1.84-.3h.94v.15a5.28 5.28 0 00-1.18.24zm9.49-2.52h.21a3.57 3.57 0 011.11-.75 6.55 6.55 0 01-1.57 3.27l-.52-.32a17 17 0 00.77-2.22zm-1.6 2.75h.13c-.18.34-.34.51-.47.52v-.35a.79.79 0 00.36-.16zm-1 2.47a3.5 3.5 0 01.72-1.72v.12c-.13.93-.34 1.43-.61 1.46v.59a1.32 1.32 0 00-.32.75h-.13l-.07-.81c.15 0 .27-.15.35-.39zm-.4 1.34a3.41 3.41 0 01-.27 1h-.13v-.35c.18-.41.33-.62.43-.62zm-7.52 21.82v-.1h.24v.35c-.13 0-.22-.07-.26-.23zm10.74.28c0-.08 0-.12-.13-.11l-.61.06v-.12h.06l1.43-.12v.12a1.26 1.26 0 00-.75.18zm-.72-.3c.06 0 0 .06 0 .07s-.07 0 0-.07zm.07-1.68l-.8.07v-.12l.73-.07.63-.16c0 .07 0 .1.13.09.75-.13.68-.17 1-.2.12 0 .2.07.21.21l-1.93.17zm2.8-.24a3.19 3.19 0 00-.79-.06v-.1l.72-.07v.1c-.07 0 .2 0 .07.12zm.06-.13v-.1h.39v.1h-.39zm.87-.07v-.1a.68.68 0 00.28-.15.28.28 0 01.32.26zm1.11-.14V68h.48v.12h-.48zm.66-.06c0-.14 0-.22.17-.24l.16.21a.09.09 0 01.07-.11l.12.22-.52-.07zm9.14-1.04zm.17-.12c.07 0 .11-.09-.07-.12s.09.12-.09.13V67l.1-.07-.1.08-.2.25.39-.14v-.23zm.68.53h-.07v.23h.55c0-.15-.37-.2-.49-.2z',
    }),
  )
}

BabelPlain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

BabelPlain.defaultProps = {
  color: '#000305',
  size: '128',
}

export default BabelPlain
