import React from "react";
import {View,FlatList,Text,Platform,ActivityIndicator,StyleSheet} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

const ShoppingSessionScreen = () => {
  return <View><Text>This is Shopping Session.</Text></View>;
};

ShoppingSessionScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Virtual Shopping Session',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default ShoppingSessionScreen;
