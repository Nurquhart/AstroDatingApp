import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useNavigate} from 'react-router-native';

const CreateEditAccount = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthplace, setBirthplace] = useState('');

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={() => navigate('/')}
        style={styles.button}>
        Back
      </Button>
      <View style={styles.formContainer}>
        <TextInput
          label="First Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <TextInput
          label="Last Name"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
        <TextInput
          label="Birthday"
          value={birthday}
          onChangeText={text => setBirthday(text)}
        />
        <TextInput
          label="Birth Time"
          value={birthTime}
          onChangeText={text => setBirthTime(text)}
        />
        <TextInput
          label="Birthplace"
          value={birthplace}
          onChangeText={text => setBirthplace(text)}
        />
        <Button
          mode="contained"
          onPress={() => navigate('/HomeTab')}
          style={styles.button}>
          Sign up
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  formContainer: {
    justifyContent: 'center',
  },
  button: {
    width: '20%',
  },
});

export default CreateEditAccount;
