import { HeaderContainer, HeaderLinksContainer } from "./styles";
import { TfiFaceSmile } from "react-icons/tfi";

export function Header() {
  return (
    <HeaderContainer>
      <a href="/"><TfiFaceSmile /> Jokes</a>

      <HeaderLinksContainer>
        <a href="https://v2.jokeapi.dev/" target="_blank">API</a>
      </HeaderLinksContainer>
    </HeaderContainer>
  );
}