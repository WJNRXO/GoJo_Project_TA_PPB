import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Image
          source={require("../../assets/images/mukagua.jpg")}
          style={styles.profileImage}
        />

        <Text style={styles.header}>Profil Pengguna</Text>
        <View style={styles.profileInfo}>
          <Text style={styles.label}>Nama:</Text>
          <Text style={styles.value}>Bagus Wijanarko</Text>

          <Text style={styles.label}>NIM:</Text>
          <Text style={styles.value}>21120121120006</Text>

          <Text style={styles.label}>Umur:</Text>
          <Text style={styles.value}>20 tahun</Text>

          <Text style={styles.label}>Alamat:</Text>
          <Text style={styles.value}>Jl. Iwenisari</Text>

          <Text style={styles.label1}>YOLO</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Setengah dari lebar atau tinggi untuk membuatnya bulat
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileInfo: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
  },
  label1: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Profile;
