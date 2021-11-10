import styled from "styled-components";

export const WeatherContainer = styled.div`
  flex: 1;
  background: #fff;
  height: 20rem;
  position: relative;
  border-radius: 8px;
  border: 1px solid black;
  padding: 3rem 5rem;
  margin-top: 5rem;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  
  span{
    display: block;
  }
  img{
    width: 100%;
    height: 100%;
  }
`;
