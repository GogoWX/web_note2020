const hello = (name:string) => console.log(`hello,${name}`);
hello('TypeScript');

function sum(...args:number[]) { //不必在内部进行类型判断
    return args.reduce((prev,current) => prev + current , 0)
}

sum(1,2,3)