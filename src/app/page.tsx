"use client";
import Banner from "@/components/Banner";
import CarouselExercises from "@/components/CarouselExercises";
import SearchExercise from "@/components/SearchExercise";

export default function Home() {
  return (
    <>
      <Banner />
      <SearchExercise />
      <CarouselExercises />
    </>
  )
}
