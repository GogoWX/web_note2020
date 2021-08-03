"use strict";
var hello = function (name) { return console.log("hello," + name); };
hello('TypeScript');
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, current) { return prev + current; }, 0);
}
sum(1, 2, 3);
//枚举类型
var PostStatus;
(function (PostStatus) {
    PostStatus["Draft"] = "str";
    PostStatus[PostStatus["published"] = 1] = "published";
    PostStatus[PostStatus["unpublished"] = 0] = "unpublished";
})(PostStatus || (PostStatus = {}));
console.log(PostStatus.Draft);
console.log(1 /* published */);
//函数类型
function func1(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return 'func1';
} //声明函数 可选参数
func1(1, 2);
var func2 = function (a, b) { return 'func2'; }; //函数表达式，回调函数
func2(3, 4);
//# sourceMappingURL=getting-started.js.map