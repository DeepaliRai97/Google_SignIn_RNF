import { GoogleSignin,statusCodes , GoogleSigninButton} from '@react-native-community/google-signin';
import React from 'react';
import { Button,View,StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';


const GoogleSignIn =({navigation}) => {

GoogleSignin.configure({
//webClientId: '668098725749-0tb55nhs4td8bbqqphir6hbrn3ue2nv4.apps.googleusercontent.com',
  webClientId:'668098725749-9c9m9vhtjslgq4domgrunbdnjga5skdk.apps.googleusercontent.com'
});

const signIn = async () => {
  try {
    //await GoogleSignin.hasPlayServices();
    //const userInfo =
    await GoogleSignin.signIn();
    //this.setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};
/*async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}*/
return (
    <View style={styles.container}>    
     <GoogleSigninButton
    style={{ width: 192, height:100 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={() => signIn().then(() => {console.log('Signed in with Google!');
    navigation.navigate('Home')
  }).catch(error=>{console.log(error)})}
    //disabled={isSigninInProgress}
     />
       
    </View>
);
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
})
export default GoogleSignIn;

//import { GoogleSignin } from '@react-native-community/google-signin';

/* <Button
      title="Google Sign-In"
      onPress={() => signIn().then(() => {console.log('Signed in with Google!');
      navigation.navigate('Home')
    }).catch(error=>{console.log(error)})}
    /> */