import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Sidebar from '../Sidebar';

const Header = () => {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <View style={styles.outcont}>
            <View style={styles.headerlist}>
                <Text style={styles.texttitle}><MaterialIcons name="person" size={25} /> Vinay Sriram Gavara</Text>
                <TouchableOpacity style={styles.texttitle}><MaterialIcons name="more-vert" size={25} color={'#fff'} /></TouchableOpacity>
            </View>
            <View style={styles.headerlist}>
                <View style={styles.moneylistout}>
                    <Text style={styles.textsubtitle}>Income</Text>
                    <View style={styles.moneylistin}>
                        <MaterialIcons name="money" style={styles.textsubtitle} />
                        <Text style={styles.textsubtitle}>₹ 82,234 </Text>
                    </View>
                </View>
                <View style={styles.moneylistout}>
                    <Text style={styles.textsubtitle}>Expenses</Text>
                    <View style={styles.moneylistin}>
                        <MaterialIcons name="wallet" style={styles.textsubtitle} />
                        <Text style={styles.textsubtitle}>₹ 30,004 </Text>
                    </View>
                </View>
                <View style={styles.moneylistout}>
                    <Text style={styles.textsubtitle}>Refund Amount</Text>
                    <View style={styles.moneylistin}>
                        <MaterialIcons name="redeem" style={styles.textsubtitle} />
                        <Text style={styles.textsubtitle}>₹ -9,000 </Text>
                    </View>
                </View>
            </View><View style={styles.headerlist}>
                <TouchableOpacity onPress={toggleSidebar}>
                    <MaterialIcons name="menu" style={styles.menuicon} />
                </TouchableOpacity>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for Category..."
                        placeholderTextColor="#666"
                    />
                    <TouchableOpacity>
                        <MaterialIcons name="search" size={20} color="#999" style={styles.searchIcon} /></TouchableOpacity>
                </View>
            </View>
            {isSidebarVisible && (
            <Sidebar />
        )}
        </View>
        
    )
}

export default Header

const styles = StyleSheet.create({
    outcont: {
        backgroundColor: '#EE8E46',
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        gap: 15
    },
    headerlist: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    moneylistout: {
        display: 'flex',
        flexDirection: 'column',
    },
    moneylistin: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        width: 100,
    },
    texttitle: {
        fontSize: 25,
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textsubtitle: {
        fontSize: 20,
        color: '#fff'
    },
    text: {
        color: '#fff',
    },
    menuicon: {
        fontSize: 30,
        color: '#fff',
        marginRight: 8,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
        borderRadius: 12,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    searchIcon: {
        color: '#EE8E46',
        fontWeight: 900,
        marginRight: -10,
        backgroundColor: '#E9E9E9',
        paddingHorizontal: 6,
        paddingVertical: 8,
        borderTopRightRadius: 11,
        borderBottomRightRadius: 9
    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        fontWeight: 600,
        color: '#EE8E46',
    },
})