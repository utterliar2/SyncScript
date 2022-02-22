




var ddgksf2013 = JSON.parse($response.body);
ddgksf2013.linkedProducts = [{"originalTransactionId":300001050203619,"inAppStates":[{"originalTransactionId":300001050203619,"productId":"com.readdle.PDFExpert5.subscription.year50","subscriptionState":"active","productName":"subscription","subscriptionExpirationDate":"15:55 28/12/2022","isEligibleForIntroPeriod":false,"subscriptionAutoRenewStatus":"autoRenewOn","type":"subscription","isInGracePeriod":false,"isInBillingRetryPeriod":false,"entitlements":["ios.pe.subscription.pdf-features"]}],"receiptId":1565231555000,"statisticsInfo":{"events":[]},"bundleId":"com.readdle.PDFExpert5","chargingPlatform":"iOS AppStore"}];
$done({body: JSON.stringify(ddgksf2013)});