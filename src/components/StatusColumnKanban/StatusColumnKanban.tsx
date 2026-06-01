import { Box, Typography } from "@mui/material";
import { TaskCardKanban } from "../TaskCardKanban/TaskCardKanban";
import type { Task } from "../TaskCardKanban/TaskCardKanban";

interface StatusColumnProps {
  title: string;
  tasks: Task[];
}

export const StatusColumnKanban = ({ title, tasks }: StatusColumnProps) => {
  return (
    <Box sx={{ width: 300, minHeight: 400, margin: 1, padding: 1, border: '1px solid gray', borderRadius: 2 }}>
      <Typography variant="h6">{title}</Typography>
      {tasks.map(task => <TaskCardKanban key={task.id} task={task} />)}
    </Box>
  );
};