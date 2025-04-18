import { View, Text, StyleSheet } from 'react-native';

import Header from "./Header";
import TopData from './TopData';


const Home = () => {
    return (
        <View>
            <Header />
            <TopData />
        </View>
    );
}

export default Home

const styles = StyleSheet.create({
    
})