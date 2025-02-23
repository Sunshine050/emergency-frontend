import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";


const RequestStatusScreen = ({ navigation }: any) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [municipalPhone, setMunicipalPhone] = useState<string | null>(null);

  // ซ่อน Header
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    const fetchMunicipalPhone = async () => {
      try {
        const mockPhone = "เทศบาล";
        setMunicipalPhone(mockPhone);
      } catch (error) {
        console.error("Error fetching municipal phone:", error);
      }
    };
    fetchMunicipalPhone();

    // จำลองการอัปเดตสถานะเป็นระยะทุก 2 วินาที
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < 2 ? prev + 1 : prev));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    { id: 0, label: "Move", icon: "ambulance",},
    { id: 1, label: "Enroute", icon: "route",},
    { id: 2, label: "Arrive", icon: "hospital",}
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request Status</Text>

      <View style={styles.progressContainer}>
        <View style={styles.stepsContainer}>
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {index > 0 && (
                <View
                  style={[
                    styles.connector,
                    { backgroundColor: currentStep >= index ? "#2196F3" : "#E0E0E0" },
                  ]}
                />
              )}
              <View
                style={[
                  styles.stepCircle,
                  {
                    backgroundColor: currentStep >= index ? "#2196F3" : "#FFFFFF",
                    borderColor: currentStep >= index ? "#2196F3" : "#E0E0E0",
                  },
                ]}
              >
                <FontAwesome5 
                  name={step.icon} 
                  size={20} 
                  color={currentStep >= index ? "#FFFFFF" : "#E0E0E0" }
                />
              </View>
            </React.Fragment>
          ))}
        </View>
        <View style={styles.labelContainer}>
          {steps.map((step, index) => (
            <Text 
              key={step.id} 
              style={[
                styles.stepLabel,
                { color: currentStep >= index ? "#2196F3" : "#757575" }
              ]}
            >
              {step.label}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.ambulanceContainer}>
        <FontAwesome5 name="ambulance" size={110} color="#2196F3" />
        <View style={styles.statusCard}>
          <Text style={styles.statusText}>
            {currentStep === 0 ? "Dispatching ambulance..." :
             currentStep === 1 ? "On the way to your location" :
             "Arriving at destination"}
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.callButton}
          onPress={() => municipalPhone && Linking.openURL(`tel:${municipalPhone}`)}
        >
          <MaterialIcons name="phone" size={24} color="#2196F3" />
          <Text style={styles.callText}>Call {municipalPhone}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.callButton}
          onPress={() => Linking.openURL("tel:1669")}
        >
          <MaterialIcons name="phone-in-talk" size={24} color="#2196F3" />
          <Text style={styles.callText}>Call 1669</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="cancel" size={24} color="white" />
        <Text style={styles.cancelText}>Cancel Request</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  progressContainer: {
    paddingHorizontal: 30,
    marginBottom: 40,
  },
  stepsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stepCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  connector: {
    flex: 1,
    height: 3,
    marginHorizontal: 10,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  stepLabel: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    width: 80,
  },
  ambulanceContainer: {
    alignItems: "center",
    marginVertical: 30,
    marginLeft: 25,
  },
  statusCard: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    width: "80%",
    alignItems: "center",
  },
  statusText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    fontWeight: "500",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: "0%",
    marginBottom: 20,
  },
  callButton: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#2196F3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  callText: {
    fontSize: 16,
    color: "#2196F3",
    marginLeft: 10,
    fontWeight: "600",
  },
  cancelButton: {
    backgroundColor: "#FF3B30",
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    marginBottom: 20,
    alignSelf: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  cancelText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
});

export default RequestStatusScreen;
