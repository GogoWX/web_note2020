# Flow
JavaScript的静态类型检查器，插件工具
### 方式
通过给变量/参数添加注解（类型注解）来实现在开发阶段对类型的检查，避免了运行后才发现错误；
### 安装应用
```
yarn init --yes //初始化并保存config
yarn add flow-bin --dev //在此项目添加flow工具
yarn flow init //初始化flow
yarn flow //运行flow检测 运行之前需要在被检测的代码页设置@flow以标记其需要检测 
yarn flow stop //停止flow
```
>注意：使用flow时需要关闭工具的代码检测工具，vscode在设置中搜索javascript validate,取消勾选;<br/>
>可以通过安装vscode插件'Flow Language Support'，直接标记出检测结果，而不用每次运行检测.
### 编译移除类型注解
- 方式一：使用flow自有的remove插件移除
```
yarn add flow-remove-types --dev //安装移除插件
yarn flow-remove-types src -d dist //移除注解，并将编译好的文件放入dist文件夹中
```
- 方式二：使用babel插件移除
```
yarn add @babel/core @babel/cli @babel/preset-flow --dev //安装babel 
yarn babel src -d dist
```
安装过后需在根目录添加.babelrc配置文件，配置内容如下：
```
{
    "presets": ["@babel/preset-flow"]
}
```
>babel去除注解，编译后会改变代码原有格式
### 类型注释对应的可赋值范围
- 基础类型
```
const a:string = 'string'
const b:number = Infinity //NaN // 100
const c:boolean = true //false
const d:null = null
const e:volid = undefined
const f:Symbol = Symbol()
```
- 引用类型
```
const arr1:Array<number> = [1,2,3]
const arr2:number[] = [1,2,3]
const arr3:[string,number] = ['string',1]//元组

const obj1:{foo?:string,bar:number} = {foo:'string',bar:2}/{bar:2} //添加?后该属性非必须
const obj2:{[string]:string}= {} //对象的键值都必须为字符串

const function func1(a:number,b:numer){return a+b};//函数参数的类型注解
func1(100,200)
const function func2(callback:(string,number) =>void){callback('string',100)};//以函数为参数；设置callback函数参数以及返回值的类型注解
func2(function(str,n){ //str应为string类型，n应为数字类型
    //逻辑代码
})
```
- 特殊类型
```
const a:'foo' = 'foo';//字面量，规定其只能是设置的值
const type:'success'|'warning'|'danger' = 'success';//联合类型，只能是规定值/类型的其中之一
type StringOrNumber = string | number;//给联合类型做别名
const b: StringOrNumber = 'string'//或者100

const gender:?number = undefined;//maybe类型，在设置的基础类型上增加 undefined和null的取值

mixed/any //任意类型，mixed为强类型，没有隐式转换；any本质是弱类型
```
- 运行环境api
```
const element: HTMLElement | null = document.getElementById('app');vscode右键HTMLElement点击go to Definition 找到这个类型的声明文件
```
>flow类型手册：https://www.saltycrane.com/cheat-sheets/flow-type/latest/

[代码示例](/TypeScript/flow/src/flow.js)

