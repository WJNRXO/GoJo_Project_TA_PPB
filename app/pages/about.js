import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Image
          source={require("../../assets/icons/logo2.png")}
          style={styles.profileLogo}
        />

    
        <View style={styles.profileInfo}>
          <Text style={styles.label}>ABOUT THIS APP</Text>
          <Text style={styles.value}>Selamat datang di Aplikasi Gojo atau bisa disebut Golek Kerjo, platform inovatif yang
          dirancang untuk membantu Anda menemukan peluang karir terbaik sesuai
          dengan keahlian dan minat Anda. Aplikasi ini bertujuan untuk
          mempermudah proses pencarian pekerjaan, menghubungkan pencari kerja
          dengan berbagai perusahaan dan organisasi, serta memberikan pengalaman
          pengguna yang intuitif dan efisien.</Text>

          <Text style={styles.value1}>Made BY YRX</Text>

          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30,
   
  },
  
  profileLogo: {
    width: 110,
    height: 55,
    marginBottom: 20,
    alignSelf: "center",
   
  },
 
  
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign:"center",
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "justify",
  
  },
  value1: {
    fontSize: 12,
    marginBottom: 5,
    textAlign: "center",
  
  },
 
});

export default Profile;
