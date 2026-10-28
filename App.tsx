import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function App() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.title}>Kamalbek Abylay</Text>

      <Text style={styles.likes}>Likes: {likes}</Text>
      <Pressable onPress={() => setLikes(likes + 1)} style={styles.button}>
        <Text style={styles.buttonText}>Like</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  title: { fontSize: 32 },
  likes: { fontSize: 20 },
  button: {
    minHeight: 44,
    paddingHorizontal: 24,
    justifyContent: 'center',
    backgroundColor: '#2563eb',
    borderRadius: 8,
  },
  buttonText: { color: '#fff', fontSize: 18 },
});