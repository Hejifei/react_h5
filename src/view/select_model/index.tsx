import React, {useEffect} from 'react'
import ModelSelectList from './model_select_list'
import EnginvIcon from './img/enginv.png'
import GridinvIcon from './img/gridinv.png'

interface IProps {
}

const SelectModel: React.FC<IProps> = () => {

  useEffect(() => {
    document.title = 'Select Model'
  }, [])

  return <div className="bg-blue-50 min-h-screen p-5">
    <div className="flex items-center text-gray-500 text-xs">
      <img
        alt={''}
        src={GridinvIcon}
        className="w-4 h-auto mr-2"
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
    <div className="flex items-center text-gray-500 text-xs mt-10">
      <img
        alt={''}
        src={EnginvIcon}
        className="w-4 h-auto mr-2"
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
