/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, StatusBar, Text} from 'react-native';

import RootNavigator from './gank/GankGirlStack';
import {Provider} from 'react-redux';
import store from './redux/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <>
        <StatusBar barStyle="white-content" />
        <SafeAreaView style={{flex: 1}}>
          <RootNavigator />
        </SafeAreaView>
      </>
    </Provider>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: '#ffffff',
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: '#ffffff',
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#ffffff',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: '#ffffff',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: '#ffffff',
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
