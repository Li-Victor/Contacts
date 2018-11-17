import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Constants } from 'expo';

import contacts, { compareNames } from './contacts';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';

const MainNavigator = createSwitchNavigator({
  AddContact: AddContactScreen,
  ContactList: ContactListScreen
}, {
  initialRouteName: 'ContactList'
});

const AppNavigator = createAppContainer(MainNavigator);

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
    return <AppNavigator screenProps={{ contacts: this.state.contacts, addContact: this.addContact }} />
  }
}

