import { FC } from "react";
import {Text, View} from "react-native";
import Layout from "../../layout/Layout";

const Main: FC = ()=> {
    return (
        <Layout>
            <View className="items-center">
                <Text className="text-3xl text-primary">FIT Notify</Text>
            </View>
        </Layout>
    )
}

export default Main;