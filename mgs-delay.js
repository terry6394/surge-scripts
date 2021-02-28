console.log("========== 延迟脚本开始 ==========")
let headers = $response.headers;
let operationType = headers['Operation-Type'];
console.log("operationType: " + operationType);
if(operationType.search('mainpageAuthFlag') > -1) {
  console.log(operationType.search('mainpageAuthFlag'));
  setTimeout(function(){alert("Hello world");},1000);
}
$done({headers});
console.log("========== 延迟脚本结束 ==========")
