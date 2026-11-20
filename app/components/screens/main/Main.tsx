import { FC } from "react"
import Layout from "../../layout/Layout"
import ExerciseList from "./exersices/ExerciseList"
import Logo from "./Logo"
import ToggleNotifications from "./toggle-notifications/ToggleNotififcations"

const Main: FC = ()=> {
    return (
        <Layout>
            <Logo />
            <ExerciseList />
            <ToggleNotifications />
        </Layout>
    )
}

export default Main;