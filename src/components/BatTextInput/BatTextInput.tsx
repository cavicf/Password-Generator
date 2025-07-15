import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatInputStyles';

interface BatTextInputProps{
  pass: string
}

export function BatTextInput(props: BatTextInputProps) {

  return (
    <TextInput placeholder='password' style={styles.inputer}
    value={props.pass}
    />
    
  );
}