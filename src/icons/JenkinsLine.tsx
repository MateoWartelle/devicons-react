import * as React from 'react'
import { SVGProps } from 'react'

const SvgJenkinsLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <g fill="#1f1f1f">
      <path d="M65.125 127.8c-2.413-.225-5.338-.725-6.787-1.175l-.813-.25-.775-2.163c-.425-1.174-1.25-3.75-1.837-5.712-.588-1.962-1.188-3.987-1.338-4.5l-.287-.938-.925.038c-1.713.075-4.2-.362-6.175-1.087-1.463-.538-2.738-1.1-5.188-2.313-1.2-.588-2.85-1.338-3.65-1.65-2.862-1.125-2.95-1.263-3.112-5.275-.05-1.563-.138-3.3-.188-3.863l-.087-1.037-1.213-1.125c-1.462-1.35-3.625-3.725-5.025-5.513-6.037-7.75-9.575-17.412-9.95-27.137-.262-6.813.625-12.613 2.925-18.925 2.463-6.813 6.988-13.563 12.35-18.425l1.538-1.388.075-1.087c.162-2.25.8-4.625 1.6-5.988.537-.912 1.637-2.012 2.4-2.412.512-.275.612-.388.775-.938.275-.95 1.087-2.537 1.737-3.4 1.038-1.375 3.075-3.025 5.388-4.375 2.262-1.312 5.362-3.012 6.375-3.487 1.887-.9 6.762-2.65 6.912-2.488.038.038.125.013.2-.05C60.463.8 64.275.275 67 .175c6.113-.225 12.175 1.212 15.95 3.762 2.663 1.825 6.513 5.725 8.488 8.625 2 2.925 3.287 7.55 3.887 13.875l.075.875 1.463 1.513c1.437 1.475 3.212 3.612 4.475 5.387.862 1.2 2.412 3.675 2.412 3.863 0 .087.05.175.1.2.25.087 2.688 5.062 2.825 5.725.025.1.15.45.288.762.15.313.487 1.275.762 2.125 2.813 8.638 3.15 17.913.963 26.638-.825 3.3-1.85 6.112-3.338 9.225-.462.987-.9 1.837-.95 1.875-.05.037-.237.362-.425.712l-.35.663.513.25c1.287.662 2.137 2.075 3.325 5.562.987 2.888 1.3 4.188 1.375 5.625.15 3.025-.888 6.263-2.513 7.888-.65.637-.887.787-1.637 1.012a14.24 14.24 0 0 1-1.75.413c-1.263.212-4.075.175-5.65-.063-1.475-.237-1.788-.412-2.238-1.275l-.237-.437-1.75.075c-1.738.062-2.613.225-3.95.712l-.713.263-.075.625c-.112.787-.512 1.225-1.425 1.55-.575.2-.662.287-.725.65-.175.912.05 2.962.55 5.213.65 2.837.75 3.9.475 4.85-.362 1.237-1.337 1.9-3.575 2.4l-1.187.262-.038.438c-.025.237.013.95.088 1.6.137 1.15.137 1.174-.175 1.712-1.113 1.9-3.638 2.425-12 2.487-2.538.013-4.875.013-5.188-.012zm7.287-2.438c.325-.074.85-.112 1.15-.074.313.024.563.012.563-.05 0-.063.237-.113.537-.113 1.288 0 5.563-.912 5.675-1.212.038-.088-.025-.75-.137-1.45-.313-1.976-.438-3.638-.638-8.9-.1-2.676-.275-5.826-.375-7-.1-1.163-.3-4.238-.437-6.813-.288-5.413-.438-6.838-.738-6.925-.112-.038-.762-.15-1.45-.25-5.287-.8-13.3-.475-21.375.862-2.587.425-2.4.363-2.462.888-.025.237-.013.462.025.487.112.075.412 2.888.325 3.038-.038.075-.025.15.05.175.062.012.15.4.175.85.025.45.1.912.137 1.037.05.113.063.35.038.525-.038.163-.025.325.012.338.125.05.663 3.712.575 3.85-.037.075-.012.125.05.125.075 0 .138.125.138.275 0 .337.637 3.712 1.137 6.012.2.95.338 1.775.3 1.85-.05.063-.025.113.038.113.062 0 .237.575.4 1.287.35 1.575 1.475 5.613 2.137 7.738l.5 1.6.65.187c1.075.313 3.338.8 4.438.963.562.087 1.025.175 1.025.225 0 .037.412.075.9.087.5.025 1 .075 1.1.113.1.05.625.075 1.15.062.525-.025 1.038.013 1.125.063.087.062.563.087 1.038.075.487-.013.962.025 1.062.087.1.075.275.113.375.075.1-.025.463-.112.787-.2zm9.913-6.237c.55-.075 1.4-.263 1.875-.425l.862-.287-.012-1.3c-.013-1.288-.15-2.288-.738-5.113-.162-.787-.35-1.85-.437-2.337l-.15-.913h-.463c-.25 0-.787.088-1.175.188-.4.1-.9.187-1.112.187h-.388l.075 2.475c.125 4.175.363 7.65.513 7.65.087 0 .6-.062 1.15-.125zm-28.7-8.988c0-.187-.225-1.962-.5-3.95-.675-4.837-1.113-8.5-1.213-9.912-.037-.637-.125-1.188-.187-1.225-.05-.037-.1-.275-.1-.55 0-.475-.013-.475-.65-.625-.475-.125-1.275-.137-2.938-.075-2.162.075-2.287.075-2.287-.137 0-.4.375-.775.912-.925 1.188-.313 1.6-.513 1.725-.825.15-.4.025-.9-.325-1.288-.15-.175-.35-.437-.425-.587-.162-.313-.187-.788-.037-.788.062 0 .625.325 1.25.738 1.387.887 1.862 1.1 2.05.912.2-.2.462-1.475.55-2.65.05-.625-.013-2-.125-3.313-.325-3.662-.238-5.262.312-5.762.288-.263.613-.15.613.237 0 .163.062.35.137.425.125.125-.037 3.75-.212 4.538-.038.162-.063 1.412-.063 2.775.013 2.362.1 3.237.413 4.012l.137.35 1.013-.075c.562-.037 1.937-.187 3.075-.312 1.137-.138 2.425-.275 2.875-.3.45-.038 1.625-.15 2.625-.25s1.9-.175 2-.175c.1 0 1.038-.063 2.063-.138 1.487-.112 6.674-.387 7.412-.387.338 0 .125-.338-.313-.488-1.825-.65-8.25-3.762-9.35-4.512-1.112-.763-1.15-1.6-.137-2.975.675-.9.95-1.425.95-1.775 0-.313-.075-.313-.813.012-1.25.55-2.137.075-2.937-1.55-.537-1.112-1.988-5.987-2.263-7.6l-.15-.95-2.975-1.475c-4.7-2.324-5.887-3.162-8.025-5.624-.537-.613-1.175-1.276-1.412-1.463l-.438-.325-1.1.475C41.1 63.212 37.35 65.5 32.537 69.1L30 70.987l.375.826c.2.45.337.812.3.812-.025 0 .025.125.125.287.775 1.2 2.675 7.288 3.637 11.663.425 1.937 1.088 5.562 1.05 5.762-.012.05.013.2.075.325.05.113.063.35.038.525-.038.163-.025.326.012.338.2.087.838 6.7.95 9.787.113 2.776.126 2.888.576 3.076.212.074.45.212.525.3.225.212 4.737 2.562 6.475 3.374 2.712 1.25 5.912 2.213 8.05 2.4.412.038.762.076.787.1.013.013.175 0 .338-.037.237-.037.312-.138.312-.388zM83 106.688c2.537-.45 2.3-.287 2.212-1.424-.05-.526-.162-2.05-.275-3.388-.287-3.688-.562-6.412-.687-6.688a8.629 8.629 0 0 1-.238-1c-.075-.412-.2-.974-.275-1.237l-.137-.487-1.2.075c-.675.037-1.55.15-1.95.237l-.738.163.088 3.25c.075 2.974.35 8.124.525 10.037.075.775.075.775.475.775.212 0 1.212-.138 2.2-.313zm17.75-1.462c0-.063.187-.1.412-.1.588 0 2.013-.325 2.538-.575 1.687-.8 2.925-3.063 2.925-5.35 0-1.913-1.563-8.025-2.425-9.5-.625-1.075-2.013-1.938-3.113-1.95-.462 0-.85.138-1.812.613-.663.324-2.138.924-3.275 1.312-2.388.838-3.938 1.55-4.438 2.075l-.35.362.263 1.163c.387 1.675.625 3.262.962 6.662.175 1.65.313 3.05.313 3.113 0 .075 1.037.075 2.6 0 1.425-.063 3.175-.113 3.9-.1 1.4 0 2.925.25 2.612.425-.1.05-1.075.275-2.175.5-1.1.212-2.25.512-2.562.65l-.563.25.375.175c.213.087.5.162.65.175.15 0 .3.037.325.1.038.05.688.087 1.45.087.763 0 1.388-.037 1.388-.087zm-11.938-.975c.275-.037.913-.212 1.413-.375l.9-.3v-1.438c0-1.387-.35-4.724-.638-5.987-.237-1.125-.637-2.337-1.012-3.175l-.388-.85h-2.712v.35c0 .413.237 2.213.7 5.188.175 1.162.287 2.137.25 2.175-.038.05-.013.15.062.237s.163.575.2 1.075c.025.5.125 1.462.2 2.138.113 1.037.163 1.212.325 1.137.113-.05.426-.125.7-.175zM33.45 92.162c-.588-4.625-1.275-7.462-2.638-10.975-.812-2.1-2.45-6.637-2.937-8.124-.275-.838-.425-1.6-.463-2.313-.112-1.775.3-2.3 2.763-3.575a28.486 28.486 0 0 0 2.7-1.613c1.437-.987 3.312-2.124 6.562-4 3.85-2.224 4.5-2.612 4.925-3.012.388-.35.425-.45.413-1-.013-.75-.2-1.212-1.025-2.538-.988-1.587-1.625-3.35-1.85-5.062l-.088-.725-.937-.288c-1.738-.512-2.775-1.125-3.988-2.325-3.5-3.487-4.762-11.312-2.387-14.787.425-.625.5-.825.5-1.375 0-.85-.125-1.575-.275-1.575-.063 0-.7.587-1.413 1.3a44.745 44.745 0 0 0-11.937 22.187c-.738 3.475-.925 5.338-.925 9.388-.013 3.75.062 4.725.562 7.812 1.175 7.1 4.3 14.238 8.763 19.975 1.125 1.45 3.725 4.375 3.812 4.288.038-.025-.025-.775-.137-1.663zm49.237-2.437c.213-.063 1.363-.163 2.563-.225 2.612-.138 3.612-.362 4.075-.9.45-.55.637-.95 1.925-4.162 2.6-6.513 4.75-14 4.75-16.576 0-1.5-.275-1.912-2.5-3.7-.513-.412-2.025-1.8-3.363-3.087-1.325-1.275-2.462-2.325-2.512-2.325-.05 0-.338.237-.638.537-.3.288-1 .888-1.537 1.338-.55.45-1.013.875-1.038.962-.05.15.263.15.413 0 .05-.05.387-.087.737-.087.525 0 .75.075 1.15.362.513.375 1.113 1.1 1 1.213-.037.037.1.425.288.85 1.025 2.25 1.112 7.037.175 9.275-.1.225-.175.537-.175.7 0 .325.55 1.162 1.025 1.575.187.15.375.4.412.537.1.3-.675 1.688-4.062 7.238-3.1 5.087-4 6.612-4 6.825 0 .15.075.15.475-.025.25-.113.637-.25.837-.325zM78 88.513c0-.188-2.363-5.65-3.125-7.2-1.213-2.5-3.05-5.35-3.363-5.238-.087.025-.875.55-1.737 1.15-2.55 1.762-3.875 3.25-4.463 5.013-.112.362-.187.674-.175.687.213.175 3.538 1.913 4.95 2.575.975.463 1.738.887 1.688.938-.05.062-.025.062.05.024.087-.05.7.15 1.375.438 1.137.475 4.487 1.7 4.712 1.712.05.013.088-.037.088-.1zm3.9-1.388c1.262-1.775 2.175-3.225 4.437-7.05 1.488-2.538 1.875-3.288 1.788-3.463-.263-.475-1.35-1.425-2-1.725-.575-.275-.863-.325-1.75-.325-.7 0-1.188.063-1.438.188l-.375.187-.15 2.313c-.262 4.212-.712 7.6-1.35 10.05-.175.662-.312 1.237-.312 1.287 0 .125.112-.025 1.15-1.462zm11.487.612c2.65-1.2 4.925-1.925 6.888-2.175l.587-.075.638-1.112c7.275-12.713 7.9-28.688 1.625-41.825-1.925-4.038-4.088-7.3-7.175-10.85l-.425-.5-.063.812c-.037.438-.124 1.763-.2 2.925-.287 4.6-1.2 9.338-2.662 13.875-.5 1.538-.725 2.038-2.4 5.225-.863 1.65-.887 1.963-.212 2.8.512.65.862.975 4.762 4.375 3.388 2.963 3.75 3.45 3.75 5.038a10.689 10.689 0 0 1-.237 1.875c-.6 2.437-4.9 15.8-6.238 19.35-.212.562-.362 1.025-.35 1.025.025 0 .788-.338 1.713-.763zm-13.15-.825c.513-2.112.763-4.462.95-8.6.038-.887.1-2.05.138-2.575l.075-.937-.7-.163c-.438-.1-1.075-.4-1.75-.837-1.363-.888-1.65-.938-2.838-.425-.7.287-1.075.387-1.537.362-.588-.037-.638-.012-1.075.5l-.463.538.663.937c.375.525.987 1.5 1.375 2.163.687 1.225 2.5 5.137 2.575 5.575.025.137.075.262.112.3.113.1 1.638 3.412 1.65 3.6 0 .075.063.15.125.15.075 0 .1.037.05.075-.075.075.163.412.3.425.05 0 .2-.488.35-1.088zm-15.05-8.975c2.263-.775 3.588-1.55 5.813-3.4a52.04 52.04 0 0 1 1.65-1.35c.287-.225.337-.35.375-1.125l.037-.875-.75-.3a9.093 9.093 0 0 0-1.625-.437c-.475-.088-.812-.188-.737-.225.062-.05.587-.2 1.175-.35 1.425-.362 1.75-.55 1.75-.975 0-.325-.05-.362-.738-.5-.45-.1-1.112-.388-1.762-.775-2.95-1.775-7.438-3.325-8.65-2.987-1.2.324-1.625 1.624-1.613 4.924.013 2.513.188 3.376 1.325 6.463.975 2.612.8 2.388 1.863 2.313.487-.025 1.337-.213 1.887-.4zM86.9 72.975c.412-.788.512-1.55.437-3.325-.125-2.85-.737-5.088-1.55-5.613-.512-.337-1.55-.275-2.6.175-.487.2-1.662.875-2.625 1.488-.962.625-1.887 1.212-2.062 1.3-.175.087-.325.175-.35.187-.013.013.087.4.237.838l.263.825.775-.063c.463-.037.988.013 1.325.125l.563.175-.75.1c-.413.05-.95.175-1.213.275-.525.213-.6.45-.55 1.9.037 1.1-.188.963 2.45 1.45 1.563.288 3.5.5 4.875.55.525.013.588-.025.775-.387zm-10.475-1.338c1.162-.65 1.062-2.887-.15-3.462-.513-.238-1.288-.175-1.875.162-.288.163-.388.325-.438.663-.05.462.325 2.6.5 2.762.275.263 1.4.2 1.963-.125zm-17.888-4.862c.288-1.338.275-1.625-.062-1.713a70.165 70.165 0 0 0-2.3-.237c-1.35-.125-2.25-.275-2.75-.45-1.125-.4-1.225-.4-1.275.137-.025.375.037.525.35.85.75.75 2.637 1.638 4.562 2.138 1.3.35 1.238.387 1.475-.725zm19.375-1.35c.838-.663 1.6-1.238 1.675-1.263.088-.037.163-.1.163-.162 0-.125-1.113.062-3.063.5-2.425.562-3.625.687-4.712.5-1.725-.288-1.9-.175-.85.525 1.15.762 2.325 1.087 3.912 1.1h1.338l1.537-1.2zM59.85 63.312c.75-.762 2.075-1 4.275-.775.637.063.85.05.65-.037-2.375-1.025-7.688-6.438-9.125-9.325-.413-.813-.825-2.1-.75-2.325.025-.075.575.587 1.225 1.475 4.15 5.687 7.512 8.462 12.187 10.025 2.75.912 5.888.787 9.426-.413 2.7-.9 6.15-2.912 7.387-4.287.863-.95 3.475-4.85 4.325-6.45 1.925-3.65 3.237-7.95 3.938-12.888.324-2.337.45-7.412.25-10.812-.326-5.613-.776-7.288-2.45-8.95-1.888-1.875-4.45-2.525-6.288-1.6-.325.162-.6.3-.613.3-.124 0 0-.85.163-1.2.637-1.35 2.362-1.988 4.338-1.625l.612.112-.175-.325c-.325-.625-3.387-4.35-4.387-5.35-1.338-1.325-2.175-1.95-3.675-2.712-3.075-1.575-6.838-2.738-10.2-3.15-1.55-.2-5.325-.088-6.488.175-1.95.45-4.875 1.912-8.037 4.012-3.513 2.338-5.713 4.5-7 6.85l-.463.838.313 1.162c.625 2.238.575 3.325-.363 7.925-.512 2.513-.587 3.05-.6 4.538 0 1.587.025 1.825.525 3.825.638 2.612.725 3.175.525 3.537-.262.5-1.362.9-2.675.975l-1.162.075-.288-1.162c-.712-2.888-2.05-4.25-4.137-4.25-2.5 0-4.588 1.587-5.438 4.125-.287.85-.312 2.6-.062 3.75.25 1.125.987 2.925 1.575 3.812 1.087 1.663 2.687 2.825 4.125 3 1.175.15 1.687 0 2.812-.812.9-.65 1.663-1 1.825-.838.138.138.163 1 .025 1.25-.075.15-.462.638-.862 1.075-.85.925-.95 1.25-.738 2.538.5 2.987 2.463 7.962 4.138 10.425 1.05 1.562 2.4 2.487 4.525 3.1 1.362.4 3.9.762 5.65.8.7.025.775 0 1.162-.413zm-13.975-31.85c0-.025-.238-.262-.525-.525l-.538-.5.5.538c.45.487.563.587.563.487zm-4.588-2.3a2.611 2.611 0 0 0-.625 0c-.2.025-.062.05.275.05.35 0 .5-.025.35-.05z" />
      <path d="m96.438 98.875-1.25-.063.5-.25a3.142 3.142 0 0 1 1.1-.237c.324-.013.587-.05.587-.1 0-.137 1.1-.125 1.175.013.037.062.338.075.65.037.45-.05.563-.025.487.1-.062.113-.024.125.163.075.237-.075 2.525.375 2.525.5 0 .075-4.388.013-5.938-.075zm-.888-3.237c.275-.3 1.5-.688 1.887-.588.163.037.338.025.376-.05.087-.138.724-.175.837-.05.037.037.425.087.863.113.437.024 1.112.112 1.487.2l.688.162-.626.087c-1.187.188-3.5.363-4.612.363-1.087 0-1.113-.013-.9-.237zm-1.337-1.675c.975-1.25 3.012-2.2 5.1-2.4l.75-.063-.5.237c-.276.126-1.163.626-1.976 1.113-1.462.875-2.174 1.175-3.137 1.35l-.5.087.263-.325zM78.487 81.775c-.574-.475-.212-1.525.538-1.525.762 0 1.137.975.575 1.5-.338.313-.738.325-1.113.025zm-.962-4.4a.922.922 0 0 1-.275-.613c0-.412.463-.887.863-.887.35 0 .887.525.887.875s-.537.875-.912.875c-.163 0-.413-.113-.563-.25zm-3.8-21.925c-2.087-.475-3-1.175-4.713-3.575a22.102 22.102 0 0 0-1.337-1.65c-.375-.388-.675-.762-.675-.85 0-.15.512-.375.85-.375.137 0 .35.275.587.725.988 1.9 3.038 3.038 6.275 3.462.95.126 2.513.188 4.738.188h3.312l-.4.575c-.45.662-1.175 1.05-2.55 1.363-1.187.274-5.1.362-6.087.137zm4.65-4.9c-3.6-.25-6.912-1.363-8.387-2.837-.376-.376-.776-.863-.9-1.076l-.226-.387.55.237c1.663.713 4.475 1.125 8.475 1.225l2.963.075.075.45c.037.25.075.888.075 1.425v.963l-1.025-.025a116.59 116.59 0 0 1-1.6-.05zm3.9-1.55.037-1.413 1.163-.237c1.462-.287 2.612-.75 4.838-1.925.974-.512 1.812-.925 1.85-.925.112 0-.576 1.15-1.238 2.075-.662.95-2.112 2.3-2.975 2.788-.825.475-2 .85-2.962.962l-.75.088.037-1.413zm-6.625-3.562c-.5-.613-.775-1.426-.775-2.276 0-.637.3-1.662.5-1.662.05 0 .212.475.362 1.05.213.775.376 1.137.65 1.4.376.362.388.362 1.963.362 1.45-.012 1.688-.037 2.713-.4.625-.225 2.05-.825 3.187-1.337 2.275-1.05 2.438-1.188 2.588-2.438.1-.862-.25-1.537-1.563-3.05-3.087-3.562-4.387-5.425-5.337-7.687-.738-1.762-1.063-3.938-.613-4.112.263-.1.513.237.675.9.538 2.137 3.963 6.974 7.475 10.562.838.863 1.563 1.7 1.613 1.85.037.163-.05.7-.213 1.188-.15.5-.338 1.175-.412 1.5-.138.587-.163.612-1.538 1.462-3.525 2.163-5.812 2.95-9.062 3.087l-1.813.075-.4-.474zm-35.7-4.463c-.6-1.262-.713-3.212-.25-4.537.287-.838.25-.938-.35-.938-.425 0-.613.075-.95.412-.412.388-.425.388-.338.088.176-.625.713-1.387 1.188-1.7.637-.425 1.313-.5 2.1-.25 1.775.588 3.025 2.462 3.025 4.525 0 .6-.037.812-.15.775-.087-.025-.463-.613-.813-1.3-.774-1.462-1-1.675-1.724-1.675-.438 0-.6.063-.788.313-.4.5-.575 1.5-.575 3.274-.013.913-.025 1.663-.038 1.663-.012 0-.162-.3-.337-.65zm27.738-7.8c-1.976-.487-2.726-1.188-2.313-2.188.188-.425.338-.45 1.875-.175 1.55.275 2.8.25 3.462-.075.3-.137.538-.325.538-.4 0-.087-.188-.462-.412-.837-1.038-1.738-1.788-3.663-1.925-4.875-.088-.938.075-.963.462-.087 1.263 2.837 1.463 3.187 2.488 4.262 1.062 1.137 1.25 1.538 1.087 2.4-.112.55-.912 1.363-1.7 1.712-.437.2-.875.263-1.937.288-.75.025-1.488.013-1.625-.025zm19.849-1.312c-.537-.163-1.137-.788-1.237-1.3-.125-.7-.1-.713 2.275-.938 1.45-.138 2.175-.313 2.175-.525 0-.075-.225-.725-.5-1.462-.65-1.738-.875-2.663-.875-3.513l.013-.687 1.174 2.4c.638 1.325 1.376 2.75 1.626 3.15.362.6.424.8.324 1-.337.625-1.8 1.475-3.1 1.812-.837.225-1.274.237-1.874.063zM57.7 22.6c-.438-.613-.063-2.275.762-3.513 1.476-2.187 3.9-3.75 5.8-3.737 1.388.013 2.738 1.213 2.388 2.138-.1.287-.138.287-1.85.312-1.662.013-1.775.025-2.55.4-1.487.713-2.6 1.85-3.65 3.763-.275.5-.55.912-.6.912-.062 0-.2-.125-.3-.275z" />
    </g>
  </svg>
)

export default SvgJenkinsLine
