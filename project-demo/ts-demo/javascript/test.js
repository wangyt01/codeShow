var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.onload = function () {
    //类
    var Student = /** @class */ (function () {
        function Student(firstName, middleInitial, lastName) {
            this.firstName = firstName;
            this.middleInitial = middleInitial;
            this.lastName = lastName;
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
        return Student;
    }());
    function greeter(person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }
    var user = new Student("Jane", "M.", "User");
    document.body.innerHTML = greeter(user);
    // 类
    var Animal = /** @class */ (function () {
        function Animal(theName) {
            this.name = theName;
        }
        return Animal;
    }());
    new Animal("Cat").name;
    var myAdd = function (x, y) { return x + y; };
    // 函数
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: 'Size 10 Object' };
    printLabel(myObj);
    // 函数
    function createSquare(config) {
        var newSquare = { color: "white", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    var mySquare = createSquare({ color: "black" });
    console.log(mySquare);
    var p1 = { x: 10, y: 20 };
    // 箭头函数表达式
    var shape = {
        name: "箭头函数表达式",
        popup: function () {
            var _this = this;
            console.log('this is popup():' + this.name);
            setTimeout(function () {
                console.log('this is setTimeout():' + _this.name);
            }, 2000);
        }
    };
    shape.popup();
    // 泛型
    function identity(arg) {
        return arg;
    }
    var myIdentity = identity;
    // 枚举
    var Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
        Direction[Direction["Left"] = 2] = "Left";
        Direction[Direction["Right"] = 3] = "Right";
    })(Direction || (Direction = {}));
    console.log(Direction.Up);
    console.log(Direction.Down);
    console.log(Direction.Left);
    console.log(Direction.Right);
    var Persons = /** @class */ (function () {
        function Persons() {
        }
        return Persons;
    }());
    var p;
    p = new Persons();
    var x = function (a) { return 0; };
    var y = function (a, s) { return 0; };
    // x = y; 报错类型不兼容
    y = x;
    var items = [1, 2, 3];
    /**
     * @param {} item 值（元素）
     * @param {} index 序列
     * @param {} array 原数组
    */
    var itemsFor = items.forEach(function (item, index, array) {
        console.log("item:" + item);
        console.log("index:" + index);
        console.log("array:" + array);
    });
    console.log(itemsFor);
    var EventType;
    (function (EventType) {
        EventType[EventType["Mouse"] = 0] = "Mouse";
        EventType[EventType["keyboard"] = 1] = "keyboard";
    })(EventType || (EventType = {}));
    function listenEvent(eventType, handler) {
        console.log(this.EventType);
        // console.log()
    }
    listenEvent(EventType.Mouse, function (e) { return console.log(e.x + ',' + e.y); });
    listenEvent(EventType.Mouse, (function (e) {
        return console.log(e.x + ',' + e.y);
    }));
    //报错，类型不兼容
    // listenEvent(EventType.Mouse, (e: number) => console.log(e));
    // 高级类型
    function extend(first, second) {
        var result = {};
        for (var id in first) {
            result[id] = first[id];
        }
        for (var id in second) {
            if (!result.hasOwnProperty(id)) {
                result[id] = second[id];
            }
        }
        return result;
    }
    var Person01 = /** @class */ (function () {
        function Person01(name) {
            this.name = name;
        }
        return Person01;
    }());
    var ConsoleLogger = /** @class */ (function () {
        function ConsoleLogger() {
        }
        ConsoleLogger.prototype.log = function () {
            console.log('111');
        };
        return ConsoleLogger;
    }());
    var jim = extend(new Person01('Jim'), new ConsoleLogger());
    var n = jim.name;
    jim.log();
    // 高级类型-联合类型
    /**
    * Takes a string and adds "padding" to the left.
    * If 'padding' is a string, then 'padding' is appended to the l
    eft side.
    * If 'padding' is a number, then that number of spaces is added
    to the left side.
    */
    function padLeft(value, padding) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error("Expected string or number,got '" + padding + "'");
    }
    ;
    var indentedString = padLeft('hello world', 1);
    // 会报错 errors during compilation
    // let indentedString1 = padLeft('hellow,world',false);
    var s1 = "foo";
    s1 = null;
    // 高级类型-多态的this类型
    var BasicCalculator = /** @class */ (function () {
        function BasicCalculator(value) {
            if (value === void 0) { value = 0; }
            this.value = value;
        }
        BasicCalculator.prototype.currentValue = function () {
            return this.value;
        };
        BasicCalculator.prototype.add = function (operand) {
            this.value += operand;
            return this;
        };
        BasicCalculator.prototype.multiply = function (operand) {
            this.value *= operand;
            return this;
        };
        return BasicCalculator;
    }());
    var vNumber = new BasicCalculator(2)
        .multiply(5)
        .add(1)
        .currentValue();
    console.log("vNumber:" + vNumber);
    var ScientificCalculator = /** @class */ (function (_super) {
        __extends(ScientificCalculator, _super);
        function ScientificCalculator(value) {
            if (value === void 0) { value = 0; }
            return _super.call(this, value) || this;
        }
        ScientificCalculator.prototype.sin = function () {
            this.value = Math.sin(this.value);
            return this;
        };
        return ScientificCalculator;
    }(BasicCalculator));
    var vNumber2 = new ScientificCalculator(2)
        .multiply(5)
        .sin()
        .add(1)
        .currentValue();
    console.log('vNumber2:' + vNumber2);
    var a = { x: 10, y: 20 };
    console.log(a.x + a.y);
    //使用一个interface往另一个class中添加额外的成员
    var Foo1 = /** @class */ (function () {
        function Foo1() {
        }
        return Foo1;
    }());
    var b = { x: 666, y: 999 };
    console.log(b.x + b.y);
};
