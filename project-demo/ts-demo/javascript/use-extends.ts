window.onload = () => {
    ////////////使用继承////////////////////
    class Animal {
        constructor(public name: string) { }
        move(distanceInMeters: number = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m `);
        }
    }

    class Snake extends Animal {
        constructor(name: string) { super(name); }
        move(distanceInMeters = 5) {
            console.log('Slithering...');
            super.move(distanceInMeters);
        }
    }

    class Horse extends Animal {
        constructor(name: string) { super(name); }
        move(distanceInMeters = 45) {
            console.log('Galloping...');
            super.move(distanceInMeters);
        }
    }

    let sam = new Snake('Sammy the Python');
    let tom: Animal = new Horse('Tommy the Palonino');

    sam.move();
    tom.move(34);
    ///////////泛型///////////////////
    class Greeter<T> {
        greeting: T;
        constructor(message: T) {
            this.greeting = message;
        }
        greet() {
            return this.greeting;
        }
    }
    
    let greeter = new Greeter<string>("Hello, world");
    
    let button = document.createElement('button');
    button.textContent = "Say Hello";
    button.onclick = function() {
        alert(greeter.greet());
    }
    
    document.body.appendChild(button);
}

