import React from 'react'
import {RightOutline} from 'antd-mobile-icons'

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
      className="flex items-center p-3 bg-white rounded-md text-slate-400 mb-2 shadow-md shadow-slate-200"
      href={href}  
    >
      <img
        alt={text}
        src={icon}
        className="w-4 h-4"
      />
      <div
        className="text-center flex-1 font-bold"
      >
        {text}
      </div> 
      <RightOutline fontSize={18} color='#969696'/>
    </a>
    <p className="text-sm mb-4 font-bold text-gray-400">
      {info}
    </p>
  </div>
}

export default HrefAndInfo
