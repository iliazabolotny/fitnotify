import { FC } from "react";
import {Text, View} from "react-native";
import Layout from "../../layout/Layout";

const Main: FC = ()=> {
    return (
        <Layout>
            <Text className="text'xl text-primary">FIT Reminders</Text>
            <Text>Main</Text>
        </Layout>
    )
}

export default Main;