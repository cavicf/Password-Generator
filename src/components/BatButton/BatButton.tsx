import React, { useState } from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';


export function BatButton() {
  const [pass, setPass] = useState('');

  function handleGenerationButton(){
    try {
      let senha = generatePass();
      setPass(senha);
    } catch (error) {
        console.error('não foi possivel gerar a senha', error)
    }
  }

  function handleCopyButton (){
    Clipboard.setStringAsync(pass);
    Toast.show({
      type: 'success',
      text1: 'Copiado para a área de tranferência!',
      position: 'top',
    })
  }

  return (
    <>
        <BatTextInput  pass={pass}/>
        <Pressable onPress={handleGenerationButton} style={styles.button}>
            <Text style={styles.text}>Generate</Text>
        </Pressable>
        <Pressable onPress={handleCopyButton} style={styles.button}>
            <Text style={styles.text}>⚡Copy</Text>
        </Pressable>

    </>
  );
}