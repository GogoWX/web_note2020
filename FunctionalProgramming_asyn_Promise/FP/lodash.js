//Lodash
//数组方法first / last / toUpper / reverse / each / includes / find / findIndex
const _ = require('lodash')

const array = ['jack','tom','lucy','kate']

console.log(_.first(array))
console.log(_.last(array))

console.log(_.toUpper(_.first(array)))
console.log(_.reverse(array))

let r = _.each(array,(item,index) =>{
    console.log(item,index)
})


//lodash记忆函数与纯函数，将纯函数的结果缓存，输入相同参数调用的时候，直接取缓存的结果，而不再调用函数；

function getArea (r) {
    console.log(r)
    return Math.PI * r * r
}

let getAreaWithMemory = _.memoize(getArea)
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(3))

//模拟 memoize 方法的实现

function memoize (f) {
    let cache = {}
    return function() {
        let key = JSON.stringify(arguments)//arguments 是一个伪数
        cache[key] = cache[key] || f.apply(f,arguments)
        return cache[key]
    }
}

let getAreaWithMemory2 = memoize(getArea)
console.log(getAreaWithMemory2(4))
console.log(getAreaWithMemory2(4))
console.log(getAreaWithMemory2(3))

