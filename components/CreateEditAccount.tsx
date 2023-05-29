import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useNavigate} from 'react-router-native';

interface CreateEditAccountProps {
  create: boolean;
}

const CreateEditAccount = (props: CreateEditAccountProps) => {
  const {create} = props;

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthplace, setBirthplace] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.cursiveText}>
          {create ? 'Create Account' : 'Update Account'}
        </Text>
        <TextInput
          style={styles.textbox}
          label="First Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <TextInput
          style={styles.textbox}
          label="Last Name"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
        <TextInput
          style={styles.textbox}
          label="Birthday"
          value={birthday}
          onChangeText={text => setBirthday(text)}
        />
        <TextInput
          style={styles.textbox}
          label="Birth Time"
          value={birthTime}
          onChangeText={text => setBirthTime(text)}
        />
        <TextInput
          style={styles.textbox}
          label="Birthplace"
          value={birthplace}
          onChangeText={text => setBirthplace(text)}
        />
        {create ? (
          <Button
            mode="contained"
            onPress={() => navigate('/Profile')}
            style={styles.button}>
            Sign up
          </Button>
        ) : (
          <Button
            mode="contained"
            onPress={() => navigate('/Profile')}
            style={styles.button}>
            Save
          </Button>
        )}
        <Button
          mode="text"
          onPress={() => (create ? navigate('/') : navigate('/Profile'))}>
          Back
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textbox: {
    width: '90%',
    marginBottom: 10,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '60%',
  },
  cursiveText: {
    fontFamily: 'Snell Roundhand',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 5,
  },
});

export default CreateEditAccount;
