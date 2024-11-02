import {
    Linking,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Stack
} from "react-native";

import { CameraView, Camera} from 'expo-camera'

export default function QRScanner({ navigation }) {
    return (
        <SafeAreaView style={StyleSheet.absoluteFillObject}>
          <Camera
            style={StyleSheet.absoluteFillObject}
            onBarCodeScanned={({ data }) => {
                const studentData = mockData[data] || null;

                // Verifica se o código escaneado está nos dados simulados
                if (studentData) {
                    navigation.navigate('Card', { studentData });
                } else {
                    alert('Código QR não reconhecido');
                }
            }}
          />
        </SafeAreaView>
    )
}