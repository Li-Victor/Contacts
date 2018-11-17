import React from 'react';
import { Button, Text, View } from 'react-native';

export default class ContactDetailsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('name')
  })

  _goToRandom = () => {
    const contacts = this.props.screenProps.contacts;
    const phone = this.props.navigation.getParam('phone');
    let randomContact;
    while (!randomContact) {
      const randomIndex = Math.floor(Math.random() * contacts.length);
      if (contacts[randomIndex].phone !== phone) {
        randomContact = contacts[randomIndex];
      }
    }

    this.props.navigation.push('ContactDetails', {
      name: randomContact.name,
      phone: randomContact.phone
    });
  }

  render() {
    return (
      <View>
        <Text>{this.props.navigation.getParam('phone')}</Text>
        <Button title="Go to random Contact" onPress={() => {
          this._goToRandom();
        }} />
      </View>
    );
  }
}
