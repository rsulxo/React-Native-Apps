import React from 'react';
import { StyleSheet,View, Image } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={{width: 50, height: 50}}
          source={{uri: ''}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDA7DF',
  },
});
