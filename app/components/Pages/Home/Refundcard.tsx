import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import IRCTC from '../../../../assets/images/IRCTC-LOGO.png';

type RefundCardProps = {
    company: string;
    date: string;
    pnr: string;
    route: string;
    amount: number;
};

const Refundcard: React.FC<RefundCardProps> = ({ company, date, pnr, route, amount }) => {
    return (
        <View style={styles.refundcardcont}>
            <View style={{flexDirection:'row', gap: 20}}>
            <Image source={IRCTC} style={styles.imgcont} />
            <View style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <View style={styles.ackno}>
                    <Text style={styles.label}>{company}</Text>
                    <Text>{date}</Text>
                </View>
                <Text>PNR : {pnr}</Text>
                <Text>{route}</Text>
            </View>
            </View>
            <Text style={{ color: '#A02121' }}>₹ {amount}</Text>
        </View>
    );
};

export default Refundcard;

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
        fontWeight: '600',
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
});
