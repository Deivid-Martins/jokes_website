import { PiCaretCircleDownFill } from "react-icons/pi";
import { DeliveryBlock, GenerateJokerButton, JokerContainer, JokerLineContainer } from "./styles";
import { useEffect, useState } from "react";

interface jokerProps {
  setup: string;
  delivery: string;
}

export function Joker() {
  const [joker, setJoker] = useState<jokerProps | null>(null);

  const getAnotherJoker = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=twopart');
    const data = await response.json();

    setJoker(data);
  };

  useEffect(() => {
    getAnotherJoker();
  }, [])

  return (
    <JokerContainer>
      <GenerateJokerButton onClick={getAnotherJoker}>
        Generate a Joker
      </GenerateJokerButton>
      
      <JokerLineContainer>
        <p>{joker && joker.setup}</p>
      </JokerLineContainer>
      <section>
        <PiCaretCircleDownFill size={32} color="#111" />
      </section>
      <JokerLineContainer>
        <DeliveryBlock>{joker && joker.delivery}</DeliveryBlock>
      </JokerLineContainer>
    </JokerContainer>
  );
}