export class UserClass {

    constructor(
        public login : string,
        public followers: number,
        public avatar_url: string, 
        public bio : string, 
        public location : string,
        public following : number,
        public public_repos : number,
        public forks_count : number,
        public updated_at : Date,
        public created_at :Date
        ){

    };

}