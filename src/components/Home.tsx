import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Switch,
  ScrollView,
  StatusBar,
} from 'react-native';
import {
  Black,
  DarkGray,
  Gold,
  Gray,
  White,
} from '../constants/Color';
import MapView, { Marker } from 'react-native-maps';

export default function Home() {
  // State for the toggle switches
  const [isNormalMode, setIsNormalMode] = useState(false);
  const [isDriverMode, setIsDriverMode] = useState(false);
  
  // Function to handle normal mode toggle
  const toggleNormalMode = () => {
    // If turning on normal mode, turn off driver mode
    if (!isNormalMode) {
      setIsNormalMode(true);
      setIsDriverMode(false);
    } else {
      // Allow turning off
      setIsNormalMode(false);
    }
  };
  
  // Function to handle driver mode toggle
  const toggleDriverMode = () => {
    // If turning on driver mode, turn off normal mode
    if (!isDriverMode) {
      setIsDriverMode(true);
      setIsNormalMode(false);
    } else {
      // Allow turning off
      setIsDriverMode(false);
    }
  };

  // return (
  //   <>
  //     <StatusBar backgroundColor={Black} barStyle="light-content" />
        
  //       {/* Mode Toggle Section */}
  //       <View style={styles.toggleContainer}>
  //         <View style={styles.toggleCard}>
  //           <Text style={styles.toggleLabel}>Normal Mode</Text>
  //           <View>
  //             <Switch
  //               trackColor={{ false: DarkGray, true: Gold }}
  //               thumbColor={isNormalMode ? White : Gray}
  //               ios_backgroundColor={DarkGray}
  //               onValueChange={toggleNormalMode}
  //               value={isNormalMode}
  //             />
  //           </View>
  //         </View>
          
  //         <View style={styles.toggleCard}>
  //           <Text style={styles.toggleLabel}>Driver Mode</Text>
  //           <View>
  //             <Switch
  //               trackColor={{ false: DarkGray, true: Gold }}
  //               thumbColor={isDriverMode ? White : Gray}
  //               ios_backgroundColor={DarkGray}
  //               onValueChange={toggleDriverMode}
  //               value={isDriverMode}
  //             />
  //           </View>
  //         </View>
  //       </View>

              
  //       <MapView
  //       style={styles.map}
  //       initialRegion={{
  //         latitude: 37.78825,
  //         longitude: -122.4324,
  //         latitudeDelta: 0.0922,
  //         longitudeDelta: 0.0421,
  //       }}
  //     >
  //       <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
  //     </MapView>
  //   </>
  // );

  return (
    <>
      <StatusBar backgroundColor={Black} barStyle="light-content" />
      <View style={styles.container}>
        {/* Mode Toggle Section */}
        <View style={styles.toggleContainer}>
          <View style={styles.toggleCard}>
            <Text style={styles.toggleLabel}>Normal Mode</Text>
            <Switch
              trackColor={{ false: DarkGray, true: Gold }}
              thumbColor={isNormalMode ? White : Gray}
              ios_backgroundColor={DarkGray}
              onValueChange={toggleNormalMode}
              value={isNormalMode}
            />
          </View>
  
          <View style={styles.toggleCard}>
            <Text style={styles.toggleLabel}>Driver Mode</Text>
            <Switch
              trackColor={{ false: DarkGray, true: Gold }}
              thumbColor={isDriverMode ? White : Gray}
              ios_backgroundColor={DarkGray}
              onValueChange={toggleDriverMode}
              value={isDriverMode}
            />
          </View>
        </View>
  
        {/* Map Section */}
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
          </MapView>
        </View>
      </View>
    </>
  );
  

}

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  toggleCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 10,
    width: '48%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  toggleLabel: {
    color: White,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  toggleDescription: {
    color: Gray,
    fontSize: 14,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Black,
    padding: 10,
  },
  mapContainer: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10,
  },
  map: {
    flex: 1,
    borderRadius: 10,
  },
  
});