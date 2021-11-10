import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import io from "socket.io-client";
import api from "../../service/api";
import { CityContainer, TopCity } from "./style";

type Data = {
  count: number;
  country: string;
  humidity: number;
  id: number;
  name: string;
  temp: number;
  weather: string;
};

const cityQueue: Data[] = [];

const socket = io("http://localhost:4000");

socket.on("new_city", (newCity: Data) => {
  cityQueue.push(newCity);
});

export default function TopCities() {
  const [cities, setCities] = useState<Data[]>([]);
  const [topCity, setTopCity] = useState({} as Data);

  useEffect(() => {
    setInterval(() => {
      if (cityQueue.length > 0) {
        setCities((prevState) =>
          [cityQueue[0], prevState[0], prevState[1], prevState[2], prevState[3]].filter(Boolean)
        );

        cityQueue.shift();
      }
    }, 3000);
  }, []);
  
  useEffect(() => {
    async function loadCities() {
      try {
        const response = await api.get("/city/last5");
        setCities(response.data);
      } catch (err) {
        toast.error("Não foi possivel buscar cidades")
      }
    }

    loadCities();
  }, []);

  useEffect(() => {
    async function loadTopCities() {
      try {
        const response = await api.get("/city/top");
        setTopCity(response.data);
      } catch (err) {
        toast.error("Não foi possivel buscar cidades")
      }
    }

    loadTopCities();
  }, []);

  return (
    <>
      <h1>Veja as Cidades mais pesquisadas:</h1>
        <TopCity key={TopCity.id}>
          <span>{topCity.name} - {topCity.country}</span>
          <span>Temperatura atual: {Number(topCity.temp - 273.15).toFixed(2)} ºC</span>
          <span>Umidade: {topCity.humidity}%</span>
          <span>Tempo: {topCity.weather}</span>
        </TopCity>
      {cities.map((city) => (
        <CityContainer key={city.id}>
          <span>{city.name} - {city.country}</span>
          <span>Temperatura atual: {Number(city.temp - 273.15).toFixed(2)} ºC</span>
          <span>Umidade: {city.humidity}%</span>
          <span>Tempo: {city.weather}</span>
        </CityContainer>
      ))}
    </>
  );
}
