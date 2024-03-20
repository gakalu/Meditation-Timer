
import { StyleSheet, Text, View } from 'react-native';
import TimerComponent from './Components/Timer';

export default function App() {
  return (
    <View style={styles.container}>
    <Image
    source={{ uri:'https://img.freepik.com/free-vector/silhouette-female-yoga-pose-against-mandala-design_1048-13082.jpg?size=338&ext=jpg'}}
    style={{ width: 300, height: 300 }}
    />
     <TimerComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
