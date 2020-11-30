//纯函数概念：相同的输入永远会得到相同的输出，而且没有任何可观察的副作用。
//函数式编程不会保留中间的结果，所以变量是不可变的（无状态的）
//纯函数优点：1.纯函数可缓存，利用lodash memoize方法进行缓存；2.可测试；3.方便并行处理，纯函数不访问共享的内存数据
//不会出现并行操作共享数据而发生意外，所以在并行环境下可以任意运行。
//副作用让一个函数变得不纯，如果函数依赖于外部的状态就无法保证输出相同，就会带来副作用
//副作用的来源：全局变量、配置文件、数据库、获取用户输入等等，所有的外部交互都可能产生副作用，副作用也使得方法通用性下降不适合扩展和可重用性
//同时副作用会给程序带来安全隐患给程序带来不确定性，但是副作用不可能完全禁止，尽可能控制它们在可控范围内法生。
//纯函数/不纯的函数 slice/splice
let array = [1,2,3,4,5];
//纯函数
console.log('slice：',array.slice(0,3))
console.log('slice：',array.slice(0,3))
console.log('slice：',array.slice(0,3))
//不纯函数
console.log('splice：',array.splice(0,3))
console.log('splice：',array.splice(0,3))
console.log('splice：',array.splice(0,3))

//无可观察的副作用实例
//不纯函数
let mini = 18
function checkAge(age) {
    return age >= mini
}

//纯函数（有硬编码，后续可以通过柯里化解决？）
function checkAge(age) {
    let mini = 18
    return age >= mini
}