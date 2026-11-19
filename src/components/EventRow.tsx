import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  ZoomIn,
} from 'react-native-reanimated';
import type { CampusEvent } from '../data/events';

type Props = {
  event: CampusEvent;
  saved?: boolean;
  isSaved?: boolean;
  onPress: () => void;
  onToggleSaved: () => void;
};

export function EventRow({
  event,
  saved: savedProp,
  isSaved,
  onPress,
  onToggleSaved,
}: Props) {
  const saved = savedProp ?? isSaved ?? false;

  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} layout={LinearTransition}>
      <Swipeable
        friction={2}
        rightThreshold={60}
        renderRightActions={(_progress, _translation, swipeable) => (
          <Pressable
            onPress={() => {
              onToggleSaved();
              swipeable.close();
            }}
            style={styles.action}
          >
            <Text style={styles.actionText}>{saved ? 'Unsave' : 'Save'}</Text>
          </Pressable>
        )}
      >
        <Pressable
          onPress={onPress}
          onLongPress={onToggleSaved}
          style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
        >
          <View style={styles.titleRow}>
            <Text style={styles.title}>{event.title}</Text>
            {saved && <Animated.Text entering={ZoomIn}>★ Saved</Animated.Text>}
          </View>
          <Text>{event.date} • {event.place}</Text>
        </Pressable>
      </Swipeable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    minHeight: 44,
  },
  cardPressed: {
    backgroundColor: '#e0e0e0',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  action: {
    minHeight: 44,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
