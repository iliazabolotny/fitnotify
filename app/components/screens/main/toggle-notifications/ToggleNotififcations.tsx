import {FC} from 'react'
import * as Notifications from 'expo-notifications'
import { Pressable, View, Text, Alert, Platform } from 'react-native'

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
    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'Default',
            importance: Notifications.AndroidImportance.MAX,
        })
    }

    const { status: existingStatus } =
        await Notifications.getPermissionsAsync()

    let finalStatus = existingStatus

    if (existingStatus !== 'granted') {
        const { status } =
            await Notifications.requestPermissionsAsync()

        finalStatus = status
    }

    if (finalStatus !== 'granted') {
        Alert.alert('Permission denied', 'Enable notifications in settings.')
        return
    }

    await Notifications.scheduleNotificationAsync({
        content: {
            title: 'FIT Notification',
            body: 'FIT Notification',
            sound: true
        },
        trigger: {
            type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
            seconds: 8,
        }
    })
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