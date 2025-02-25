import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

interface HospitalCardProps {
  name: string;
  specialty: string;
  address: string;
  image: string;
}

const HospitalCard: React.FC<HospitalCardProps> = ({
  name,
  specialty,
  address,
  image,
}) => {
  return (
    <TouchableOpacity style={styles.card}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>แนะนำ</Text>
        </View>
      </View>

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.hospitalName}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
        <Text style={styles.address}>{address}</Text>

        {/* Footer Section */}
        <View style={styles.footer}>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={16} color="#f4b400" />
            <Text style={styles.ratingText}> 4.5 (1,582 รีวิว)</Text>
          </View>
          <View style={styles.iconsContainer}>
            <TouchableOpacity>
              <FontAwesome5 name="heart" size={20} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="share" size={20} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 180,
  },
  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#ff5722",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  detailsContainer: {
    padding: 10,
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  specialty: {
    fontSize: 14,
    color: "#666",
  },
  address: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
    color: "#333",
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 15,
  },
});

export default HospitalCard;
