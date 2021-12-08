import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import { Ionicons } from "@expo/vector-icons"
import styled from 'styled-components/native';

const StyledView = styled.View`
    flex: 1px;
    background-Color: #fff;
    justify-Content: space-between;
    align-Items: stretch;
`;

const Perfil = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }


  const toHome = () => {
    navigation.replace("Home")
  }


  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.cartTouch} onPress={toHome}>
            <Ionicons  style={styles.cart} name="home" size={35} />
        </TouchableOpacity>
        <Text style={styles.textEmailText}>Email:</Text>
      <Text style={styles.textEmail}> {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.cartTouch} onPress={handleSignOut}>
            <Text style={styles.cartOut}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  cartTouch: {
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: '#dead17',
    height: 45,
    width: '100%',
    alignContent: 'center',
    borderWidth: 2,
  },
  cart: {
    color: "#dead17",
    alignSelf: 'center',
  },
  cartOut: {
    color: "#dead17",
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textEmail: {
      fontSize: 25,
      flex: 1,
      color: '#dead17',
  },
  textEmailText: {
    fontSize: 25,
    color: 'black'
  }
})
