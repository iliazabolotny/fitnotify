import { exercises } from "../app/components/screens/main/exersices/exercises.data"

export const randomExercise = () => {
    const randomIndex = Math.floor(Math.random() * exercises.length)
    return exercises[randomIndex]
}