import { API_URL } from "../config/api";

export const sendSOS = async (location, healthInfo) => {
  try {
    const response = await fetch(`${API_URL}/sos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ location, healthInfo }),
    });
    return await response.json();
  } catch (error) {
    console.error("Error sending SOS:", error);
  }
};
