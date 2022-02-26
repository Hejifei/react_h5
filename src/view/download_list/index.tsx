import React from 'react'
import HrefAndInfo from './href_and_info'
import GoodweIcon from './goodwe.png'
import {Link} from "react-router-dom";
import {RightOutline, TextOutline} from 'antd-mobile-icons'

const DownloadList = () => {

  return <div className="bg-blue-50 min-h-screen p-5">
    <HrefAndInfo
      icon={GoodweIcon}
      text={'Download Soloar Go'}
      href={'#'}
      info={'介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位'}
    />
    <HrefAndInfo
      icon={GoodweIcon}
      text={'Download Soloar Master'}
      href={'#'}
      info={'介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位'}
    />
    <HrefAndInfo
      icon={GoodweIcon}
      text={'Download Soloar Portal'}
      href={'#'}
      info={'介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位'}
    />
    <Link
      to={'/select_model'}
      className="relative flex items-center px-3 py-7 bg-white rounded-md text-slate-400 mb-2 shadow-md"
    >
      <TextOutline
        fontSize={26}
        color='#969696'
        className="absolute top-2 left-2"
      />
      <div
        className="text-center flex-1 text-3xl text-rose-500"
      >
        LED Manual
      </div> 
      <RightOutline fontSize={18} color='#969696'/>
    </Link>

    <img
      src={GoodweIcon}
      className="w-screen h-auto mt-10"
    />

    <img
      src={GoodweIcon}
      className="w-screen h-auto mt-5 mb-10 rounded-lg"
    />
  </div>
}

export default DownloadList
