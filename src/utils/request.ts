import {get} from 'lodash'
import {
    POST,
    PUT,
    PATCH,
    DELETE,
    FETCH_TIMEOUT,
    CONTENT_TYPE,
    CONTENT_TYPE_FORM_URLENCODED,
} from '../common'
import {
    FETCH_HAS_TIMEOUT,
} from '../common/error_msg'
import {
  objectToUrlEncoded,
} from './index'

const {fetch} = window

export const restfulFetch = async ({
  url = '',
  data = {},
  headers = {},
  method = POST,
  /**
   * Set fetch body of form(default: json string)
   */
  useFormData = false,
  /**
   * Set content type
   */
  contentType = '',
  /**
   * Timeout for fetch
   */
  timeout = FETCH_TIMEOUT,
  /**
   * Return fetch data immediately before JSON.parse
   */
  handleJsonResponseOutside = false,
}) => {

    if (useFormData) {
        if (contentType !== CONTENT_TYPE_FORM_URLENCODED) {
          //  @ts-ignore
          delete headers[CONTENT_TYPE]
        }
    }
    // 默认token
    //  @ts-ignore
    headers.token = JSON.stringify({
      "uid": "","timestamp": 0,"token": "","client": "android","version": "","language": "zh"
    })
    const fetchOption: any = {
        method,
        headers,
    }
    if (method === POST || method === PUT || method === PATCH || method === DELETE) {
        if (useFormData) {
            if (contentType === CONTENT_TYPE_FORM_URLENCODED) {
                fetchOption.body = objectToUrlEncoded(data)
            } else {
                const formData = new window.FormData()
                for (let key of Object.keys(data)) {
                  //  @ts-ignore
                  formData.append(key, data[key])
                }
                fetchOption.body = formData
            }
        } else {
            fetchOption.body = JSON.stringify(data)
        }
    }

    try {
        let fetchPromise = fetch(url, fetchOption)
        if (timeout !== 0) {
            const timeoutPromise: Promise<Response> = new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject(new Error(FETCH_HAS_TIMEOUT))
                }, FETCH_TIMEOUT)
            })
            fetchPromise = Promise.race([timeoutPromise, fetchPromise])
        }

        const res = await fetchPromise
        const resData = get(res, ['data'])
        const response = get(res, ['response'])
        const {
          status,
        } = response
        const message = get(resData, 'msg') || resData?.Message || ''
        if (status === 400) {
          throw new Error(message)
        } else if (status === 401) {
          // setTimeout(() => {
          //   logout()
          // }, 1000)
          return resData
        } else if (status === 200) {
          const {code, msg, data: resDatadata, info} = resData
          if (code === 0) {
            return resData
          }
          if (code === 100002) {
            throw new Error(message)
          }

          const error = new Error(message)
          error.code = code
          error.data = resDatadata
          error.info = info
          throw error
        }
        if (handleJsonResponseOutside) {
            return res
        }
        throw new Error(message)
    } finally {
    }
}

export default restfulFetch
