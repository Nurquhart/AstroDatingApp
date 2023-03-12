import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigate} from 'react-router-native';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={() => navigate('/')} disabled={false}>
        Sign out
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 100,
  },
});

export default Profile;
