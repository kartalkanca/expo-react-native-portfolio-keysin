import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Linking, ScrollView, ImageBackground, Image } from 'react-native';
import { BlurView } from 'expo-blur';

export default function App() {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  const socialMediaIcons = [
    { icon: require('./images/youtube.png'), url: 'https://youtube.com/@kartalkanca' },
    { icon: require('./images/twitch.png'), url: 'https://twitch.tv/kartalkanca' },
    { icon: require('./images/kick.png'), url: 'https://kick.com/kartalkanca' },
    { icon: require('./images/tiktok.png'), url: 'https://tiktok.com/@kartalkanca' },
    { icon: require('./images/instagram.png'), url: 'https://instagram.com/kartalkanca' },
    { icon: require('./images/discord.png'), url: 'https://discord.gg/f4sMMhKmkE' },
  ];

  const videoCovers = [
    { cover: require('./images/gamewave.png'), url: 'https://music.youtube.com/watch?v=50qEJSmT2X4' },
    { cover: require('./images/animaze.png'), url: 'https://youtu.be/73qo7iv5-wA' },
  ];

  return (
    <ImageBackground source={require('./images/background.jpg')} style={styles.backgroundImage}>
      <BlurView intensity={50} tint="dark" style={styles.blurContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <ImageBackground source={require('./images/avatar.gif')} style={styles.profileImage}>
            <View style={styles.avatarContainer}>
              <Image source={require('./images/avatar.gif')} style={styles.avatarImage} />
            </View>
          </ImageBackground>
          <View style={styles.header}>
            <Text style={styles.headerText}>Berkay Çoşkun</Text>
            <Text style={styles.headerDesc}>Yeni şarkım GameWave, YouTube Music'te.</Text>
          </View>

          <View style={styles.header}>
            <Text style={styles.headerText}>🔥 YENİ ŞARKIM 🔥</Text>
          </View>
          <TouchableOpacity style={styles.videoButton} onPress={() => handlePress('https://music.youtube.com/watch?v=50qEJSmT2X4')}>
            <ImageBackground source={require('./images/gamewave.png')} style={styles.videoCover}>
            </ImageBackground>
          </TouchableOpacity>

          <View style={styles.header}>
            <Text style={styles.headerDesc}></Text>
            <Text style={styles.headerText}>POPÜLER VİDEOLAR</Text>
          </View>
          <TouchableOpacity style={styles.videoButton} onPress={() => handlePress('https://youtu.be/73qo7iv5-wA')}>
            <ImageBackground source={require('./images/animaze.png')} style={styles.videoCover}>
            </ImageBackground>
          </TouchableOpacity>

          <View style={styles.header}>
            <Text style={styles.headerDesc}></Text>
            <Text style={styles.headerText}>BAĞIŞ & DESTEK</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('https://bynogame.com/tr/destekle/kartalkanca')}>
            <Text style={styles.buttonText}>ByNoGame</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('https://papara.com/donate/kartalkanca')}>
            <Text style={styles.buttonText}>Papara</Text>
          </TouchableOpacity>

          <View style={styles.header}>
            <Text style={styles.headerDesc}></Text>
            <Text style={styles.headerText}>TASARIM & ÜRETKENLİK</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('https://infinitedesign.site/')}>
            <Text style={styles.buttonText}>Infinite Design</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('https://fiverr.com/kartalkanca')}>
            <Text style={styles.buttonText}>Fiverr</Text>
          </TouchableOpacity>

          <View style={styles.header}>
            <Text style={styles.headerDesc}></Text>
            <Text style={styles.headerText}>DISCORD BOT</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('https://discord.com/application-directory/690685818083344476')}>
            <Text style={styles.buttonText}>Kartalkanca</Text>
          </TouchableOpacity>

          <View style={styles.header}>
            <Text style={styles.headerDesc}></Text>
          </View>
          <View style={styles.socialMediaContainer}>
            {socialMediaIcons.map((socialMedia, index) => (
              <TouchableOpacity key={index} onPress={() => handlePress(socialMedia.url)}>
                <Image source={socialMedia.icon} style={styles.socialMediaIcon} />
              </TouchableOpacity>
            ))}
          </View>

          <StatusBar style="auto" />
        </ScrollView>
      </BlurView>
    </ImageBackground>
  );
}

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  blurContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 50,
    overflow: 'hidden',
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  headerDesc: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
  videoButton: {
    width: '80%',
    marginVertical: 10,
    alignItems: 'center',
    elevation: 5,
  },
  videoCover: {
    width: '100%',
    height: 180,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderRadius: 10,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  socialMediaIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});