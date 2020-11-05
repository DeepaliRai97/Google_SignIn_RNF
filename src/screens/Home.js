import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { GoogleSignin,statusCodes} from '@react-native-community/google-signin';



const Home = ({navigation}) => {
 const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
     // this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  
return (
        <View style={styles.container}>
        <Text>Offers</Text>
        <TouchableOpacity onPress={() => signOut().then(() => {console.log('Signed Out with Google!');
    navigation.navigate('GoogleSignIn')
  }).catch(error=>{console.log(error)})}
    
          style={styles.signIn}>
          <Text style={styles.textSign}>Sign OUT</Text>
        </TouchableOpacity>
        </View>
        
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    signIn: {
      borderWidth: 40,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderColor: '#003366',
      marginTop: 15
    },
    textSign: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#fff'
    },
  });

  export default Home;

  