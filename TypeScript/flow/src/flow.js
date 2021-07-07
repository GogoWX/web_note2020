//@flow
//参数的类型注解
function sum(a:number,b:number) {return a + b}
sum(100,200)
sum(100,'200')
let num: number = 100;//变量的类型注解，不可赋其他类型的值
function foo():number {return 100};//返回的类型注解
function fooN():void {console.log('123')};//对于没有返回值的函数，类型注释为void