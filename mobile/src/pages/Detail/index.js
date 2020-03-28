import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}></Image>
        <TouchableOpacity onPress={() => {}}>
          <Feather name="arrow-left" size={28} color="#E82041"></Feather>
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={(styles.incidentProperty, { marginTop: 0 })}>ONG:</Text>
        <Text style={styles.incidentValue}>ONG:</Text>

        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>ONG:</Text>

        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>ONG:</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Salve o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity styles={styles.action} onPress={() => {}}>
            <Text style="{styles.actionText}">WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity styles={styles.action} onPress={() => {}}>
            <Text style="{styles.actionText}">E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
