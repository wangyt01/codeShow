export class Hero {
    id: number;
    name: string;
    content: string;
}
export class MyDemo {
    id: number;
    demoName: string;
}
export class HeroForm {
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public sex: string,
        public myFood?: Array<any>,
        public alterEgo?: string,
        public selected?: boolean
    ) {}
}

