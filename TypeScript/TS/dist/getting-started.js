"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hello = function (name) { return console.log("hello," + name); };
hello('TypeScript');
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, current) { return prev + current; }, 0);
} //不必在内部进行类型判断
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
//类型断言
var nums = [1001, 1002, 1003];
var res = nums.find(function (i) { return i > 0; });
// const square = res * res;
var num1 = res;
var num2 = res;
function printPost(post) {
    console.log(post.title);
    console.log(post.content);
}
printPost({ title: 'interface', content: 'hi', summary: 'readonly' });
var catchi = {};
catchi.foo = 'value1';
catchi.bar = 'value2';
//类
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.gender = true;
    }
    Person.prototype.sayHi = function (msg) {
        console.log("I am " + this.name + "," + msg);
        console.log(this.age);
    };
    return Person;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(name, age) {
        var _this = _super.call(this, name, age) || this;
        console.log(_this.gender);
        return _this;
    }
    Students.create = function (name, age) {
        return new Students(name, age);
    };
    return Students;
}(Person));
var tom = new Person('tom', 18);
console.log(tom.name);
// console.log(tom.age);//无法获取
// console.log(tom.gender);//无法获取
var jack = Students.create('jack', 19);
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.eat = function (food) {
        console.log("\u4F18\u96C5\u7684\u8FDB\u98DF" + food);
    };
    Human.prototype.run = function (distance) {
        console.log("\u76F4\u7ACB\u884C\u8D70" + distance);
    };
    return Human;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function (food) {
        console.log("\u72FC\u541E\u864E\u54BD" + food);
    };
    Animal.prototype.run = function (distance) {
        console.log("\u722C\u884C" + distance);
    };
    return Animal;
}());
//# sourceMappingURL=getting-started.js.map