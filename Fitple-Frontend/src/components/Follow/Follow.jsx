import { Container, FollowNum, Text } from "./Follow.style";

function Follow({follow}) {
  return (
    <Container>
      <FollowNum>{follow}</FollowNum>
      <Text>팔로잉</Text>
    </Container>
  );
}

export default Follow;
