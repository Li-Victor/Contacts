import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import contacts, { compareNames } from './contacts';
import { 
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';

import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const ContactsTab = createStackNavigator({
  AddContact: AddContactScreen,
  ContactList: ContactListScreen,
  ContactDetails: ContactDetailsScreen
}, {
  initialRouteName: 'ContactList',
  defaultNavigationOptions: {
    headerTintColor: '#a41034'
  }
});

ContactsTab.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={'ios-contacts'}
      size={25}
      color={tintColor}
    />
  )
}

const MainNavigator = createBottomTabNavigator({
  Contacts: ContactsTab,
  Settings: SettingsScreen
}, {
  tabBarOptions: {
    activeTintColor: '#a41034'
  }
});

const AppNavigator = createSwitchNavigator({
  Main: MainNavigator,
  Login: LoginScreen
}, {
  initialRouteName: 'Login'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  state = {
    contacts: contacts,
  };

  addContact = newContact => {
    this.setState(prevState => ({
      showForm: false,
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return <AppContainer screenProps={{ contacts: this.state.contacts, addContact: this.addContact }} />
  }
}

