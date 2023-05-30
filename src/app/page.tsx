"use client";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import SearchExercise from "@/components/SearchExercise";
import { Activity } from '@phosphor-icons/react'

export default function Home() {
  return (
    <>
      <Banner />
      <SearchExercise />
      <Card icon={<Activity />} text="text 1" />
    </>
  )
}
