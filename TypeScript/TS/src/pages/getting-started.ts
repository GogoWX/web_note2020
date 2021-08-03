const hello = (name:string) => console.log(`hello,${name}`);
hello('TypeScript');
function sum(...args:number[]) { //不必在内部进行类型判断
    return args.reduce((prev,current) => prev + current , 0)
}
sum(1,2,3)
//枚举类型
enum PostStatus {Draft = 'str',published= 1,unpublished = 0}
const enum PostStatusC {Draft,published,unpublished}
console.log(PostStatus.Draft)
console.log(PostStatusC.published)
//函数类型
function func1(a:number,b:number,...rest:number[]):string {return 'func1'}//声明函数 可选参数
func1(1,2)
const func2: (a: number, b: number) => string = function(a:number,b:number):string {return 'func2'}//函数表达式，回调函数
func2(3,4)