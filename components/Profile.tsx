import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Avatar, Button, Text} from 'react-native-paper';
import {useNavigate} from 'react-router-native';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <Avatar.Image
        style={styles.avatar}
        size={225}
        source={require('../images/mona-lisa.jpg')}
      />
      <Text style={styles.text}>Nathan Urquhart</Text>
      <Text style={styles.textSecondary}>This is my bio...</Text>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigate('/EditAccount')}>
        Edit account
      </Button>
      <Button style={styles.button} mode="text" onPress={() => navigate('/')}>
        Sign out
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  avatar: {
    marginTop: 30,
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 10,
  },
  textSecondary: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 50,
  },
  button: {
    width: '45%',
  },
});

export default Profile;
