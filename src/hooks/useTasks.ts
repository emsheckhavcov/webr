// src/hooks/useTasks.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Task } from "../components/TaskCardKanban/TaskCardKanban";

export const useTasks = () => {
  return useQuery<Task[], Error>({
    queryKey: ["tasks"], // ключ запроса
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
      return res.data.map((t: any) => ({
        id: t.id,
        title: t.title,
        description: "",
        dateCreated: new Date(),
        status: t.completed ? 2 : 1, // 0: not started, 1: in progress, 2: completed
      }));
    },
  });
};