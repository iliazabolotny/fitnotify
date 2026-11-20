import { FC } from "react"
import Layout from "../../layout/Layout"
import ExerciseList from "./exersices/ExerciseList"
import Logo from "./exersices/Logo"

const Main: FC = ()=> {
    return (
        <Layout>
            <Logo />
            <ExerciseList />
        </Layout>
    )
}

export default Main;