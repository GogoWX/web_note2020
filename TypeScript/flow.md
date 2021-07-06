# Flow
JavaScript的静态类型检查器，插件工具

方式：通过给变量/参数添加注解（类型注解）来实现在开发阶段对类型的检查，避免了运行后才发现错误；
```
function sum(a: number,b: number) {
    return a + b
}
```
flow安装应用：
```
yarn init --yes //初始化并保存config
yarn add flow-bin --dev //在此项目添加flow工具
yarn flow init //初始化flow
yarn flow //运行flow检测 运行之前需要在被检测的代码页设置@flow以标记其需要检测 
yarn flow stop //停止flow
```
>注意：使用flow时需要关闭工具的代码检测工具，vscode在设置中搜索javascript validate,取消勾选
[代码示例](/flow/flow.js)
