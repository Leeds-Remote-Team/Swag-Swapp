import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const ClothesItem = () => {
  const tags = ['category', 'origin', 'color'];

  const handleWearToday = () => {
    Alert.alert("Marked as Worn", "You are wearing this item today!");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: "https://img.icons8.com/ios/5000/eeeeee/jumper.png" }}
      />
      <Text style={styles.name}>Clothes Item Name</Text>
      
      <View style={styles.tagContainer}>
        {tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.descriptionLabel}>Description:</Text>
      <Text style={styles.descriptionText}>This is a short description of the item.</Text>
      <Text style={styles.descriptionText}>Last Worn: 10/08/2024</Text>
      <Text style={styles.descriptionText}>Wear Frequency: 5</Text>

      <TouchableOpacity style={styles.wearTodayButton} onPress={handleWearToday}>
        <Text style={styles.buttonText}>Wear Today</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34495E',
    marginBottom: 10,
    textAlign: 'center',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
  },
  tag: {
    backgroundColor: '#3498db',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  tagText: {
    color: '#fff',
    fontSize: 14,
  },
  descriptionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#2C3E50',
  },
  descriptionText: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 5,
  },
  wearTodayButton: {
    backgroundColor: '#1E8449',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ClothesItem;