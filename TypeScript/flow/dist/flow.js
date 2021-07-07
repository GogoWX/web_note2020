//     
//参数的类型注解
function sum(a       ,b       ) {return a + b}
sum(100,200)
sum(100,'200')
let num         = 100;//变量的类型注解，不可赋其他类型的值
function foo()        {return 100};//返回的类型注解
function fooN()      {console.log('123')};//对于没有返回值的函数，类型注释为void