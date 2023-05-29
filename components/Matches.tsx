import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useNavigate} from 'react-router-native';

const Match = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          marginBottom: 30,
          marginTop: 10,
        }}>
        Matches
      </Text>
      <Button
        style={styles.button}
        mode="outlined"
        onPress={() => navigate('/Message')}>
        Todd
      </Button>
      <Button
        style={styles.button}
        mode="outlined"
        onPress={() => navigate('/Message')}>
        Alan
      </Button>
      <Button
        style={styles.button}
        mode="outlined"
        onPress={() => navigate('/Message')}>
        Reggie
      </Button>
      <Button
        style={styles.button}
        mode="outlined"
        onPress={() => navigate('/Message')}>
        Rodney
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
  },
  button: {
    width: '90%',
    marginBottom: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },
});

export default Match;
