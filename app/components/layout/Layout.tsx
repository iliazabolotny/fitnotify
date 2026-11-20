
import { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Layout: FC<PropsWithChildren> = ({ children }) => {

    return (
        <SafeAreaView
            className="flex-1  bg-[#F2F2F2]">
            <View>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default Layout