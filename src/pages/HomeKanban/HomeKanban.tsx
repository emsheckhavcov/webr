import { Box } from "@mui/material";
import { StatusColumnKanban } from "../../components/StatusColumnKanban/StatusColumnKanban";
import { useTasks } from "../../hooks/useTasks";

export const HomeKanban = () => {
  const { data: tasks = [] } = useTasks();
  const statusMap = ["К выполнению", "В работе", "Выполнено"];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
      {statusMap.map((title, index) => (
        <StatusColumnKanban key={index} title={title} tasks={tasks.filter(t => t.status === index)} />
      ))}
    </Box>
  );
};