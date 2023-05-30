import React, { useRef, useState } from "react";
import Card from "../Card";
import { Activity, ArrowLineLeft, ArrowLineRight } from "@phosphor-icons/react";
import { Container } from "../Container";
import * as Styles from "./styled";

const CarouselExercises: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (scrollOffset: number) => {
    const newPosition = scrollPosition + scrollOffset;
    setScrollPosition(newPosition);

    if (carouselRef.current) {
      carouselRef.current.scrollLeft = newPosition;
    }
  };

  return (
    <Container>
      <h2>Carousel</h2>
      <Styles.CarouselContainer ref={carouselRef}>
        <Styles.CarouselContent>
          {/* Render the cards */}
          {[...Array(10)].map((_, index) => (
            <Card
              key={index}
              icon={<Activity width={50} height={50} />}
              text={`Card ${index + 1}`}
            />
          ))}
        </Styles.CarouselContent>
      </Styles.CarouselContainer>
      <Styles.ArrowsContainer>
        <ArrowLineLeft
          width={20}
          height={20}
          alt="Left Arrow"
          onClick={() => handleScroll(-220)}
        />
        <ArrowLineRight
          width={20}
          height={20}
          alt="Right Arrow"
          onClick={() => handleScroll(220)}
        />
      </Styles.ArrowsContainer>
    </Container>
  );
};

export default CarouselExercises;
