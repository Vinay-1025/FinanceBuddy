import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';

import IRCTC from '../../../../assets/images/IRCTC-LOGO.png';


const Refundcard = () => {
    return (
        <View style={styles.refundcardcont}>
            <Image source={IRCTC} alt='image' style={styles.imgcont}/>
            <View style={{display: 'flex', flexDirection: 'column', gap: 6}}>
                <View style={styles.ackno}>
                    <Text style={styles.label}>IRCTC</Text>
                    <Text>12 days ago</Text>
                </View>
                <Text>PNR : INRDC9873767354874</Text>
                <Text>Vijayawada Junction - Rajamahendravaram</Text>
            </View>
            <Text style={{color: '#A02121'}}>₹ 500</Text>
        </View>
    )
}

export default Refundcard

const styles = StyleSheet.create({
    refundcardcont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderRadius: 10,
        paddingTop: 15,
    },
    ackno: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    label: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 600,
        backgroundColor: '#EE8E24',
        width: 60,
        borderRadius: 3,
    },
    imgcont: {
        borderWidth: 1,
        borderColor: '#EE8E46',
        width: 60,
        height: 60,
        borderRadius: 10,
    }
})