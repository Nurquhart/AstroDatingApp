import React, {Fragment, useState} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigate} from 'react-router-native';

const SignInPage = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const navigate = useNavigate();

  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.background}>
      <Text
        style={{
          fontFamily: 'Snell Roundhand',
          fontWeight: 'bold',
          fontSize: 52,
        }}>
        In The Stars...
      </Text>
      {!signIn ? (
        <Fragment>
          <Button mode="contained" onPress={() => navigate('/CreateAccount')}>
            Sign Up
          </Button>
          <Button mode="contained" onPress={() => setSignIn(true)}>
            Log In
          </Button>
        </Fragment>
      ) : (
        <Fragment>
          <TextInput
            style={styles.button}
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.button}
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Button mode="contained" onPress={() => navigate('/HomeTab')}>
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

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '70%',
  },
});

export default SignInPage;
