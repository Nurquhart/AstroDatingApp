import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from './Card';
import {sampleUserData, User} from './types';

const Swipe = () => {
  const user: User =
    sampleUserData[Math.floor(Math.random() * sampleUserData.length)];

  return (
    <View style={styles.container}>
      <Card
        name={user.firstName + ' ' + user.lastName[0] + '.'}
        sign={user.sign}
        bio={user.bio}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Swipe;
