window.onload = function () {
    //类
    class Student {
        fullName: string;
        constructor(public firstName, public middleInitial, public lastName) {
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
    }
    //接口
    interface Person {
        firstName: string;
        lastName: string;
    }

    function greeter(person: Person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }

    let user = new Student("Jane", "M.", "User");

    document.body.innerHTML = greeter(user);
    // 类
    class Animal {
        public name: string;
        constructor(theName: string) { this.name = theName; }
    }
    new Animal("Cat").name;

    let myAdd: (x: number, y: number) => number =
        function (x: number, y: number): number { return x + y; };
    // 接口
    interface LabelledValue {
        label: string;
    }
    // 函数
    function printLabel(labelledObj: LabelledValue) {
        console.log(labelledObj.label);
    }
    let myObj = { size: 10, label: 'Size 10 Object' };
    printLabel(myObj);

    // 接口-可选属性
    interface SquareConfig {
        color?: string;
        width?: number;
    }
    // 函数
    function createSquare(config: SquareConfig): { color: string; area: number } {
        let newSquare = { color: "white", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    let mySquare = createSquare({ color: "black" });
    console.log(mySquare);
    // 接口-只读属性
    interface Point {
        readonly x: number;
        readonly y: number;
    }
    let p1: Point = { x: 10, y: 20 };
    // 箭头函数表达式
    let shape = {
        name: "箭头函数表达式",
        popup: function () {
            console.log('this is popup():' + this.name);
            setTimeout(() => {
                console.log('this is setTimeout():' + this.name);
            }, 2000);
        }
    }
    shape.popup();
    // 泛型
    function identity<T>(arg: T): T {
        return arg;
    }

    let myIdentity: <U>(arg: U) => U = identity;

    // 枚举
    enum Direction {
        Up,
        Down,
        Left,
        Right
    }
    console.log(Direction.Up);
    console.log(Direction.Down);
    console.log(Direction.Left);
    console.log(Direction.Right);
    // 类型推论
    // 类型兼容性
    interface Named {
        name: string;
    }
    class Persons {
        name: string;
    }
    let p: Named;

    p = new Persons();

    let x = (a: number) => 0;
    let y = (a: number, s: string) => 0;
    // x = y; 报错类型不兼容
    y = x;

    let items = [1, 2, 3]
    /** 
     * @param {} item 值（元素）
     * @param {} index 序列
     * @param {} array 原数组
    */
    let itemsFor = items.forEach((item, index, array) => {
        console.log("item:" + item);
        console.log("index:" + index);
        console.log("array:" + array);
    })

    console.log(itemsFor);

    enum EventType { Mouse, keyboard }
    interface Event { timestamp: number }
    // extends 接口继承
    interface MouseEvent extends Event {
        x: number;
        y: number;
    }
    interface KeyEvent extends Event {
        KeyCode: Number;
    }
    function listenEvent(eventType: EventType, handler: (n: Event) => void) {
        console.log(this.EventType);
        // console.log()
    }
    listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));
    listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) =>
        console.log(e.x + ',' + e.y)));
    //报错，类型不兼容
    // listenEvent(EventType.Mouse, (e: number) => console.log(e));
    // 高级类型
    function extend<T, U>(first: T, second: U): T & U {
        let result = <T & U>{};
        for (let id in first) {
            (<any>result)[id] = (<any>first)[id];
        }
        for (let id in second) {
            if (!result.hasOwnProperty(id)) {
                (<any>result)[id] = (<any>second)[id];
            }
        }
        return result;
    }

    class Person01 {
        constructor(public name: string) { }
    }
    interface Loggable {
        log(): void;
    }
    class ConsoleLogger implements Loggable {
        log() {
            console.log('111')
        }
    }

    let jim = extend(new Person01('Jim'), new ConsoleLogger());
    let n = jim.name;
    jim.log();
    // 高级类型-联合类型
    /**
    * Takes a string and adds "padding" to the left.
    * If 'padding' is a string, then 'padding' is appended to the l
    eft side.
    * If 'padding' is a number, then that number of spaces is added
    to the left side.
    */
    function padLeft(value: string, padding: number | string) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error(`Expected string or number,got '${padding}'`);
    };
    let indentedString = padLeft('hello world', 1);
    // 会报错 errors during compilation
    // let indentedString1 = padLeft('hellow,world',false);
    let s1 = "foo";
    s1 = null;
    // 高级类型-多态的this类型
    class BasicCalculator {
        public constructor(protected value: number = 0) { }
        public currentValue(): number {
            return this.value;
        }
        public add(operand: number): this {
            this.value += operand;
            return this;
        }
        public multiply(operand: number): this {
            this.value *= operand;
            return this;
        }
    }

    let vNumber = new BasicCalculator(2)
        .multiply(5)
        .add(1)
        .currentValue();
    console.log("vNumber:" + vNumber);
    class ScientificCalculator extends BasicCalculator {
        public constructor(value = 0) {
            super(value);
        }
        public sin() {
            this.value = Math.sin(this.value);
            return this;
        }
    }
    let vNumber2 = new ScientificCalculator(2)
        .multiply(5)
        .sin()
        .add(1)
        .currentValue();
    console.log('vNumber2:' + vNumber2);

    // 高级函数-映射类型
    interface Person02 {
        name: string;
        age: number;
    }

    type Readonly<T> = {
        readonly [P in keyof T]: T[P];
    }
    type Partial<T> = {
        [P in keyof T]?: T[P];
    }
    type PersonPartial = Partial<Person02>;
    type ReadonlyPerson = Readonly<Person02>;

    type Keys = 'option1' | 'option2';
    type Flags = { [K in Keys]: boolean };
    // 如何书写声明文件-深入
    // 使用一个interface往另一个interface声明里添加额外成员
    interface Foo {
        x: number;
    }
    interface Foo {
        y: number;
    }
    let a: Foo = { x: 10, y: 20 };
    console.log(a.x + a.y);
    //使用一个interface往另一个class中添加额外的成员
    class Foo1 {
        x: number;
    }
    interface Foo1 {
        y: number;
    }
    let b: Foo1 = {x:666,y:999};
    console.log(b.x + b.y);
}
