import * as React from 'react';
import {Component} from 'react';
import { Alert,SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';




export default class App extends Component {
   
  
  render() {
    let WebViewRef: WebView | null;
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <WebView
            ref={WEBVIEW_REF => (WebViewRef = WEBVIEW_REF)}
            onError={() => {Alert.alert('No Internet Connection',
  'Click on ok to reload',
  [
    {
      text: 'cancel',
      onPress: () => console.log('cancelled')
    },
    
    { text: 'OK', onPress: () => { WebViewRef && WebViewRef.reload(); } }
  ],
  { cancelable: false })}}
            automaticallyAdjustContentInsets={false}
            source={{ uri: 'https://jobyboard.com' }}
            allowsFullscreenVideo={true}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            style={{ marginTop: 25 }} />

        </SafeAreaView>
      );

   
  }
}
