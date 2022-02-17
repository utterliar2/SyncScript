/*

> 应用名称：咿啦看书
> 软件版本：2.8.5
> 下载地址：https://apps.apple.com/cn/app/id1176775033
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 更新时间：2022-02-17
> 通知频道：https://t.me/ddgksf2021
> 问题反馈：https://t.me/ddgksf2013_bot

[rewrite_local]

# ～ 咿啦看书解锁会员权限（2022-02-17）@ddgksf2013
https?:\/\/bookapi\.ellabook\.cn\/rest\/api\/service$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/elabook.js

[mitm] 

hostname=bookapi.ellabook.cn

*/





body = $response.body.replace(/ip":"NO"/g, "ip\":\"YES\"")
                     .replace(/ip":"VIP_NO"/g, "ip\":\"VIP_YES\"")
                     .replace(/code":"\d{10}/g, "code\":\"0x00000000")
                     .replace(/status":"\d/g, "status\":\"1");
$done({body});
