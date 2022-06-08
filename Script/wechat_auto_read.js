/* 公众号墨鱼手记 crated by ddgksf2013 on 2022-06-08 */
var body = $response.body
    .replace(/</script>/, 'setTimeout(()=>window.history.back(),6000); </script>');
$done({ body });
