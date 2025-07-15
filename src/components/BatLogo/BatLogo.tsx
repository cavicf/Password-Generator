import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/batLogo.png'
export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>BAT PASS GENERATOR</Text>
        <Image
            source={batLogo}
            style={styles.image}
        />
    </>
  );
}