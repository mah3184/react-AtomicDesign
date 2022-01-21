import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return (
    <div>
      <SButton onClick={onClick}>{children}</SButton>
    </div>
  );
};
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
