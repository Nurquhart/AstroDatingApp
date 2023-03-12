import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigate} from 'react-router-native';

const Match = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={() => navigate('/')}>
        Sign out
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default Match;
