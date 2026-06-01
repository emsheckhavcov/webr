import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface Task {
  id: number;
  title: string;
  description?: string;
  dateCreated: string;
  status: number; // 0 - К выполнению, 1 - В работе, 2 - Выполнено
}

interface TaskCardProps {
  task: Task;
}

export const TaskCardKanban = ({ task }: TaskCardProps) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ margin: 1 }}>
      <CardContent>
        <Button onClick={() => navigate(`/task/${task.id}`)}>
          <Typography variant="h6">{task.id}</Typography>
        </Button>
        <Typography variant="body1">{task.title}</Typography>
      </CardContent>
    </Card>
  );
};