import React from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { Input } from './LoginInput';
import * as firebase from 'firebase';
require('../firebaseInitializer');

export default class Signup extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('users');
    this.state = {
      email: '',
      password: '',
      name: '',
      loading: false,
      error: '',
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.signUpAndSave = this.signUpAndSave.bind(this);
  }

  handleSignUp() {
    const { email, password } = this.state;
    this.setState({ loading: true });
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ error: '', loading: false });
          this.props.history.push('/entryarscene');
        });
    } catch (error) {
      this.setState({ error: 'Cannot authenticate', loading: false });
      this.props.history.push('/');
    }
  }

  saveUser() {
    const { email } = this.state;
    firebase
      .firestore()
      .collection('users')
      .doc(email)
      .set({ name: this.state.name });
  }

  signUpAndSave() {
    this.saveUser();
    this.handleSignUp();
  }

  renderCurrentState() {
    const { loading } = this.state;
    if (loading) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <View style={styles.form}>
        <Input
          placeholder={`What's your name?`}
          label={'Your name'}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <Input
          placeholder={'Enter your email'}
          label={'Email'}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <Input
          placeholder={'Enter your password'}
          label={'Password'}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <TouchableHighlight
          style={styles.buttons}
          onPress={this.signUpAndSave}
          underlayColor="#04152b"
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttons}
          onPress={() => this.props.history.push('/')}
          underlayColor="#04152b"
        >
          <Text style={styles.buttonText}>Go back</Text>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    return <View style={styles.container}>{this.renderCurrentState()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    // backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttons: {
    height: 50,
    width: 160,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ac3c0b',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    marginBottom: 15,
    padding: 20,
  },
});
