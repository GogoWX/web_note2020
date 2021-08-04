const hello = (name:string) => console.log(`hello,${name}`);
hello('TypeScript');
function sum(...args:number[]) {return args.reduce((prev,current) => prev + current , 0)}//不必在内部进行类型判断
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
//类型断言
const nums = [1001,1002,1003];
const res = nums.find(i => i>0);
// const square = res * res;
const num1 = res as number;
const num2 = <number>res;
//接口
interface Post {//定义接口
    title: string;
    content: string;
    subtitle?: string;//可选成员
    readonly summary: string;//只读成员
}
function printPost(post: Post) {
    console.log(post.title)
    console.log(post.content)
}
printPost({title:'interface',content:'hi',summary:'readonly'});
//定义动态成员接口
interface Catch {[prop:string]:string} 
const catchi: Catch = {};
catchi.foo = 'value1';
catchi.bar = 'value2';
