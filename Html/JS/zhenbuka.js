var body = $response.body.replace(/'6572'/g, "'6578'").replace(/ad_pic_list/, "add_pic_list").replace(/scrollamount="3/g, 'scrollamount="0').replace(/id="buka888/g, 'id="').replace(/size="3/g, 'size="3" color="white');
$done({ body });
