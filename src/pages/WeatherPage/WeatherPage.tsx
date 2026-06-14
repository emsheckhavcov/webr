import { Box } from "@mui/material";
import { WeatherWidget } from "../../components/WeatherWidget/WeatherWidget";

export const WeatherPage = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <WeatherWidget />
    </Box>
  );
};