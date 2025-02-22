import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface HospitalCardProps {
  name: string;
  specialty: string;
  address: string;
  image: string;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ name, specialty, address, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
        <Text style={styles.address}>{address}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    elevation: 3,
    shadowColor: '#000',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  specialty: {
    fontSize: 14,
    color: 'gray',
  },
  address: {
    fontSize: 12,
    color: 'gray',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 5,
    marginTop: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default HospitalCard;
