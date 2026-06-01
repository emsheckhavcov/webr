import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HeaderKanban = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          📝 Kanban-доска
        </Typography>
        <Button color="inherit" onClick={() => navigate("/")}>Главная</Button>
        <Button color="inherit" onClick={() => navigate("/create")}>Создать задачу</Button>
      </Toolbar>
    </AppBar>
  );
};