export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  goal: Goal[];
  weeklyTask: WeeklyTask[];
  createdAt: Date;
  updatedAt: Date;
  Notification: Notification[];
}

export interface Goal {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  progress: number;
  status: "PLANNED" | "IN_PROGRESS" | "COMPLETED" | "FAILED"; // Status enum으로 정의
  userId: number;
  user?: User;
  workItem: WorkItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkItem {
  id: number;
  title: string;
  goalId: number;
  goal?: Goal;
  timeLine: TimeLine[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TimeLine {
  id: number;
  title: string;
  description: string;
  startDateNumber: number;
  endDateNumber: number;
  workItemId: number;
  workItem?: WorkItem;
  task: Task[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Task {
  id: number;
  text: string;
  estimatedTime: number;
  actualTime: number;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED"; // Status enum으로 정의
  startTime?: Date | null; // nullable
  endTime?: Date | null; // nullable
  timeLineId?: number | null; // nullable
  TimeLine?: TimeLine | null; // nullable
  completed: boolean;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface WeeklyTask {
  id: number;
  text: string;
  estimatedTime: number;
  actualTime: number;
  userId: number;
  user?: User;
  completed: boolean;
  date: Date;
  startTime?: Date | null; // nullable
  endTime?: Date | null; // nullable
  createdAt: Date;
  updatedAt: Date;
}

export interface Notification {
  id: number;
  text: string;
  userId: number;
  user?: User;
  isRead: boolean;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}
