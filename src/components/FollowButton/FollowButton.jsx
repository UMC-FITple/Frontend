import { useState } from "react";
import { Container } from "./FollowButton.style";

function FollowButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Container onClick={handleClick} isClicked={isClicked}>
      팔로우
    </Container>
  );
}

export default FollowButton;
