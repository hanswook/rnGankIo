// import React, {Component, Fragment} from 'react';
// import {Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// import GankItemPage from './GankItemPage';
// import axios from 'axios';

// const Tab = createMaterialTopTabNavigator();
// export default class GankPageHome extends Component {
//   constructor(props) {
//     super(props);
//     // 福利 | Android | iOS | 休息视频 | 拓展资源 | 前端 | all
//     this.state = {
//       tabData: [
//         {
//           type: 'all',
//         },
//         {
//           type: 'Android',
//         },
//         {
//           type: 'iOS',
//         },
//         {
//           type: '休息视频',
//         },
//         {
//           type: '拓展资源',
//         },
//         {
//           type: '前端',
//         },
//       ],
//     };
//     // this.fetchData();
//   }

//   fetchData() {
//     // let url = 'https://gank.io/api/v2/categories/Article';
//     // axios
//     //   .create()
//     //   .get(url)
//     //   .then((res) => {
//     //     this.setState({
//     //       tabData: res.data.data,
//     //     });
//     //   })
//     //   .catch((error) => {
//     //     console.log('test axios error:' + error);
//     //   });
//   }

//   _renderDynamicView() {
//     const _views = [];
//     for (let i = 0; i < this.state.tabData.length; i++) {
//       let type = this.state.tabData[i].type;
//       // let title = this.state.tabData[i].title;
//       _views.push(
//         <Tab.Screen key={i} name={type}>
//           {() => <GankItemPage type={type} category="Article" />}
//         </Tab.Screen>,
//       );
//     }
//     return _views;
//   }

//   render() {
//     if (this.state.tabData.length <= 0) {
//       return <View />;
//     } else {
//       return (
//         <NavigationContainer>
//           <Tab.Navigator
//             // initialRouteName={'SettingScreen'}
//             lazy={false}
//             style={{width: '100%'}}
//             lazyPreloadDistance={0}
//             //   swipeVelocityImpact={0.4}
//             tabBarPosition={'top'}
//             swipeEnabled={true}
//             tabBarOptions={{
//               labelStyle: {fontSize: 12},
//               tabStyle: {width: 100},
//               scrollEnabled: true,
//               style: {backgroundColor: 'powderblue'},
//             }}>
//             {/* <Tab.Screen name="SettingScreen" component={ac} />
//           <Tab.Screen name="ProfileScreen" component={GankItemPage} />
//           <Tab.Screen name="FeedScreen" component={GankItemPage} />
//            */}
//             {this._renderDynamicView()}
//           </Tab.Navigator>
//         </NavigationContainer>
//       );
//     }
//   }
// }
