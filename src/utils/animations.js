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

export const zoomOut = keyframes`
from {
  opacity: 0.5;
  transform: scale(0.1) translate3d(0px, 500px, 0px)
}

to {
  opacity:1;
  transform: scale(1.0) translate3d(0px, 0px, 0px)
}
`;
