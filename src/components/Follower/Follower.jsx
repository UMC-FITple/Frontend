import { Container, FollowerNum, Text } from "./Follower.style";

function Follower({ follower }) {
  return (
    <Container>
      <FollowerNum>{follower}</FollowerNum>
      <Text>팔로워</Text>
    </Container>
  );
}

export default Follower;
