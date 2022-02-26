import React, {useEffect} from 'react'
import GoodweIcon from '../download_list/goodwe.png'
import ModelSelectList from './model_select_list'

interface IProps {
}

const SelectModel: React.FC<IProps> = () => {

  useEffect(() => {
    document.title = 'Select Model'
  }, [])

  return <div className="bg-blue-50 min-h-screen p-5">
    <div className="flex items-center text-gray-500 text-sm">
      <img
        alt={''}
        src={GoodweIcon}
        className="w-5 h-auto mr-3"
      />
      Grid-Connected Inverters
    </div>
    <ModelSelectList
      dataList={[
        {id: '0', name: 'DNS'},
        {id: '1', name: 'HT'},
        {id: '2', name: 'MS'},
        {id: '3', name: 'MT'},
        {id: '4', name: 'SDT G2 LCD'},
        {id: '5', name: 'SDT G2 LED'},
        {id: '6', name: 'SMT'},
        {id: '7', name: 'XS'},
      ]}
    />
    <div className="flex items-center text-gray-500 text-sm mt-10">
      <img
        alt={''}
        src={GoodweIcon}
        className="w-5 h-auto mr-3"
      />
      Energy Storage Inverters
    </div>
    <ModelSelectList
      dataList={[
        {id: '0', name: 'DNS'},
        {id: '1', name: 'HT'},
        {id: '2', name: 'MS'},
        {id: '3', name: 'MT'},
        {id: '4', name: 'SDT G2 LCD'},
        {id: '5', name: 'SDT G2 LED'},
        {id: '6', name: 'SMT'},
        {id: '7', name: 'XS'},
      ]}
    />
  </div>
}

export default SelectModel
