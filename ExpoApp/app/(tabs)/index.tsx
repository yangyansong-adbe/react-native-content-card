import { View, StyleSheet, TouchableOpacity, Text, useWindowDimensions } from 'react-native';
import CustomGreenArea from 'authoring-ui/CustomGreenArea';

const BUTTON_COLOR = '#007AFF'; // Default iOS blue button color
const BUTTON_TEXT_COLOR = '#fff';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const rectHeight = (width * 4) / 8;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>button 1</Text>
        </TouchableOpacity>
        <View style={{ width: 16 }} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>button 2</Text>
        </TouchableOpacity>
        <View style={{ width: 16 }} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>button 3</Text>
        </TouchableOpacity>
      </View>
      <CustomGreenArea />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: BUTTON_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: BUTTON_TEXT_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
  },
  rectangle: {
    backgroundColor: '#90ee90', // light green
    alignSelf: 'stretch',
  },
});
