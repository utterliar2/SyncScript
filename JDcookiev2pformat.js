/*
此文件为Node.js专用。其他用户请忽略，使用V2P函数$store处理进度cookie,并存储一个cookie值作为V2P执行的环境变量JD_COOKIE
 */
//此处填写京东账号cookie。
let CookiesJD = $store.get('CookiesJD', 'array')
let CookieJD = $store.get('CookieJD', 'string')
let CookieJD2 = $store.get('CookieJD2', 'string')

const CookiesJDList = CookiesJD.map(item => item.cookie)
CookiesJDList.unshift(CookieJD2);
CookiesJDList.unshift(CookieJD);
let CookieJDs = CookiesJDList.join("&");

//保存数据
$store.put(CookieJDs,CookiesJDV2P,'string')
