//参数的类型注解
function sum(a, b) {
  return a + b;
}

;
sum(100, 200);
sum(100, '200'); //变量的类型注解，不可赋其他类型的值

let num = 100; //返回的类型注解

function foo() {
  return 100;
}