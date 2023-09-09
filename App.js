import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import imge from './src/image/profile.jpg'
import { styles } from './style/Styles.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
        
        <View style={[
          styles.upperPart,
          {backgroundColor: '#798dc0'} 
          ]}>
 

              <View style= {[styles.displaymenu]}>

              <Image source={require('./assets/icons/back.png')}
              style={{ marginLeft: 20, width: 25, height: 25}}/>

              <Image source={require('./assets/icons/qr-code.png')}
              style={{ marginLeft: 180, width: 25, height: 25}}/>

              <Image source={require('./assets/icons/search.png')}
              style={{ width: 25, height: 25}}/>  
         
             <Image source={require('./assets/icons/more.png')}
              style={{ width: 25, height: 25}}/>  
              </View>     
        <View style= {[styles.displayPic]}>
          
              <Image source={require('./src/image/profile.jpg')}
              style={{ marginLeft: 20,width: 70, height: 70, borderRadius: 70}}/>
              <Text style={{color: 'white'}}>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>
                  IJ
                </Text>
                {'\n'}online</Text>
         
              </View>  
                
              </View>
              
        <View style={[
          styles.account,
          {backgroundColor: '#fff'} 
          ]}>

              <Text style={[styles.accWord,
                  {fontSize: 18, fontFamily: 'Helvetica',
                  color: '#4477CE', fontWeight: 'bold',
                  marginTop: 20,
                  marginLeft: 30}]}>Account</Text>

              <Text style={[styles.num,
                  {fontSize: 19, fontFamily: 'Helvetica',
                  color: '#000000',
                  marginTop: 10,
                  marginLeft: 30}]}>+63 927 993 4990</Text>
              
              <Text style={[styles.num,
                  {fontSize: 15, fontFamily: 'Helvetica',
                  color: '#B2B2B2', padding: 5,
                  marginTop: 1, marginLeft:   30,
                  borderBottomWidth: 1, borderBottomColor: '#AEC3AE', 
                  }]}>Tap to change phone number</Text>

              <Text style={[styles.userName,
                  {fontSize: 19, fontFamily: 'Helvetica',
                  color: '#000000',
                  marginTop: 10,
                  marginLeft: 30}]}>@miraculous_dale</Text>

              <Text style={[styles.num,
                  {fontSize: 15, fontFamily: 'Helvetica',
                  color: '#B2B2B2', padding: 5,
                  marginTop: 1, marginLeft: 30,
                  borderBottomWidth: 1, borderBottomColor: '#AEC3AE',
                  }]}>Username</Text>

              <Text style={[styles.userName,
                  {fontSize: 19, fontFamily: 'Helvetica',
                  color: '#000000',
                  marginTop: 12,
                  marginLeft: 30}]}>call me nothing.</Text>

              <Text style={[styles.num,
                  {fontSize: 15, fontFamily: 'Helvetica',
                  color: '#B2B2B2',
                  marginTop: 1,
                  marginLeft: 30}]}>Bio</Text>

              </View>
                
          <View style={[
            styles.setting,
            {backgroundColor: '#fff'} 
            ]}>

              <Text style={[styles.settingWord,
                {fontSize: 18, fontFamily: 'Helvetica',
                color: '#4477CE', fontWeight: 'bold', marginTop: 20, 
                marginLeft: 30,}]}>Settings</Text>

              <View style={[styles.set]}>
                <Image source={require('./assets/icons/chat.png')}
                style={{ marginLeft: 25, marginTop: 10,width: 30, height: 30}}/>

                  <Text style={[styles.chatSetting,
                  {fontSize: 19, fontFamily: 'Helvetica',
                  color: '#000000',
                  marginTop: 10, padding: 16,
                  marginLeft: 25,
                  borderBottomWidth: 1, borderBottomColor: '#AEC3AE', width: 400}]}>Chat Settings</Text>
              </View>

              <View style={[styles.set]}>
                <Image source={require('./assets/icons/padlock.png')}
                style={{ marginLeft: 25, width: 30, height: 30, marginTop: 10}}/>
                              <Text style={[styles.chatSetting,
                  {fontSize: 19, fontFamily: 'Helvetica',
                  color: '#000000',
                  marginTop: 10, padding: 16,
                  marginLeft: 25,
                  borderBottomWidth: 1, borderBottomColor: '#AEC3AE', width: 400}]}>Privacy and Security</Text>
              </View>

              <View style={[styles.set]}>
                <Image source={require('./assets/icons/bell.png')}
                style={{ marginLeft: 25,width: 30, height: 30, marginTop: 10}}/>
                              <Text style={[styles.chatSetting,
                  {fontSize: 19, fontFamily: 'Helvetica',
                  color: '#000000',
                  marginTop: 10, padding: 16,
                  marginLeft: 25,
                  borderBottomWidth: 1, borderBottomColor: '#AEC3AE', width: 400}]}>Notification and Sounds</Text>
              </View>
              
              <View style={[styles.set]}>
                <Image source={require('./assets/icons/analytics.png')}
                style={{ marginLeft: 25,width: 30, height: 30, marginTop: 10}}/>
                              <Text style={[styles.chatSetting,
                  {fontSize: 19, fontFamily: 'Helvetica',
                  color: '#000000',
                  marginTop: 10, padding: 16,
                  marginLeft: 25,
                  borderBottomWidth: 1, borderBottomColor: '#AEC3AE', width: 400}]}>Data and Storage</Text>
              </View>

              <View style={[styles.set]}>
                <Image source={require('./assets/icons/low-battery.png')}
                style={{marginLeft: 25, width: 30, height: 30, marginTop: 10}}/>
                              
                  <Text style={[styles.chatSetting,
                  {fontSize: 19, fontFamily: 'Helvetica',
                  color: '#000000',
                  marginTop: 10, padding: 16,
                  marginLeft: 25,
                  borderBottomWidth: 1, borderBottomColor: '#AEC3AE', width: 400}]}>Power Saving</Text>
              </View>

              <View style={[styles.set]}>
                <Image source={require('./assets/icons/folder.png')}
                style={{marginLeft: 25, width: 30, height: 30, marginTop: 10}}/>
                              <Text style={[styles.chatSetting,
                  {fontSize: 19, fontFamily: 'Helvetica',
                  color: '#000000',
                  marginTop: 10, padding: 16,
                  marginLeft: 25,
                  borderBottomWidth: 1, borderBottomColor: '#AEC3AE', width: 400}]}>Chat Folders</Text>
              </View>
            </View> 
            <View style={[styles.abs]}>
        <Image source={require('./assets/icons/photo-camera.png')}
                 style={{  position: 'absolute', marginLeft: 20, width: 70, height: 70}}/>

        </View>
            </View>  
                
  );
}