import { ImageBackground, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

import Imagebg from '../assets/images/fintech.jpg';
import Icon from '../assets/images/icon.png';

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ImageBackground source={Imagebg} resizeMode='cover' style={styles.img}>
                <LinearGradient style={styles.overlay} colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.3)"]}>
                    <SafeAreaView style={styles.content}>
                        <Text style={styles.title}>Finance Tracker</Text>
                        <Text style={styles.subtitle}>
                            All your financial goals, refunds and budgets managed.
                        </Text>
                        <Image source={Icon} />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.btn} onPress={() => router.push("/home")}>
                                <Text style={styles.btnText}>Get Started</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        flex: 1,
    },
    overlay: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    title: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: 5,
        marginTop: 50,
    },
    subtitle: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 40,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 60,
    },
    btn: {
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 10,
    },
    btnText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
