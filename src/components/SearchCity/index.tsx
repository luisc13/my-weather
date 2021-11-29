import { WeatherContainer } from "./style";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { useState } from "react";
import {toast} from 'react-toastify'
import api from "../../service/api";

type Data = {
  id: number;
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: [
    {
      description: string;
    }
  ];
};

export default function SearchCity() {
  const [city, setCity] = useState("");
  const [tempo, setTempo] = useState({} as Data);

  async function HandleGetWeather() {
    if (!city) {
      toast.warning("Preencha o campo de busca")
      return;
    }
    try {
      const response = await api.get(`/weather`, {
        params: {
          city,
        },
      });
      setTempo(response.data);
      await api.post('/city', {id: response.data.id, name: response.data.name, country: response.data.sys.country, temp: response.data.main.temp, humidity: response.data.main.humidity, weather: response.data.weather[0].description, count: 1});
    } catch (err) {
      toast.error("Cidade não encontrada")
    }
  }

  return (
    <>
      <WeatherContainer>
      {Object.keys(tempo).length > 0 && (
          <div>
            <h1>
              {tempo.name} - {tempo.sys.country}
            </h1>
            <span>Temperatura atual: {Number(tempo.main.temp - 273.15).toFixed(2)} ºC</span>
            <span>Umidade: {tempo.main.humidity}%</span>
            <span>Tempo: {tempo.weather[0].description}</span>
          </div>
      )}
      </WeatherContainer>
      <InputGroup className="mb-3" style={{ marginTop: "10px" }}>
        <InputGroup.Text id="inputGroup-sizing-default">
          Cidade:
        </InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e: any) => setCity(e.target.value)}
        />
      </InputGroup>
      <Button
        variant="primary"
        onClick={() => HandleGetWeather()}
        style={{ width: "100%" }}
      >
        Pesquisar
      </Button>
    </>
  );
}
