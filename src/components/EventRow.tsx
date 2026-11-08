import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

type Props = {
  event: any;
  onPress: () => void;
  onLongPress: () => void;
  isSaved: boolean;
};

export function EventRow({ event, onPress, onLongPress, isSaved }: Props) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <Text style={styles.title}>{event.title} {isSaved && '★ Saved'}</Text>
      <Text>{event.date} • {event.place}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    minHeight: 44, // Required by handout
  },
  cardPressed: {
    backgroundColor: '#e0e0e0', // Pressed state
  },
  title: { fontSize: 16, fontWeight: 'bold' },
});