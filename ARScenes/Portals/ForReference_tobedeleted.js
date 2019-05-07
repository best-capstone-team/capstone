// 'use strict';

// import React, { Component } from '../../node_modules/react';

// import { StyleSheet } from 'react-native';

// import {
//   ViroARScene,
//   ViroText,
//   ViroConstants,
//   ViroBox,
//   ViroMaterials,
// } from '../../node_modules/react-viro';

// export default class HelloWorldSceneAR extends Component {
//   constructor() {
//     super();

//     // Set initial state here
//     this.state = {
//       text: 'Initializing AR...',
//     };

//     // bind 'this' to functions
//     this._onInitialized = this._onInitialized.bind(this);
//   }

//   render() {
//     return (
//       <ViroARScene onTrackingUpdated={this._onInitialized}>
//         <ViroText
//           text={this.state.text}
//           scale={[0.5, 0.5, 0.5]}
//           position={[0, 0, -1]}
//           style={styles.helloWorldTextStyle}
//         />
//         <ViroBox
//           position={[0, -0.5, -1]}
//           scale={[0.3, 0.3, 0.1]}
//           materials={['grid']}
//         />
//       </ViroARScene>
//     );
//   }

//   _onInitialized(state, reason) {
//     if (state == ViroConstants.TRACKING_NORMAL) {
//       this.setState({
//         text: 'Hello World!',
//       });
//     } else if (state == ViroConstants.TRACKING_NONE) {
//       // Handle loss of tracking
//     }
//   }
// }

// let styles = StyleSheet.create({
//   helloWorldTextStyle: {
//     fontFamily: 'Arial',
//     fontSize: 30,
//     color: '#ffffff',
//     textAlignVertical: 'center',
//     textAlign: 'center',
//   },
// });


// module.exports = HelloWorldSceneAR;
