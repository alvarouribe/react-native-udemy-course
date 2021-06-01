import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'http://www.flyingdolly.co.nz' }}
        style={{ backgroundColor: 'blue' }} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  }
});

export default WebViewScreen;
