export interface User {
  email: string;
  surname: string;
  id: string;
  name: string;
}

export interface UserResponse {
  count: number;
  items: User[];
}
