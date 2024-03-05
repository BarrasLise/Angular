export class Post {
    // title: string;
    // description: string;
    // createdDate: Date;
    // url: string;
    // like: number;

    // constructor(title:string, description:string, createdDate:Date, url:string, like:number){
    //     this.title=title;
    //     this.description=description;
    //     this.createdDate=createdDate;
    //     this.url=url;
    //     this.like=like;

    // }

    constructor(public title:string,
                public description:string,
                public createdDate:Date,
                public url:string,
                public like:number,
                public location?:string, 
                ){

    }


}