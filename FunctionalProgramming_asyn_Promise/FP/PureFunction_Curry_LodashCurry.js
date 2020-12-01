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

//纯函数（有硬编码，后续可以通过柯里化解决，如下方）
function checkAge(age) {
    let mini = 18
    return age >= mini
}

//柯里化（Haskell Brooks Curry）
//当一个函数有多个参数的时候先传递一部分参数调用它（这部分参数以后永远不变）
//然后返回一个新的函数接收剩余的参数，返回结果

function checkAge2(min,age) {//解决硬编码问题
    return age >= min
}

function checkAgeH (min) {
    return function (age) {
        return age > min
    }
}

//es6箭头函数简便写法
let checkAgeHES = min => (age => age >= min)

let checkAge18 = checkAgeH(18)
let checkAge20 = checkAgeH(20)

console.log(checkAge18(20))

//lodash中的柯里化函数（通用柯里化函数）_.curry(func)
//功能：创建一个函数，该函数接收一个或者多个func参数，如果func所需要的参数都被提供则执行func并返回执行的结果，否则继续返回该函数等待接收剩余的参数
const _ = require('lodash')
//lodash中的 curry基本使用

function getSum (a,b,c) {
    return a+b+c
}

const curried = _.curry(getSum)
console.log(curried(1,2,3))
console.log(curried(1)(2,3))
console.log(curried(1,2)(3))

