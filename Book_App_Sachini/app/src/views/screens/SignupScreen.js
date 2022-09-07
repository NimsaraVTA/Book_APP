import React from 'react';
import {View,Text,Image} from 'react-native';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../const/color';
import STYLES from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function SignupScreen({navigation}) {
  return (
    <SafeAreaView
    style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView>
        <View style={{flexDirection :'row', marginTop: 40}}>
          <Text 
          style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}
          >BOOK</Text>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.secondary}}
          >READERS</Text>
        </View>

        <View
        style={{marginTop: 70}}
        >
          <Text
          style={{fontSize: 27, fontWeight:'bold', color: COLORS.dark}}>Welcome Back,
          </Text>

          <Text
          style={{fontSize: 19, fontWeight:'bold', color: COLORS.light}}>Sign Up to Continue
          </Text>
        </View>

        <View
        style={{marginTop: 20}}>
          <View style={STYLES.InputContainer}>
            <Icon 
            name='person-outline' 
            size={20} 
            color={COLORS.light}
            style={STYLES.InputIcons}
            />
            <TextInput placeholder='Email' style={STYLES.Input} />
          </View>
        
          <View style={STYLES.InputContainer}>
            <Icon 
            name='mail-outline' 
            size={20} 
            color={COLORS.light}
            style={STYLES.InputIcons}
            />
            <TextInput placeholder='Email' style={STYLES.Input} />
          </View>

          <View style={STYLES.InputContainer}>
            <Icon 
            name='lock-outline' 
            size={20} 
            color={COLORS.light}
            style={STYLES.InputIcons}
            />
            <TextInput 
            placeholder='Password' 
            style={STYLES.Input}
            secureTextEntry
            />
          </View>
          
        <View style={STYLES.BtnPrimary}>
          <Text style={{color: COLORS.white, fontWeight:'bold', fontSize: 18}}>Sign Up</Text>
        </View>

        <View
        style={{
          marginVertical: 30,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

          <View style={STYLES.Line}></View>
          <Text style={{fontWeight:'bold', marginHorizontal: 5}}>OR</Text>
          <View style={STYLES.Line}></View>
        </View>

        <View style={{
          flexDirection:'row',
          justifyContent: 'space-between',
        }}>
          <View 
          style={STYLES.BtnSecondary}>
            <Text style={{fontWeight:'bold', fontSize:16}}>Sign Up With</Text>
          <Image style={STYLES.BtnImage} source={require('../../assest/facebook.png')} />
          </View>
        <View style={{width: 10}} />
          <View 
          style={STYLES.BtnSecondary}>
            <Text style={{fontWeight:'bold', fontSize:16}}>Sign Up With</Text>
          <Image style={STYLES.BtnImage} source={require('../../assest/google.png')} />
          </View>

        </View>
        </View>

        <View
        style={{
          flexDirection: 'row',
          alignItems:'flex-end',
          justifyContent:'center',
          marginTop:40,
          marginBottom:20,
        }}>
          <Text 
          style={{color: COLORS.light, fontWeight:'bold'}}>
          Do you have an account?
          </Text>
          <TouchableOpacity>
          <Text onPress={()=>{navigation.navigate('SignIn')}}
          style={{color: COLORS.pink, fontWeight:'bold'}}>
          Sign in
          </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignupScreen;
