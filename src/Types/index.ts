export type streamType = "APM" | "CSE" | "IT" | "TT";

export interface IClass {
    id: string;
    name: string;
    semester: string;
    teacher: IUser;
    session: string;
    stream: streamType;
    students: IStudent[]

}

export interface IUser {
    id: string;
    name: string;
    email: string;
}

export interface IStudent extends IUser {
    roll: string;
    stream: streamType
}

export interface IEnrollment {
    studentId: string;
    classId: string;
}

