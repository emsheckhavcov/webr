import { useState } from "react";
import { Button } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type WeatherData = {
  current_weather: {
    temperature: number;
    windspeed: number;
  };
};

const fetchWeather = async (): Promise<WeatherData> => {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=55.75&longitude=37.61&current_weather=true"
  );

  if (!response.ok) {
    throw new Error("Ошибка при загрузке погоды");
  }

  return response.json();
};

const createPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  if (!response.ok) {
    throw new Error("Ошибка при выполнении мутации");
  }

  return response.json();
};

export const WeatherWidget = () => {
  const queryClient = useQueryClient();
  const [message, setMessage] = useState("");

  const { data, isLoading, isError, isFetching, dataUpdatedAt } = useQuery({
    queryKey: ["weather"],
    queryFn: fetchWeather,
  });

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      setMessage("Мутация успешно выполнена, запрос погоды обновлён");

      queryClient.invalidateQueries({
        queryKey: ["weather"],
      });
    },
    onError: () => {
      setMessage("Ошибка при выполнении мутации");
    },
  });

  if (isLoading) {
    return <div>Загрузка погоды...</div>;
  }

  if (isError) {
    return <div>Ошибка при загрузке погоды</div>;
  }

  return (
    <div>
      <h2>Weather Widget</h2>

      <p>Температура: {data?.current_weather.temperature}°C</p>
      <p>Скорость ветра: {data?.current_weather.windspeed} км/ч</p>

      <p>
        Последнее обновление:{" "}
        {dataUpdatedAt ? new Date(dataUpdatedAt).toLocaleTimeString() : "-"}
      </p>

      {isFetching && <p>Погода обновляется...</p>}

      <Button
        variant="contained"
        onClick={() => mutation.mutate()}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Отправка..." : "Вызвать мутацию"}
      </Button>

      {message && <p>{message}</p>}
    </div>
  );
};