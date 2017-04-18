export class Training {
    constructor(
        public id: number,
        public title: string,
        public taudience: string,
        public trainer: string,
        public starttime: string,
        public endtime: string,
        public location:string,
        public isStart:string,
        public isComplete: string
    ) { }
}