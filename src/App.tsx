import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Старый сайт
import { Header } from "./components/Header/Header";
import { Catalog } from "./pages/Catalog/Catalog";
import { Gallery } from "./pages/Catalog/Gallery/Gallery";
import { Footer } from "./pages/Catalog/Footer/Footer";

// Weather
import { WeatherPage } from "./pages/WeatherPage/WeatherPage";

// Kanban
import { HeaderKanban } from "./components/HeaderKanban/HeaderKanban";
import { HomeKanban } from "./pages/HomeKanban/HomeKanban";
import { CreateTaskKanban } from "./pages/CreateTaskKanban/CreateTaskKanban";
import { TaskDetailKanban } from "./pages/TaskDetailKanban/TaskDetailKanban";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Главное задание WeatherWidget */}
          <Route path="/" element={<WeatherPage />} />

          {/* WeatherWidget также доступен по /weather */}
          <Route path="/weather" element={<WeatherPage />} />

          {/* Старая версия сайта */}
          <Route
            path="/old"
            element={
              <>
                <Header />
                <Catalog />
                <Gallery />
                <Footer />
              </>
            }
          />

          {/* Kanban версия */}
          <Route
            path="/*"
            element={
              <>
                <HeaderKanban />
                <Routes>
                  <Route path="/" element={<HomeKanban />} />
                  <Route path="/create" element={<CreateTaskKanban />} />
                  <Route path="/task/:id" element={<TaskDetailKanban />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};