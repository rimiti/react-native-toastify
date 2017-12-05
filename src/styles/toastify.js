import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    elevation: 999,
    alignItems: 'center',
    zIndex: 10000,
  },
  content: {
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: '#fff',
  },
});
