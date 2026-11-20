import {FC} from 'react'
import {Text, View} from 'react-native'
import { exercises } from './exercises.data'

const ExerciseList: FC = () => {
    return (
            <View className='mt-8'>
               {exercises.map(name => (
                <Text key={name} className='text-lg opacity-30 mb-2'>
                    {`${String.fromCharCode(8227)} ${name}`}
                </Text>))}
            </View>
    )
}

export default ExerciseList