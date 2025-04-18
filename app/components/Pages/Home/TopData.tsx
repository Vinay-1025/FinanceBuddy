import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dashboardtools from './Dashboardtools';
import Refundcard from './Refundcard';

const TopData = () => {
    return (
        <View style={styles.topdatacont}>
            <Dashboardtools />
            <ScrollView style={styles.scrollcont} showsVerticalScrollIndicator={false}>
                <Text style={styles.maintitle}>Budget Plan</Text>
                <View style={styles.topdata}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Budget A</Text>
                        <View style={styles.subheader}>
                            <Text style={styles.code}>79947</Text>
                            <MaterialIcons name="share" size={16} color={'#212EA0'} />
                        </View>
                    </View>
                    <Text>This is the Note of the Budget A for the reference.</Text>
                    <View style={styles.header}>
                        <Text>On 21-12-2024</Text>
                        <Text style={styles.money}>₹ -30,000</Text>
                    </View>
                </View>


                <Text style={styles.maintitle}>Goals</Text>
                <View style={styles.topdata}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Goal A</Text>
                        <View style={styles.subheader}>
                            <Text style={styles.label}>Label</Text>
                        </View>
                    </View>
                    <Text>This is the Note of the Goal A for the reference.</Text>
                    <View style={styles.header}>
                        <Text>On 21-12-2024</Text>
                        <Text>Target Date : 01-01-2025</Text>
                        <Text style={styles.details}>View Details</Text>
                    </View>
                </View>

                <View style={styles.refund}>
                    <View>
                        <Text style={styles.maintitle}>Refund Details</Text>
                        <View style={styles.refundin}>
                            <MaterialIcons name="south" color={'#A02121'} />
                            <Text style={{color: '#A02121'}}>40 Pending</Text>
                        </View>
                    </View>
                    <MaterialIcons name="tune" size={24} />
                </View>
                <Refundcard />
                <Refundcard />
                <Refundcard />
                <Refundcard />
                <Refundcard />
                <Refundcard />
                <Refundcard />
                <Refundcard />
                <Refundcard />
                <Refundcard />
                <Refundcard />
                <Refundcard />
                <Refundcard />
            </ScrollView>
        </View>
    )
}

export default TopData

const styles = StyleSheet.create({
    topdatacont: {
        padding: 20,
    },
    scrollcont: {
        height: 570,
        overflowY: 'scroll',
        // backgroundColor: '#e7e7e7'
    },
    topdata: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        padding: 10,
        paddingBottom: 20,
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 1,
    },
    maintitle: {
        fontSize: 24,
        fontWeight: 700,
        paddingTop: 12,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: 500,
    },
    subheader: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    code: {
        fontSize: 18,
        color: 'green',
    },
    money: {
        color: '#cc0303'
    },
    label: {
        color: '#E28E46',
        fontSize: 15,
        fontWeight: 600,
    },
    details: {
        color: 'skyblue',
        fontSize: 15,
        fontWeight: 600
    },
    refund: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    refundin: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    }
})