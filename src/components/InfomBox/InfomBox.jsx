import { Container, Title, Desc } from "./InfomBox.style"


function InfomBox(props) {
    const Data = props

  return (
    <Container>
        <Title>{Data.Name}</Title>
        <Desc>{Data.Infom}</Desc>
        

    </Container>
  )
}

export default InfomBox