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

export const getUrlQueryString = (name: string) => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
      return decodeURIComponent(r[2]);
  };
  return null;
}
