import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    // opacity: 0
  },
  box: {
    marginTop: 10,
    marginLeft: 330,
    borderWidth: 1,
    width: 50,
    height: 25,
    borderRadius: 20,
    paddingTop: 2,
    paddingLeft: 2,
    paddingBottom: 2,
    backgroundColor: '#27173A',
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 1,
  },
  sun: {
    width: 19,
    height: 19,
    backgroundColor: '#FFC207',
    borderRadius: 10,
  },
  shadow: {
    width: 17,
    height: 17,
    backgroundColor: '#27173A',
    borderRadius: 10,
    marginTop: 0.6,
    marginLeft: -4,
  },
  c3: {
    width: 64,
    height: 15,
    marginTop: 200,
    marginLeft: 100,
  },
});
