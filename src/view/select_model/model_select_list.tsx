import React from 'react'
import {Link} from "react-router-dom";

interface IProps {
  dataList: {
    name: string
    id: string
  }[]
}

const ModelSelectList: React.FC<IProps> = ({
  dataList,
}) => {

  return <div className="flex flex-wrap justify-between mt-4 ">
    {dataList.map(({id, name}) => 
      <Link
        key={id}
        to={`/model_detail/${id}`}
        style={{color: '#3D3F58 '}}
        className="flex items-center bg-white rounded-lg text-center text-lg mb-4 shadow-md w-5/12 h-16 px-7 justify-center leading-6 font-semibold"
      >
        {name} 
      </Link>
      )}
  </div>
}

export default ModelSelectList
