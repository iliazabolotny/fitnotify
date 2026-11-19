import { FC, PropsWithChildren } from 'react';
import {SafeAreaView, View} from 'react-native';

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
    return (<SafeAreaView className='flex-1 bg-[#E9D1AF]'>
            <View>{children}</View>
        </SafeAreaView>)
}

export default Layout;