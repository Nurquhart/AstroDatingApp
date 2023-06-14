import React, {Fragment, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useNavigate} from 'react-router-native';
import {useTheme} from 'react-native-paper';

const SignInPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={[styles.background, {backgroundColor: theme.colors.background}]}>
      <Text style={styles.cursiveText}>In The Stars...</Text>
      {!signIn ? (
        <Fragment>
          <Button
            style={styles.signUpButton}
            mode="contained"
            onPress={() => navigate('/CreateAccount')}>
            Sign Up
          </Button>
          <Button
            style={styles.logInButton}
            mode="text"
            onPress={() => setSignIn(true)}>
            Log In
          </Button>
        </Fragment>
      ) : (
        <Fragment>
          <TextInput
            style={styles.textbox}
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.textbox}
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Button mode="contained" onPress={() => navigate('/Profile')}>
            Log In
          </Button>
          <Button mode="text" onPress={() => setSignIn(false)}>
            Back
          </Button>
        </Fragment>
      )}
    </View>
  );
};

export default SignInPage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButton: {
    width: '50%',
    marginBottom: 10,
  },
  logInButton: {
    width: '30%',
  },
  textbox: {
    width: '70%',
    marginBottom: 10,
  },
  cursiveText: {
    fontFamily: 'Snell Roundhand',
    fontWeight: 'bold',
    fontSize: 52,
    marginBottom: 5,
  },
});
