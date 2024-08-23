import { Container } from "./FeedButton.style";

function FeedButton({ icon, alt, onClick, color }) {
  return (
    <Container onClick={onClick} style={{color:color}}>
      <img src={icon} alt={alt} height={40} width={40} />
      {alt}
    </Container>
  );
}

export default FeedButton;
