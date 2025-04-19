import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const UpiCard = ({ name, type, transactionId, amount, date }) => {
    const isInFlow = type === 'InFlow';

    return (
        <View style={styles.outercont}>
            <View style={styles.rowcont}>
                <Text style={{ fontSize: 16, fontWeight: 600 }}>{name}</Text>
                <Text style={{ color: isInFlow ? '#259040' : '#D12A2A' }}>{type}</Text>
            </View>
            <Text>Transaction ID : {transactionId}</Text>
            <View style={styles.rowcont}>
                <Text>Amount : {amount}</Text>
                <Text>{date}</Text>
            </View>
        </View>
    );
};

export default UpiCard;

const styles = StyleSheet.create({
    outercont: {
        flexDirection: 'column',
        gap: 8,
        paddingHorizontal: 8,
        paddingVertical: 15,
        borderBottomColor: '#000',
        borderBottomWidth: 0.5,
        marginBottom: 8,
    },
    rowcont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
