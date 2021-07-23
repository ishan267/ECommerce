import React from "react";

import { View,Text } from "react-native";

const ChatDetailScreen = () => {


  return <View><Text>Chat details</Text></View>;
};

ChatDetailScreen.navigationOptions = navData => {
    return {
      headerTitle: navData.navigation.getParam('userName')
    };
  };

export default ChatDetailScreen;
