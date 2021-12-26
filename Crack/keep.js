/*
from king
https://api.gotokeep.com/(athena/v5/people/my|nuocha/plans) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/keep.js
*/

if ($request['url']['indexOf']('/athena/v5/people/my') != -1) {
    re('memberStatus\":\\d+@username\":"[^"]+', 'memberStatus\":1@username\":\"ddgksf2013');
}
if ($request['url']['indexOf']('/nuocha/plans') != -1) {
    re('errorCode\":\\d+@status\":\\w+', 'errorCode":0@status":true');
}

functionre(){varbody=$response.body;if(arguments[0].includes("@")){varregs=arguments[0].split("@");varstrs=arguments[1].split("@");for(i=0;i<regs.length;i++){varreg=newRegExp(regs[i],"g");body=body.replace(reg,strs[i]);}}else{varreg=newRegExp(arguments[0],"g");body=body.replace(reg,arguments[1]);}$done(body);}
