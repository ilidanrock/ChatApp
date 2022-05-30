import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
//import { signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../config/firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
const backImage = require("../assets/Rectangle.png");

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(app, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error( errorCode , errorMessage)
        });
    }
    return;
  };
  return (
    <View style={styles.container} >
      <Image source={backImage} style={styles.backImage}/>
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            value={email}
            onChangeText={(text)=> setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType='password'
            value={password}
            onChangeText={(text)=> setPassword(text)}
          />
      </SafeAreaView>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 36,
        fontWeight:'bold',
        color: "orange",
        alignSelf: "center",
        paddingBottom: 24
    },
    input:{
        backgroundColor: "#F6F7FB",
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
    },
    backImage: {
        width: "100%",
        height: 340,
        position: "absolute",
        top: 0,
        resizeMode: 'cover'
    },
    whiteSheet: {
        width: '100%',
        height: 340,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    button: {
        backgroundColor: '#f57c00',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    }
});
