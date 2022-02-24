/**
 * 将对象转换为URLEncoded字符串
 * @param obj
 * @returns {string}
 */
 export function objectToUrlEncoded (obj: {[key: string]: any}) {
  var str = []
  const keys = Object.keys(obj)
  for (const key of keys) {
      str.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
  }
  return str.join('&')
}
