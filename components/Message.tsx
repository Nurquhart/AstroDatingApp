import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useNavigate} from 'react-router-native';

const Message = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.background}>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigate('/Matches')}>
        Back
      </Button>
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 50,
          }}>
          Messaging...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    paddingTop: 60,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '30%',
  },
});

export default Message;
