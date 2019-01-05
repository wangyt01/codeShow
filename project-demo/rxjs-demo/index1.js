// 来自一个或多个值
let r1 = Rx.Observable.of('foo', 'bar');
console.log(r1);
// 来自数组
let r2 = Rx.Observable.from([1, 2, 3]);
console.log(r2);

// 从一个数组或一个可迭代对象创建。
// observable 发送数组中的每个元素，然后完成。
const myNumber$ = Rx.Observable.from([1, 2, 3, 4, 5]);

// 只要我们从 observable 收到一个数，
// 就将它打印在控制台上。
myNumber$.subscribe(number => console.log(number));

var single = a => a
single('hello, world') // 'hello, world'


// 来自一个或多个值
Rx.Observable.of('foo', 'bar');

// 来自数组
Rx.Observable.from([1, 2, 3]);

// 来自事件
Rx.Observable.fromEvent(document.querySelector('button'), 'click');

// // 来自 Promise
// Rx.Observable.fromPromise(fetch('E:/github/inspur-project/angular-demo/rxjs-demo/data/users.json'));

// // 来自回调函数(最后一个参数得是回调函数，比如下面的 cb)
// // fs.exists = (path, cb(exists))
// var exists = Rx.Observable.bindCallback(fs.exists);
// exists('file.txt').subscribe(exists => console.log('Does file exist?', exists));

// // 来自回调函数(最后一个参数得是回调函数，比如下面的 cb)
// // fs.rename = (pathA, pathB, cb(err, result))
// var rename = Rx.Observable.bindNodeCallback(fs.rename);
// rename('file.txt', 'else.txt').subscribe(() => console.log('Renamed!'));

//控制流动
function ControlFlow() {
    // 输入 "hello world"
    var input = Rx.Observable.fromEvent(document.getElementById('demo1'), 'input');

    // 过滤掉小于3个字符长度的目标值
    input.filter(event => event.target.value.length > 2)
        .map(event => event.target.value)
        .subscribe(value => console.log(value)); // "hel"

    // 延迟事件
    input.delay(200)
        .map(event => event.target.value)
        .subscribe(value => console.log(value)); // "h" -200ms-> "e" -200ms-> "l" ...

    // 每200ms只能通过一个事件
    input.throttleTime(200)
        .map(event => event.target.value)
        .subscribe(value => console.log(value)); // "h" -200ms-> "w"

    // 停止输入后200ms方能通过最新的那个事件
    input.debounceTime(200)
        .map(event => event.target.value)
        .subscribe(value => console.log(value)); // "o" -200ms-> "d"

    // 在3次事件后停止事件流
    input.take(3)
        .map(event => event.target.value)
        .subscribe(value => console.log(value)); // "hel"

    // 直到其他 observable 触发事件才停止事件流
    var stopStream = Rx.Observable.fromEvent(document.querySelector('button'), 'click');
    input.takeUntil(stopStream)
        .map(event => event.target.value)
        .subscribe(value => console.log(value)); // "hello" (点击才能看到)
}
// 控制流动
ControlFlow();

// 产生值
function createValue() {
    // 输入 "hello world"
    var input = Rx.Observable.fromEvent(document.getElementById('demo2'), 'input');

    // 传递一个新的值
    input.map(event => event.target.value)
        .subscribe(value => console.log(value)); // "h"

    // 通过提取属性传递一个新的值
    input.pluck('target', 'value')
        .subscribe(value => console.log(value)); // "h"

    // 传递之前的两个值
    input.pluck('target', 'value').pairwise()
        .subscribe(value => console.log(value)); // ["h", "he"]

    // 只会通过唯一的值
    input.pluck('data').distinct()
        .subscribe(value => console.log(value)); // "helo wrd"

    // 不会传递重复的值
    input.pluck('data').distinctUntilChanged()
        .subscribe(value => console.log(value)); // "helo world"
}

//产生值
createValue();

// 创建应用
function createApp() {
    var button = document.getElementById('btn1');
    Rx.Observable.fromEvent(button, 'click')
        // 对流进行 scan (reduce) 操作，以获取 count 的值
        .scan(count => count + 1, 0)
        // 每次改变时都在元素上设置 count
        .subscribe(count => document.querySelector('#count').innerHTML = count);

}

createApp();
// 改变存储状态
function increaseFunc() {

    var increaseButton = document.querySelector('#btn2');
    var increase = Rx.Observable.fromEvent(increaseButton, 'click')
        // 我们再一次映射到一个函数，它会增加 count
        .map(() => state => Object.assign({}, state, { count: state.count + 1 }));
    // 我们使用初始状态创建了一个对象。每当状态发生变化时，我们会接收到改变状态的函数，
    // 并把状态传递给它。然后返回新的状态并准备在下次点击后再次更改状态。
    var state = increase.scan((state, changeFn) => changeFn(state), { count: 0 });
    var decreaseButton = document.querySelector('#btn3');
    var decrease = Rx.Observable.fromEvent(decreaseButton, 'click')
        // 我们还是映射到一个函数，它会减少 count 
        .map(() => state => Object.assign({}, state, { count: state.count - 1 }));

    var inputElement = document.querySelector('#demo3');
    var input = Rx.Observable.fromEvent(inputElement, 'keypress')
        // 我们还将按键事件映射成一个函数，它会产生一个叫做 inputValue 状态
        .map(event => state => Object.assign({}, state, { inputValue: event.target.value }));

    // 我们将这三个改变状态的 observables 进行合并
    var state = Rx.Observable.merge(
        increase,
        decrease,
        input
    ).scan((state, changeFn) => changeFn(state), {
        count: 0,
        inputValue: ''
    });

    // 我们订阅状态的变化并更新 DOM
    state.subscribe((state) => {
        document.querySelector('#count').innerHTML = state.count;
        document.querySelector('#hello').innerHTML = 'Hello ' + state.inputValue;
    });

    // 为了优化渲染，我们可以检查什么状态是实际上已经发生变化了的
    var prevState = {};
    state.subscribe((state) => {
        if (state.count !== prevState.count) {
            document.querySelector('#count').innerHTML = state.count;
        }
        if (state.inputValue !== prevState.inputValue) {
            document.querySelector('#hello').innerHTML = 'Hello ' + state.inputValue;
        }
        prevState = state;
    });
}

increaseFunc();



function addClickHandler(handler) {
    var flow = document.querySelector('#flow');
    console.log('add')
    flow.addEventListener('click', handler);
}

function removeClickHandler(handler) {
    var flow = document.querySelector('#flow');
    console.log('remove')
    flow.removeEventListener('click', handler);
}


// 流动性
function flowFunc() {

    var flow = document.querySelector('#flow');
    Rx.Observable.fromEvent(flow, 'click')
        .throttleTime(1000)
        .scan(count => count + 1, 0)
        .subscribe(count => {
            // return;
            console.log(`clicked ${count} times`)
        });

}

flowFunc();
// 值
function valueFunc() {
    var valueBtn = document.querySelector('#valueBtn');
    Rx.Observable.fromEvent(valueBtn, 'click')
        .throttleTime(1000)
        .map(event => event.clientX)
        .scan((count, clientX) => count + clientX, 0)
        .subscribe(count => console.log(count));
}
valueFunc();

//Observable (可观察对象)
var observable = Rx.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
        observer.next(4);
        observer.complete()
    })
})

console.log('just before subscribe');
observable.subscribe({
    next: x => console.log('got value ' + x),
    error: err => console.error('something wrong occurred: ' + err),
    complete: () => console.log('done'),
})

console.log('just after subscribe');

// 清理
var observable = Rx.Observable.from([10, 20, 30]);
var subscription = observable.subscribe(x => console.log(x));
// 稍后：
subscription.unsubscribe();


function subscribe(observer) {
    var intervalID = setInterval(() => {
        observer.next('hi');
    }, 1000);

    return function unsubscribe() {
        clearInterval(intervalID);
    };
}

var unsubscribe = subscribe({ next: (x) => console.log(x) });

setTimeout(() => {
    // 稍后：
    unsubscribe(); // 清理资源
}, 2000)

var observable1 = Rx.Observable.interval(400);
var observable2 = Rx.Observable.interval(300);

var subscription = observable1.subscribe(x => console.log("first:" + x));
var childSubscription = observable2.subscribe(x => console.log("second:" + x));

subscription.add(childSubscription);

setTimeout(() => {
    // subscription 和 childSubscription 都会取消订阅
    subscription.unsubscribe();
}, 1000)

// var observableColor1 = Rx.Observable.interval(100);
// var observableColor2 = Rx.Observable.interval(200);
// var roundBtn = document.querySelector('round');
// var subscription1 = observableColor1.subscribe(() => {
//     roundBtn.classList.add('outBox-red');
//     // roundBtn.classList.remove('outBox-green');
// })
// var childSubscription1 = observableColor2.subscribe(() => {
//     roundBtn.classList.add('outBox-green');
//     roundBtn.classList.remove('outBox-red');
// })
// // subscription.add(childSubscription);
// // 点击不发光

// // var round = Rx.Observable.fromEvent(roundBtn,'click')
// //     .subscribe(() => {
// //         subscription.unsubscribe;
// //     })

// Subject (主体)

var subject = new Rx.Subject();

subject.subscribe({
    next: (v) =>  console.log('observerA: ' + v)
});

subject.subscribe({
    next: (v) =>  console.log('observerB: ' + v)
});

var observable = Rx.Observable.from([1,2,3,4,5]);

observable.subscribe(subject);

//引用计数


