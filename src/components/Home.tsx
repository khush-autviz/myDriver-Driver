import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import {
  Black,
  DarkGray,
  Gold,
  Gray,
  LightGold,
  White,
} from '../constants/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: DarkGray,
          borderRadius: 15,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Ionicons
          name="search"
          size={24}
          color={Gray}
          style={{paddingStart: 10}}
        />
        <TextInput
          style={{height: 50, paddingHorizontal: 10}}
          placeholder="Enter pick up point"
        />
      </View>
      <Text
        style={{
          color: LightGold,
          fontWeight: '700',
          fontSize: 20,
          marginTop: 20,
        }}>
        Categories
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            backgroundColor: DarkGray,
            height: 70,
            borderRadius: 8,
            width: 80,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 5,
            paddingTop: 5,
          }}>
          <Ionicons name="car-sport" size={40} color={Gold} />
          <Text style={{color: Gold}}>Car</Text>
        </View>
        <View
          style={{
            backgroundColor: DarkGray,
            height: 70,
            borderRadius: 8,
            width: 80,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 5,
            paddingTop: 5,
          }}>
          <Ionicons name="bicycle" size={40} color={Gold} />
          <Text style={{color: Gold}}>Bike</Text>
        </View>
        <View
          style={{
            backgroundColor: DarkGray,
            height: 70,
            borderRadius: 8,
            width: 80,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 5,
            paddingTop: 5,
          }}>
          <Ionicons name="people-circle" size={40} color={Gold} />
          <Text style={{color: Gold}}>Rider</Text>
        </View>
        <View
          style={{
            backgroundColor: DarkGray,
            height: 70,
            borderRadius: 8,
            width: 80,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 5,
            paddingTop: 5,
          }}>
          <Ionicons name="apps" size={40} color={Gold} />
          <Text style={{color: Gold}}>More</Text>
        </View>
      </View>
      <View style={{backgroundColor: '#ffdcd1', height: 150, marginTop: 30, borderRadius: 16, padding:10}}>
          <Text style={{fontSize: 20, fontWeight: '700', marginTop: 10}}>40% off Rides ends</Text>
          <Text style={{fontSize: 20, fontWeight: '700'}}>soon!</Text>
          <TouchableOpacity style={{backgroundColor: Black, width: 100, padding: 5, marginTop: 20, borderRadius: 16}}>
            <Text style={{color: LightGold, textAlign: 'center', fontWeight: '500'}}>Book now</Text>
          </TouchableOpacity>
      </View>
      <View style={{backgroundColor: '#d1ffbd', height: 150, marginTop: 20, borderRadius: 16, padding:10}}>
          <Text style={{fontSize: 20, fontWeight: '700', marginTop: 10}}>Schedule your trip</Text>
          <Text style={{fontSize: 20, fontWeight: '700'}}>now!</Text>
          <TouchableOpacity style={{backgroundColor: Black, width: 100, padding: 5, marginTop: 20, borderRadius: 16}}>
            <Text style={{color: LightGold, textAlign: 'center', fontWeight: '500'}}>Try reserve</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Black,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
});
