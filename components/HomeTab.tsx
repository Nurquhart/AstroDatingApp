import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, SegmentedButtons, TextInput} from 'react-native-paper';
import {useNavigate} from 'react-router-native';
import Matches from './Matches';
import Profile from './Profile';
import Swipe from './Swipe';

const HomeTab = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('swipe');

  return (
    <View style={styles.container}>
      {value === 'matches' ? <Matches /> : null}
      {value === 'swipe' ? <Swipe /> : null}
      {value === 'profile' ? <Profile /> : null}
      <Button mode="contained" onPress={() => navigate('/')} disabled={false}>
        Sign out
      </Button>
      <SegmentedButtons
        style={styles.tabs}
        value={value}
        onValueChange={setValue}
        buttons={[
          {value: 'matches', label: 'Matches'},
          {value: 'swipe', label: 'Swipe'},
          {value: 'profile', label: 'Profile'},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  tabs: {
    position: 'absolute',
    paddingTop: '200%',
  },
});

export default HomeTab;
