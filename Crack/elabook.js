/*

*/

body = $response.body.replace(/ip":"NO"/g, "ip\":\"YES\"")
                     .replace(/ip":"VIP_NO"/g, "ip\":\"VIP_YES\"")
                     .replace(/code":"\d{10}/g, "code\":\"0x00000000")
                     .replace(/status":"\d/g, "status\":\"1");

$done({body});
