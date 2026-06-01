import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateTaskKanban = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleCreate = () => {
    alert(`Задача "${title}" создана!`);
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2, width: 400 }}>
      <TextField label="Название задачи" value={title} onChange={e => setTitle(e.target.value)} sx={{ mb: 2 }} />
      <TextField label="Описание задачи" value={description} onChange={e => setDescription(e.target.value)} sx={{ mb: 2 }} />
      <Button variant="contained" onClick={handleCreate}>Создать</Button>
    </Box>
  );
};