import { FC, PropsWithChildren } from 'react';
import {View} from 'react-native';

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
    return <View className='bg-[#1D1C2]'>{children}</View>
}

export default Layout;