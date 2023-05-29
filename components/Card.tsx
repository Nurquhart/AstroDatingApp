import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Text} from 'react-native-paper';

interface CardProps {
  name: string;
  sign: string;
  bio: string;
  profilePic?: string;
}

const Card = (props: CardProps) => {
  const {name, sign, bio, profilePic} = props;

  const profileUrl = '../images/mona-lisa.jpg';

  return (
    <View style={styles.container}>
      <Avatar.Image
        style={styles.avatar}
        size={225}
        source={require(profileUrl)}
      />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.signText}>Sign: {sign}</Text>
      <Text style={styles.textSecondary}>{bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 10,
  },
  signText: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 50,
  },
  textSecondary: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 50,
  },
});

export default Card;
