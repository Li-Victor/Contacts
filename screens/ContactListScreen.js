import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import SectionListContacts from '../SectionListContacts';

export default class ContactListScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Contacts',
      headerRight: (
        <Button
          title="Add" 
          color="#a41034"
          onPress={() => {
          navigation.navigate('AddContact');
        }} />
      )
    }
  }

  state = {
    showContacts: true,
  };

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  };

  showForm = () => {
    this.props.navigation.navigate('AddContact');
  };

  // addContact = newContact => {
  //   this.setState(prevState => ({
  //     showForm: false,
  //     contacts: [...prevState.contacts, newContact],
  //   }));
  // };


  // sort = () => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.sort(compareNames),
  //   }));
  // };

  render() {
    return (
      <View style={styles.container}>
        {this.state.showContacts && (
          <SectionListContacts
            contacts={this.props.screenProps.contacts}
            onSelectContact={(contact) => {
              this.props.navigation.navigate('ContactDetails', {
                phone: contact.phone,
                name: contact.name
              });
            }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
