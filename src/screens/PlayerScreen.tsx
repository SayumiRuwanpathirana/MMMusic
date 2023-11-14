import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface PlayerScreen{}

const   PlayerScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PlayerScreen</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {}
});

export default PlayerScreen;