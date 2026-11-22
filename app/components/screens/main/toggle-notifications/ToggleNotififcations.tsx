import {FC} from 'react'
import * as Notifications from 'expo-notifications'
import { Pressable, View, Text, Alert } from 'react-native'

Notifications.setNotificationHandler({
    handleNotification: async()=>({
        shouldShowAlert: true,
        shouldPlayground: true,
        shouldSetBadge: true,
        shouldShowBanner: true,
        shouldPlaySound: true,
        shouldShowList: true
    })
})

async function schedulePushNotification() {
    try {
        const { status } = await Notifications.requestPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert('Permission denied', 'Enable notifications in settings.')
            return
        }

        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'FIT Notification',
                body: 'Your notification is working!',
            },
            trigger: {
                type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
                seconds: 10,
            },
        })

        Alert.alert('Success', 'Notification scheduled for 8 seconds.')

    } catch (error) {
        console.error('Notification error:', error)
        Alert.alert('Notification Error', String(error))
    }
}

const ToggleNotificaitons: FC = () => {
    
    return (
        <View className='items-center mt-6'>
            <Pressable
            onPress={async()=>{
                await schedulePushNotification()
            }}
             className='bg-primary bg-[#4B3621] px-5 py-3 rounded'>
                <Text className='text-xl text-white font-medium'>Enable Notifications</Text>
            </Pressable>
        </View>
    )
}

export default ToggleNotificaitons