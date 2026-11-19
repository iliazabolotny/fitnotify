import Main from './app/components/screens/main/Main';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
      <StatusBar style="light" />
    </>
  );
}

