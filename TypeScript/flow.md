# Flow
JavaScript的静态类型检查器，插件工具

方式：通过给变量/参数添加注解（类型注解）来实现在开发阶段对类型的检查，避免了运行后才发现错误；
```
function sum(a: number,b: number) {
    return a + b
}
```
去除：生产阶段可以使用flow和 babel 去除类型注解；