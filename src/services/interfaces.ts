export interface IUser {
  id: string;
  graduation: string;
  email: string;
  code: string;
  password: string;
  isadmin?: boolean;
}

export interface IDepartment {
  id: string;
  name: string;
}

export interface ITeacher {
  id: string;
  name: string;
  departament_id: string;
}

export interface ISubject {
  id: string;
  name: string;
}

export interface IClass {
  id: string;
  name: string;
  teacher_id: string;
  subject_id: string;
}

export interface IComment {
  id: string;
  user_id: string;
  content: string;
  grade: number;
  teacher_id?: string;
  class_id?: string;
}

export interface IComplaint {
  id: string;
  user_id: string;
  comment_id: string;
  status: 'accepted || pending || declined';
}
