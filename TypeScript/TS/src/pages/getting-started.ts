const hello = (name:string) => console.log(`hello,${name}`);
hello('TypeScript');
function sum(...args:number[]) {return args.reduce((prev,current) => prev + current , 0)}//不必在内部进行类型判断
sum(1,2,3)
/**
 * 枚举类型
 */
enum PostStatus {Draft = 'str',published= 1,unpublished = 0}
const enum PostStatusC {Draft,published,unpublished}
console.log(PostStatus.Draft)
console.log(PostStatusC.published)
/**
 * 函数类型
 */
function func1(a:number,b:number,...rest:number[]):string {return 'func1'}//声明函数 可选参数
func1(1,2)
const func2: (a: number, b: number) => string = function(a:number,b:number):string {return 'func2'}//函数表达式，回调函数
func2(3,4)
/**
 * 类型断言
 */
const nums = [1001,1002,1003];
const res = nums.find(i => i>0);
// const square = res * res;
const num1 = res as number;
const num2 = <number>res;
/**
 * 接口
 */
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
/**
 * 类
 */
class Person{
    public name:string;
    private age:number;
    protected readonly gender: boolean;
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
        this.gender = true;
    }
    sayHi(msg:string):void {
        console.log(`I am ${this.name},${msg}`)
        console.log(this.age)
    }
}
class Students extends Person {
    private constructor(name:string,age:number) {
        super(name,age)
        console.log(this.gender)
    }
    static create(name:string,age:number) {
        return new Students(name,age)
    } 
}
const tom= new Person('tom',18);
console.log(tom.name);
// console.log(tom.age);//无法获取
// console.log(tom.gender);//无法获取
const jack = Students.create('jack',19);
/**
 * 类与接口
 */
interface Eat {
    eat(foo:string):void
}
interface Run {
    run(distance:number):void
}
class Human implements Eat,Run{
    eat(food:string):void {
        console.log(`优雅的进食${food}`)
    }
    run(distance:number):void {
        console.log(`直立行走${distance}`)
    }
}
class Animal implements Eat,Run{
    eat(food:string):void {
        console.log(`狼吞虎咽${food}`)
    }
    run(distance:number):void {
        console.log(`爬行${distance}`)
    }
}
/**
 * 抽象类
 */
abstract class Animals {
    eat(food:string):void {
        console.log(`狼吞虎咽${food}`)
    }
    abstract run(distance:number):void;//抽象方法
}
class dog extends Animals {
    run(distance: number): void {//继承抽象类时，必须实例抽象类中的抽象方法
        console.log(`爬行${distance}`)
    }
}
/**
 * 泛型
 */
function createStringArray(length:number,value:string):string[] {
    const arr = Array<string>(length).fill(value);
    return arr
}
function creatArray<T>(length:number,value:T):T[] {//泛型定义
    const arr = Array<T>(length).fill(value);
    return arr
}
const stringArr = creatArray<string>(3,'ts');