import React from 'react'
import ArrowIcon from './img/arrow.png'

interface IProps {
  icon: string
  text: string
  href: string
  info: string
}

const HrefAndInfo: React.FC<IProps> = ({
  icon,
  text,
  href,
  info,
}) => {


  return <div>
    <a
      className="flex items-center px-3 bg-white rounded-md text-slate-400 h-14 mb-2 shadow-md shadow-slate-200"
      href={href}  
    >
      <img
        alt={text}
        src={icon}
        className="w-8 h-8"
      />
      <div
        className="text-center flex-1 font-bold"
      >
        {text}
      </div>
      <img
        src={ArrowIcon}
        alt='arrow'
        width={8}
      />
      {/* <RightOutline fontSize={18} color='#969696'/> */}
    </a>
    <p className="text-xs mb-3 font-bold" style={{color: 'rgba(119, 140, 162, 0.6)'}}>
      {info}
    </p>
  </div>
}

export default HrefAndInfo
