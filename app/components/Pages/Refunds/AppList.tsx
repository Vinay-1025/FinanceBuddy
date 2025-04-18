import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

type Item = {
    id: string;
    name: string;
};

const AppList = () => {
    const [selectedItem, setSelectedItem] = useState<string>('1'); // Default selected is IRCTC

    const data: Item[] = [
        { id: '1', name: 'IRCTC' },
        { id: '2', name: 'REDBUS' },
        { id: '3', name: 'ABIBUS' },
        { id: '4', name: 'FLIPKART' },
        { id: '5', name: 'AMAZON' },
        { id: '6', name: 'MYNTRA' },
        { id: '7', name: 'AJIO' }
    ];

    const handleSelect = (item: Item) => {
        setSelectedItem(item.id);
    };

    const renderItem = ({ item }: { item: Item }) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => handleSelect(item)}
            >
                <Text style={[styles.itemText, selectedItem === item.id && styles.selectedItem]}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.listcont}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 20,
    },
    itemText: {
        fontSize: 15,
        color: '#000',
        fontWeight: '700',
    },
    selectedItem: {
        color: '#EE8E46',
        borderColor: '#EE8E46',
    },
    listcont: {
        backgroundColor: '#F3F3F3',
        padding: 10,
    }
});

export default AppList;
