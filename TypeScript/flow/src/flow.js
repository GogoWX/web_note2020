//@flow
//参数的类型注解
function sum(a:number,b:number) {return a + b};
sum(100,200)
sum(100,'200')

//变量的类型注解，不可赋其他类型的值
let num: number = 100;

//返回的类型注解
function foo():number {
    return 100
}