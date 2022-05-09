import styled from "styled-components";
import normalize from "./normalize";

const Space = styled.View`
  height: ${({ h }) => (h ? normalize(h) : 0)}px;
  width: ${({ w }) => (w ? normalize(w) : 0)}px;
`;

export default Space;
