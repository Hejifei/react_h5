import React, {useEffect} from 'react'
import HrefAndInfo from './href_and_info'
import GoodweIcon from './goodwe.png'
import SoloarGoIcon from './img/solargo.png'
import PvMasterGoIcon from './img/pvmaster.png'
import SemsPortalIcon from './img/semsportal.png'
import ManualIcon from './img/icon_manual.png'
import Arrow2Icon from './img/arrow2.png'
import {Link} from "react-router-dom"
import restfulFetch from '@/utils/request'

const DownloadList = () => {
  useEffect(() => {
    const getInitData = async () => {
      await restfulFetch({
        url: '/api/Account/CrossLogin',
        data: {
          account: "18013488032",
          password: "gooodwefanfan66",
        }
      })
    }
    getInitData()

  }, [])

  return <div className="bg-blue-50 min-h-screen p-4">
    <HrefAndInfo
      icon={SoloarGoIcon}
      text={'Soloar Go'}
      href={'#'}
      info={'介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位'}
    />
    <HrefAndInfo
      icon={PvMasterGoIcon}
      text={'Soloar Master'}
      href={'#'}
      info={'介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位'}
    />
    <HrefAndInfo
      icon={SemsPortalIcon}
      text={'Soloar Portal'}
      href={'#'}
      info={'介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位介绍文案占位'}
    />
    <Link
      to={'/select_model'}
      className="relative flex items-center px-3 py-8 bg-white rounded-md text-slate-400 mb-2 shadow-md"
    >
      {/* <TextOutline
        fontSize={26}
        color='#969696'
        className="absolute top-2 left-2"
      /> */}
      <img
        alt={'manual_icon'}
        src={ManualIcon}
        width={20}
        className="absolute top-2 left-2"
      />
      <div
        className="text-center flex-1 text-3xl"
        style={{color: '#36485C'}}
      >
        LED Manual
      </div> 
      {/* <RightOutline fontSize={18} color='#969696'/> */}
      <img
        alt={'arrow'}
        src={Arrow2Icon}
        width={20}
      />

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
