import { StyleSheet, Text, View } from 'react-native';
import Main from './app/components/screens/main/Main';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <Main />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
