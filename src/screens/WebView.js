import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewScreen = () => {
  return <WebView source={{ uri: 'http://www.flyingdolly.co.nz' }} />
};

const styles = StyleSheet.create({});

export default WebViewScreen;