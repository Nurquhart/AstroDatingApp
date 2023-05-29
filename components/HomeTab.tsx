import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigate} from 'react-router-native';
import Matches from './Matches';
import Profile from './Profile';
import Swipe from './Swipe';

interface HomeTabProps {
  initialTab?: 'swipe' | 'matches' | 'profile';
}

const HomeTab = (props: HomeTabProps) => {
  const {initialTab} = props;
  const navigate = useNavigate();
  const [value, setValue] = useState(initialTab ?? 'swipe');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {value === 'matches' ? <Matches /> : null}
        {value === 'swipe' ? <Swipe /> : null}
        {value === 'profile' ? <Profile /> : null}
      </View>
      <View style={styles.tabbar}>
        <Button mode="contained" onPress={() => setValue('matches')}>
          Matches
        </Button>
        <Button mode="contained" onPress={() => setValue('swipe')}>
          Swipe
        </Button>
        <Button mode="contained" onPress={() => setValue('profile')}>
          Profile
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 9,
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  container: {
    flex: 1,
  },
});

export default HomeTab;
