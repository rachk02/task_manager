export interface Task {
  id: number;
  name: string;
  content: string;
  status: 'active' | 'closed';
}
