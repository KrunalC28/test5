export class User {
    constructor(
        public username: string,
        public firstname: string,
        public lastname: string,
        public password: string,
        public role: string,
        public creationDate: Date,
        public isActive?: string,
        public cpassword?: string
    ) { }
}