import { keyframes } from "styled-components";

export const fadeIn = keyframes`
from {
  opacity: 0.6;
  transform: translate3d(-400px, 0, 0)
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;
