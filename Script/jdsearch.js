var ddgksf2013 = JSON.parse($response.body);

if($request.url.indexOf('hotWords')!==-1){
ddgksf2013.hotwords={};
ddgksf2013.tabs={};
delete ddgksf2013.abver;
}
if($request.url.indexOf('hotSearchTerms')!==-1){
ddgksf2013.topData.data={};
ddgksf2013.data={};
}

$done({body: JSON.stringify(ddgksf2013)});
