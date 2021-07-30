# TypeScript
JavaScript的超集，增加了类型系统及对ES6+特性支持/自动转换的扩展，最后编译为JavaScript；相较于flow，作为一种完整的语言，TypeScript功能更加强大，生态也更加完善。
### 安装使用
```
yarn init --yes //yarn初始化项目
yarn add typescript --dev //安装ts
yarn tsc 文件名//编译单个ts文件为js文件
```
### 配置文件
```
yarn tsc --init //初始化 创建ts配置文件 tsconfig.json
yarn tsc //根据配置文件，将指定文件内的ts文件编译为js文件，并放到指定的文件夹中
```
![tsconfig.json](./src/static/tsconfig.jpg "tsconfig.json")

### 基本类型的可赋值范围
```
const a:string = 'string' 
const b:number = Infinity //NaN // 100
const c:boolean = true //false
//前三种类型 在非严格模式下 可以为 null/undefined
const d: void = undefined //空类型 非严格模式下 可以为 null
const e:null = null
const f:undefined = undefined
const g:symbol = Symbol()
```
### 标准库声明 
标准库就是内置对象所对应的声明，ts想要应用es内置对象，需在tsconfig中的lib中添加对应的标准库名称，见tsconfig.json

[ts项目示例](/TypeScript/TS)