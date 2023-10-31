import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import loginScreenStyle from './login-screen-style'
import commonStyle from '../../style/commonStyle'
import * as LocalAuthentication from 'expo-local-authentication';

const Login = ({navigation}:any) => {
  const [authType, setAuthType] = useState('')
  

  const checkBiometric=async()=>{
    const isHardwareSupported = await LocalAuthentication.hasHardwareAsync();
    if (isHardwareSupported) {
      const supportedTypes = await LocalAuthentication.supportedAuthenticationTypesAsync();

      if (supportedTypes.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)) {
        setAuthType('Fingerprint');
      }
      if (supportedTypes.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)) {
        setAuthType('Facial Recognition');
      }
    }
  }

  const authenticate = async () => {
    const { success,  } = await LocalAuthentication.authenticateAsync();

    if (success) {
      navigation.navigate('Dashboard')
    } else {
      Alert.alert(`Authentication failed`);
    }
  };

  useEffect(()=>{
     checkBiometric();
  },[])
  return (
    <View style={loginScreenStyle.container}>
      <View style={[loginScreenStyle.subContainer, commonStyle.boxShadow]}>
        <Text style={loginScreenStyle.headerText}>Login</Text>
        <TextInput placeholder='Email' style={loginScreenStyle.input} />
        <TextInput placeholder='Password' style={loginScreenStyle.input} />
        <TouchableOpacity style={loginScreenStyle.btn}>
          <Text style={loginScreenStyle.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={loginScreenStyle.donotacoount}>Don't have account?</Text>
        </TouchableOpacity>
        <Text style={loginScreenStyle.orText}>OR</Text>
        <TouchableOpacity style={loginScreenStyle.center} onPress={authenticate}>
          {
            authType=="Fingerprint"?
            <Image source={require('../../../assets/image/fingerprint.png')} style={loginScreenStyle.fingerImg} />
            :
            <Image source={require('../../../assets/image/face-id.png')} style={loginScreenStyle.fingerImg} />
          }
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})