import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import PendingTaskScreen from '../screens/PendingTaskScreen';

export const AppStackNavigator = createStackNavigator({
  BookDonateList : {
    screen : PendingTaskScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'BookDonateList'
  }
);
