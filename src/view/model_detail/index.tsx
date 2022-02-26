import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import GoodweIcon from '../download_list/goodwe.png'

const ModelDetail = () => {
  const {id} = useParams()
  console.log({id})

  useEffect(() => {
    document.title = 'xxx Series'
  }, [])

  return <div className="bg-blue-50 min-h-screen absolute inset-0">
    <img
      alt={''}
      src={GoodweIcon}
      className="w-screen h-auto mt-10"
    />
  </div>
}

export default ModelDetail
