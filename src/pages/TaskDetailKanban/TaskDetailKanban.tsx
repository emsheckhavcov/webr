import { Box, Typography, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

export const TaskDetailKanban = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChangeStatus = () => alert(`Статус задачи ${id} изменен!`);
  const handleDelete = () => {
    alert(`Задача ${id} удалена!`);
    navigate('/');
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5">Задача #{id}</Typography>
      <Typography variant="body1">Название: Пример</Typography>
      <Typography variant="body1">Описание: Пример описания</Typography>
      <Typography variant="body1">Дата создания: {new Date().toLocaleString()}</Typography>
      <Button variant="contained" onClick={handleChangeStatus} sx={{ mr: 1 }}>Сменить статус</Button>
      <Button variant="outlined" color="error" onClick={handleDelete}>Удалить</Button>
    </Box>
  );
};