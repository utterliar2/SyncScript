var ddgksf2013 = JSON.parse($response.body);
ddgksf2013.FilmsProStatus = 1
ddgksf2013.AeroProStatus = 1
$done({body: JSON.stringify(ddgksf2013)});