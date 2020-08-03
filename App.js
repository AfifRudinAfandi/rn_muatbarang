import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Logo from './assets/logo_beta.svg'

const App = () => {
  return (
    <>
      <StatusBar hidden={true} barStyle="light-content" backgroundColor="#24A724"/>
        <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center', flex:1}}>
            <Logo width={120}/>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
