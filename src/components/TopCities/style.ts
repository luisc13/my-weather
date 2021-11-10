import styled from "styled-components";

export const TopCity = styled.div`
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const CityContainer = styled.div`
  flex: 1;
  background: #fff;
  height: 15px;
  border-radius: 8px;
  border: 1px solid black;
  padding: 3rem 5rem;
  margin-top: 1rem;
  margin-right: 1rem;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  span{
    align-self: center;
  }
`;