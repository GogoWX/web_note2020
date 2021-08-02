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
//# sourceMappingURL=getting-started.js.map