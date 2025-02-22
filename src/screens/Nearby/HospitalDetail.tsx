// import React from 'react';
// import { View, Text, StyleSheet, Button, Linking } from 'react-native';

// const HospitalDetail = ({ route }: { route: { params: { hospital: any } } }) => {
//   const { hospital } = route.params; // รับข้อมูลจาก `NearbyScreen`

//   const handleVisitWebsite = () => {
//     Linking.openURL(hospital.website); // เปิดเว็บไซต์โรงพยาบาล
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>{hospital.name}</Text>
//       <Text style={styles.details}>Specialty: {hospital.specialty}</Text>
//       <Text style={styles.details}>Address: {hospital.address}</Text>
//       <Text style={styles.details}>Phone: {hospital.phone}</Text>
//       <Text style={styles.details}>
//         Distance: {hospital.distance ? `${hospital.distance.toFixed(2)} km` : 'Calculating...'}
//       </Text>

//       <Button title="Visit Website" onPress={handleVisitWebsite} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f8f8f8',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   details: {
//     fontSize: 16,
//     marginVertical: 5,
//   },
// });

// export default HospitalDetail;
