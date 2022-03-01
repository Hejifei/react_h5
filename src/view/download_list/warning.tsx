import {useEffect} from 'react'
import GoodweIcon from './goodwe.png'
import restfulFetch from '@/utils/request'

const WarningPage = () => {
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
    <img
      alt=''
      src={GoodweIcon}
      className="w-screen h-auto mt-10"
      />

    <img
      alt=''
      src={GoodweIcon}
      className="w-screen h-auto mt-5 mb-10 rounded-lg"
    />
  </div>
}

export default WarningPage
