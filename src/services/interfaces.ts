export interface IUser {
  id: string;
  graduation: string;
  email: string;
  code: string;
  password: string;
  isAdmin?: boolean;
}

export interface IDepartment {
  id: string;
  name: string;
}

export interface ITeacher {
  id: string;
  name: string;
  code: string;
  departamentId: string;
}

export interface ISubject {
  id: string;
  name: string;
}

export interface IClass {
  id: string;
  name: string;
  teacherId: string;
  subjectId: string;
  appointment?: string;
}

export interface IComment {
  id: string;
  userId: string;
  content: string;
  grade: number;
  teacherId?: string;
  classId?: string;
}

export interface IComplaint {
  id: string;
  userId: string;
  commentId: string;
  status: 'accepted || pending || declined';
}
