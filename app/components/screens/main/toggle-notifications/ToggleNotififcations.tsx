import { FC, useState } from 'react'
import * as Notifications from 'expo-notifications'
import { Pressable, View, Text, Alert } from 'react-native'
import { randomExercise } from '../../../../../helpers/random'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldShowBanner: true,
        shouldShowList: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
})

async function schedulePushNotification() {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Сделай сейчас!',
                body: randomExercise(),
            },
            trigger: null,
        })
}

async function registerNotifications() {
        try {
        const { status } = await Notifications.requestPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert('Permission denied', 'Enable notifications in settings.')
            return
        }
    } catch (error) {
        Alert.alert('Notification Error', String(error))
    }
}

const ToggleNotificaitons: FC = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(false);
    
    return (
        <View className='items-center mt-6'>
            <Pressable
            onPress={async()=>{
                if (!notificationsEnabled) {
                    setNotificationsEnabled(true);
                    registerNotifications();
                } else {
                     await schedulePushNotification()
                }
            }}
             className='bg-primary bg-[#4B3621] px-5 py-3 rounded'>
                <Text className='text-xl text-white font-medium'>{notificationsEnabled ? 'Выбрать' : 'Разрешить нотификации'}</Text>
            </Pressable>
        </View>
    )
}

export default ToggleNotificaitons