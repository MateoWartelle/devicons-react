import * as React from 'react'
import { SVGProps } from 'react'

const SvgFoundationPlain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#008CBA"
      d="m116.173 64.1 1.466.472.087-.159c-.8-1.056-1.576-2.191-3.034-2.396-1.061-.149-2.147-.108-3.223-.151.035-.51-.153-.69-.66-.482-.479.196-.973.356-1.458.539-1.163.437-2.321.889-3.491 1.305-.205.073-.461-.001-.693-.007.017-.218 0-.446.057-.653.214-.779.458-1.549.678-2.326.073-.259.11-.529.164-.792l1.105.878c.225-2.741-.326-5.136-1.755-7.449l1.433.08c-.644-1.489-1.602-2.617-2.945-3.412-1.694-1.004-3.604-.986-5.477-1.138-.295-.024-.594-.003-.956-.003 1.423 2.374 2.019 6.36 1.156 7.71l-.479-.807c-1.073 1.737-2.09 3.56-3.281 5.262-1.195 1.708-2.672 3.167-4.715 4.116l.248-1.223c-.304.08-.494.149-.69.179-.509.077-1.037.252-1.526.178-.915-.14-1.809-.418-2.707-.659-.616-.166-1.223-.364-1.834-.547l.001.003-.129-.138c-.713-.499-.598-1.094-.246-1.758.241-.455.412-.947.601-1.428.428-1.093.847-2.19 1.27-3.285.422-.473.9-.907 1.25-1.427.39-.58.686-1.228.978-1.866.209-.458.493-.773.972-.975a1.46 1.46 0 0 0 .69-.65c.246-.496.398-1.041.562-1.574.129-.424-.031-.728-.463-.869l-.53-.174c.046-.18.068-.371.145-.537 1.309-2.798 2.578-5.615 3.952-8.382 1.401-2.823 2.894-5.601 4.375-8.383.314-.591.752-1.116 1.133-1.67.663.044 1.325.115 1.988.129 2.977.062 5.679-.691 7.873-2.805 2.3-2.215 3.884-4.893 4.941-7.893l.214-.543-.416.262c-2.932 2.006-6.098 3.113-9.705 2.532.042-.116.058-.251.128-.346 1.264-1.711 2.527-3.422 3.808-5.121.453-.601.951-1.167 1.472-1.801-.324-.123-.55-.222-.784-.296-1.202-.378-2.401-.768-3.612-1.117-.515-.148-.623-.403-.406-.867.51-1.088 1.007-2.183 1.514-3.272l.567-1.013C102.818 6.79 100 6.727 97 7.099V5.323c-2 .182-2.419.288-3.519.531-1.092.24-2.189.617-3.265.934l-.159-.101 2.521-4.368c-1.306.149-2.527.224-3.72.438-2.393.428-5.106.91-7.484 1.414A61.242 61.242 0 0 0 78 4.994V3.112c-1 .271-2.777 1.055-4.489 1.692.35-1.05.814-1.924 1.088-2.805.06-.192.104-.415.111-.624-.09-.033-.145-.106-.229-.094-.733.106-1.447.207-2.173.349-3.778.741-7.366 1.992-10.744 3.853-.384.212-.77.411-1.314.7l-.256-4.037c-2.035.718-3.987 1.66-5.394 3.466l-.801-3.114-.007-.243-.037-.116-.061.069c-.175.202-.368.391-.522.608-1.603 2.258-2.446 4.78-2.602 7.539l-1.29-2.83-1.817 8.597-3.064-3.904a36.03 36.03 0 0 0-2.071 8.766l-2.152-2.427c-1.436 4.394-2.656 8.712-3.108 13.274-1.082-.659-1.744-1.526-2.197-2.582-.654-1.521-.813-3.113-.75-4.745.009-.248-.024-.497-.037-.746l-.182.002c-2.136 7.443-2.69 15.056-2.403 22.787l-2.648-5.041-.178.015c-.179 1.949-.392 3.895-.522 5.847-.081 1.206.121.992-1.032 1.279-3.628.905-7.076 2.207-10.091 4.492-.19.144-.424.229-.638.342l.218.205 3.087 1.154c-1.331 1.479-2.647 2.872-3.88 4.335-1.249 1.482-2.21 3.148-2.933 5.048.691-.288 1.252-.547 1.832-.755.551-.199 1.122-.345 1.683-.514-1.1 1.13-1.926 2.368-2.609 3.694-2.427 4.715-3.288 9.827-3.577 15.037-.188 3.369-.093 6.754.475 10.102.097.571.221 1.138.332 1.707l.25.044 1.505-3.558c.684 3.814.814 7.624.773 11.445l.163.099 1.361-1.659c.188.386.294.542.341.714.714 2.582.905 5.227.714 7.877-.099 1.382-.077 2.723.236 4.062.77 3.284 2.396 6.116 4.642 8.597.447.495 1.069.835 1.622 1.23.262.186.426.116.403-.233l-.053-.029.054.028 1.053.343 1.703.594.078-.16-1.09-2.272-.093-.133.048-.032.048.163c.078.023.18.022.231.072 1.063 1.04 2.415 1.579 3.737 2.171.368.877.972 1.561 1.676 2.161l1.19-.826c.164.203.301.355.417.521.984 1.409 2.332 2.07 4.049 2.001 1.079-.043 2.159-.065 3.239-.09 3.717-.087 7.435-.158 11.151-.262 2.574-.072 5.147-.178 7.72-.29 1.197-.053 2.392-.156 3.703-.243-1.928-5.083-5.942-7.769-10.392-9.673l3.814-1.039c5.522 3.064 11.615 5.078 16.597 9.138l.234-.121-.442-4.497c.308.21.636.418.948.649 1.221.903 2.438 1.813 3.656 2.72l.226.104.084.157c1.831 1.573 3.78 2.779 6.351 2.725 3.55-.075 7.104.002 10.657-.02.271-.001.654-.192.792-.415.8-1.285 1.588-2.582 2.296-3.92 1.776-3.357 3.507-6.738 5.258-10.109l.501-.945c-.789.236-1.471.574-2.148.92-.735.375-1.466.758-2.199 1.137l-.065.055.049-.072c.077-.233.114-.49.238-.695 1.597-2.64 3.143-5.314 4.832-7.895 1.677-2.564 3.631-4.961 4.663-7.897.471-1.342.843-2.718 1.26-4.079l-.019-.016-.122.006c-.75.527-1.463 1.117-2.257 1.565-.956.54-1.98.959-2.975 1.431l-.029.052-.023-.023.052-.028.167-.59.767-2.929c-.307-.018-.436.041-.562.104-2.146 1.086-4.256 2.251-6.445 3.24-3 1.356-5.807 3-8.361 5.074-.863.701-1.688 1.448-2.548 2.189l-.195-.136c-.847-.76-1.69-1.525-2.539-2.283-.532-.476-1.072-.941-1.608-1.413 1.849-2.37 3.333-4.953 4.229-7.822.577-1.848.939-3.763 1.397-5.649l.528-.159c1.439-.516 2.903-.943 4.451-.839.667.045 1.325.236 1.987.361l-.5-1.121-.05-.059.035.01.018.046c.12.024.249.028.357.077 1.15.52 2.272 1.106 3.447 1.559 1.929.742 3.939 1.094 6.018.99.279-.014.478-.039.262-.376.198.052.401.088.592.16 1.534.579 3.131.865 4.752.686 1.493-.165 2.698-.907 3.365-2.371l.475.222c.411-1.152.049-2.229-.161-3.319-.036-.188-.036-.467.075-.585.402-.433.858-.816 1.316-1.238l.281.645c.642-1.068.658-2.241.735-3.546l.618.76.241-.096c-.193-.949-.209-1.983-.622-2.825-.576-1.176-.609-2.122.164-3.21.458-.644.65-1.477 1.054-2.446.074.199.093.312.154.394.048.064.148.089.261.151-.057-1.719-.838-3.115-1.708-4.6z"
    />
  </svg>
)

export default SvgFoundationPlain
