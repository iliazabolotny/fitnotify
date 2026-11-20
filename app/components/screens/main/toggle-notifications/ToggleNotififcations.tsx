import {FC} from 'react'
import {Pressable, View, Text} from 'react-native'

const ToggleNotificaitons: FC = () => {
    return (
        <View className='items-center mt-6'>
            <Pressable className='bg-primary bg-[#4B3621] px-5 py-3 rounded'>
                <Text className='text-xl text-white font-medium'>Enable Notifications</Text>
            </Pressable>
        </View>
    )
}

export default ToggleNotificaitons