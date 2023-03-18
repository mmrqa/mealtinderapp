import React, { useState } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import TinderCard from 'react-tinder-card'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    color: '#000',
    fontSize: 30,
    marginBottom: 30,
  },
  cardContainer: {
    width: '90%',
    maxWidth: 260,
    height: 300,
  },
  card: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 260,
    height: 300,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardheader: {
    height: '70%',
  },
  cardTitle: {
    position: 'absolute',
    bottom: 0,
    margin: 10,
    color: '#000',
  },
  cardDuration: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: '10px',
  },
  cardh3: {
    margin: '10px',
    color: '#000'
  },
  cardh4: {
    margin: '10px',
    color: '#a0a0a0',
    textTransform: 'uppercase',
  },
  infoText: {
    height: 28,
    justifyContent: 'center',
    display: 'flex',
    zIndex: -100,
  }
}

const db = [
  {
    name: 'Weingummis',
    img: require('../../assets/img/essen.jpg'),
    category: 'vegan',
    duration: 10,
    description: 'Damn yummi.'
  },
  {
    name: 'Kartoffelbrei',
    img: require('../../assets/img/essen.jpg'),
    category: 'Saisonal',
    duration: 20,
    description: 'Easy doing.'
  },
  {
    name: 'Blatt',
    img: require('../../assets/img/essen.jpg'),
    category: 'vegan',
    duration: 16,
    description: 'cool, schmeckz.'
  },
  {
    name: 'Hackschnitzel',
    img: require('../../assets/img/essen.jpg'),
    category: 'Hauptgericht',
    duration: 45,
    description: 'richtig gut aber das ist jetzt scon ein langer text hoffentlich in 2 Zeilen.'
  }
]

function Choosemeals() {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>React Native Tinder Card</Text>
      <View style={styles.cardContainer}>
        {characters.map((character) =>
          <TinderCard key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <View style={styles.card}>
              <View style={styles.cardheader}>
                <ImageBackground style={styles.cardImage} source={character.img}>
                </ImageBackground>
              </View>
              <Text style={styles.cardh4}>{character.category}</Text>
                <Text style={styles.cardh3}>{character.name}</Text>
                <Text style={styles.cardDuration}>{character.duration}</Text>
            </View>
          </TinderCard>
        )}
      </View>
      {lastDirection ? <Text style={styles.infoText}>You swiped {lastDirection}</Text> : <Text style={styles.infoText} />}
    </View>
  )
}

export default Choosemeals