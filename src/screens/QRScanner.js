import {
    Linking,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Stack
} from "react-native";

import { CameraView} from 'expo-camera'

export default function QRScanner({ navigation }) {
    return (
        <SafeAreaView style={StyleSheet.absoluteFillObject}>
            
          <CameraView style={StyleSheet.absoluteFillObject}
            facing="back"
            onBarcodeScanner={({data}) => {
                navigation.navigate('Card');
            }}
          />
        </SafeAreaView>
    )
}