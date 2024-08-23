import { Container, Items, SubItems } from "./Profile.style";

function Profile(...props) {
  console.log(props);
  return (
    <Container>
      <Items>{props[0].userProfile}</Items>
      <SubItems>
        <img src="/assets/HeartGray.svg" height={16}/>{props[0].userFit}
      </SubItems>
      <SubItems>
        <img src="/assets/HangerGray.svg" height={16}/>
        {props[0].userStyle}
      </SubItems>
    </Container>
  );
}

export default Profile;
