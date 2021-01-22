// setTimeout(()=>console.log("d"),0)
// var r = new Promise(function(resolve,reject){
// 	resolve()
// })
// r.then(()=>{
// 	var begin = Date.now();
// 	while(Date.now() - begin<1000);
// 	console.log("c1")
// 	new Promise(function(resolve,reject){
// 		resolve()
// 	}).then(()=>console.log("c2"))
// })
// 闭包保存变量
for (var i = 1; i <= 5; i++) {
	(function(i){
		setTimeout(function test() {
		     console.log('dev',i) // 依次输出：6 6 6 6 6
		 }, i * 1000);
	}(i))
}
// bind保存
for(var i = 1; i<=5;i++){
	setTimeout(function (i){
		console.log('bind',i)
	}.bind(null,i),i*1000)
}
