export class FormData {
    constructor(
        public unitArray: Array<any>,
        public sublimeBox: boolean,
        public sublimeWay: Array<any>,
        public checkBox: boolean,
        public checkWay: Array<any>,
        public incomeBox: boolean,
        public spendingBox: boolean,
        public sumShow: string,
        public startDate?: any
    ) { }


}


// data:[{
//     unitArray:['请输入','zhong1'],
//     startDate: '',
//     sublimeBox: false,
//     sublimeWay:['提示','禁止'],
//     checkBox: false,
//     checkWay:['提示','禁止'],
//     incomeBox:false,
//     spendingBox:false,
//     sumShow:""
//   }]