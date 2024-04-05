export interface IClass{
    id:string;
    name:string;
    semester:string;
    teacher:string;
    session:string;
    stream: "APM" | "CSE" | "IT" | "TT";
    students:IStudent[]

}

export interface IStudent{
    id:string;
    name:string;
    roll:string;
    stream: "APM" | "CSE" | "IT" | "TT";
    email:string;
}