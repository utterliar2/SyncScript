var body = $response.body;
var obj = JSON.parse(body);

//var body = $response.body.replace(/ad_video/g, 'ad_video')
//$done({ body });

delete obj.Variables.data.threaddetail.threadapp_ad_video;
delete obj.Variables.data.threaddetail.tagadv;
delete obj.Variables.data.threaddetail.middleadv;

$done({body: JSON.stringify(obj)});