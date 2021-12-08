import { useNavigation } from '@react-navigation/core'
import React, {useState} from "react"
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Linking,} from 'react-native'
import { auth } from '../firebase'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import { Ionicons } from "@expo/vector-icons"
import { Link } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()

  const toPerfil = () => {
    navigation.replace("Perfil")
  }

  const handleCallPress = async () => {
    await Linking.openURL("tel:+524951073519")
  }

  const handleWhatsAPPPress = async () => {
    await Linking.openURL("http://wa.me/+524951073519?text=°° Iniciales - Acero inoxidable Precio: $99c/u °° Anillos ajustables - Oro laminado Precio: $90c/u °° Huggies - Acreo inoxidable Precio: $89 °°")
  }

  const addElement = () => {
    alert('Producto agregado')
  }

  return (
    <ScrollView>
      <View>
          <TouchableOpacity style={styles.cartTouch} onPress={toPerfil}>
              <Ionicons  style={styles.cart} name="person-circle-outline" size={40} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartTouch} onPress={handleCallPress}>
              <Ionicons  style={styles.cart} name="call" size={35} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartTouch} onPress={handleWhatsAPPPress}>
              <Ionicons  style={styles.cart} name="logo-whatsapp" size={35} />
          </TouchableOpacity>
              <Card style={[styles.backColor, styles.top]}>
                  <Card.Content>
                      <Title id="nombreIniciales">Iniciales - Acero inoxidable</Title>
                      <Paragraph id="precioIniciales">Precio: $99 c/u</Paragraph>
                  </Card.Content>
                  <Card.Cover source={require('../assets/ImgCarana/Iniciales.jpg')} />
                  <Card.Actions>
                  <TouchableOpacity style={styles.cartButton} onPress={addElement}>
                    <Ionicons  style={styles.cart} name="add-circle" size={40} />
                  </TouchableOpacity>
                  </Card.Actions>
              </Card>
              <Card style={styles.backColor}>
                  <Card.Content>
                      <Title>Anillos ajustables - Oro laminado</Title>
                      <Paragraph>Precio: $90 c/u </Paragraph>
                  </Card.Content>
                  <Card.Cover source={require('../assets/ImgCarana/Anillos.jpg')} />
                  <Card.Actions>
                  <TouchableOpacity style={styles.cartButton} onPress={addElement}>
                    <Ionicons  style={styles.cart} name="add-circle" size={40} />
                  </TouchableOpacity>
                  </Card.Actions>
              </Card>
              <Card style={styles.backColor}>
                  <Card.Content>
                      <Title>Aretes - Acero inoxidable</Title>
                      <Paragraph>Precio: $120 </Paragraph>
                  </Card.Content>
                  <Card.Cover source={require('../assets/ImgCarana/Aretes.jpg')} />
                  <Card.Actions>
                  <TouchableOpacity style={styles.cartButton} onPress={addElement}>
                    <Ionicons  style={styles.cart} name="add-circle" size={40} />
                  </TouchableOpacity>
                  </Card.Actions>
              </Card>
              <Card style={styles.backColor}>
                  <Card.Content>
                      <Title>Arracadas - Acero inoxidable</Title>
                      <Paragraph>Precio: $69</Paragraph>
                  </Card.Content>
                  <Card.Cover source={require('../assets/ImgCarana/Arracadas.jpg')} />
                  <Card.Actions>
                  <TouchableOpacity style={styles.cartButton} onPress={addElement}>
                    <Ionicons  style={styles.cart} name="add-circle" size={40} />
                  </TouchableOpacity>
                  </Card.Actions>
              </Card>
              <Card style={styles.backColor}>
                  <Card.Content>
                      <Title>Arracada triple - Acero inoxidable</Title>
                      <Paragraph>Precio: $99 </Paragraph>
                  </Card.Content>
                  <Card.Cover source={require('../assets/ImgCarana/ArracadaTriple.jpg')} />
                  <Card.Actions>
                  <TouchableOpacity style={styles.cartButton} onPress={addElement}>
                    <Ionicons  style={styles.cart} name="add-circle" size={40} />
                  </TouchableOpacity>
                  </Card.Actions>
              </Card>
              <Card style={styles.backColor}>
                  <Card.Content>
                      <Title>Huggies - Acero inoxidable</Title>
                      <Paragraph>Precio: $89 </Paragraph>
                  </Card.Content>
                  <Card.Cover source={require('../assets/ImgCarana/Huggies.jpg')} />
                  <Card.Actions>
                  <TouchableOpacity style={styles.cartButton} onPress={addElement}>
                    <Ionicons  style={styles.cart} name="add-circle" size={40} />
                  </TouchableOpacity>
                  </Card.Actions>
              </Card>
      </View>
  </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  backColor: {
    borderColor: "#dead17",
    borderBottomWidth: 3,
  },
  top: {
      borderColor: "#dead17",
      borderTopWidth: 2,
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
  cartButton: {
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: '#dead17',
    height: 45,
    width: '100%',
    alignContent: 'center',
    borderWidth: 2,
  }
})
