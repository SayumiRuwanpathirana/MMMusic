import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

interface HomeScreen {}

const HomeScreen = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{
        navigation.push('Player');

      }}>
          <Text>HomeScreen</Text>
      </TouchableOpacity>
      
    </View>
  );
};



const styles = StyleSheet.create({
  container: {}
});

export default HomeScreen;