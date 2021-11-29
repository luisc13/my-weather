import { Container, Content } from "./styles"
import  Cloud  from '../../assets/BlueCloud.svg';

export default function Header() {
  return(
    <Container>
      <Content>
        <img src={Cloud} alt="" />
        <h1>My Weather</h1>
        <img src={Cloud} alt="" />
      </Content>
    </Container>
  )
}
