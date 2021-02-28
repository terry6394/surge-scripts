function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}



console.log("========== 延迟脚本开始 ==========")
let headers = $request.headers
let operationType = headers['Operation-Type'];
console.log("operationType: " + operationType);

if(typeof(operationType) != "undefined" && operationType.search('mainpageAuthFlag') > -1) {
  console.log(operationType.search('mainpageAuthFlag'));
  console.log("========== 延迟3000ms ==========")
  sleep(3000)
  console.log("========== 延迟脚本结束 ==========")
  $done();
}
else {
  console.log("========== 无需延迟脚本结束 ==========")
  $done();
}
