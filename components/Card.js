import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderLeftWidth: 3,
    borderLeftColor: '#00A859',
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 10,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    marginVertical: 10,
    marginHorizontal: 18,
  },
});
