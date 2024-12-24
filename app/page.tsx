"use client";

import { useQuery } from "react-query";

const fetchWeeklyTasks = async () => {
  const response = await fetch("/api/task").then((res) => res.json());
  if (!response.success) {
    throw new Error(response.error);
  }
  return response.tasks;
};

interface IWeeklyTask {
  id: number;
  text: string;
  estimatedTime: number;
  actualTime: number;
  userId: number;
  completed: boolean;
  date: Date;
  startTime: Date;
  endTime: Date;
}

export default function Home() {
  const {
    data: weeklyTasks,
    error,
    isLoading,
  } = useQuery<IWeeklyTask[]>(["weeklyTasks"], fetchWeeklyTasks);
  if (isLoading) return <div>Loading...</div>;
  if (weeklyTasks?.length === 0 || weeklyTasks === undefined)
    return <div>no weekly tasks</div>;
  return (
    <div>
      weeklyTasks already!
      <h1>{weeklyTasks[0].text}</h1>
    </div>
  );
}
