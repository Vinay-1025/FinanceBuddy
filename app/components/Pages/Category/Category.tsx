import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Home/Header'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'

const defaultCategories = [
    'IRCTC', 'RED BUS', 'AMAZON', 'FLIPKART', 'AJIO', 'SHOPSY',
    'MEESHO', 'MYNTRA', 'TRIVAGO', 'ABHIBUS',
]

const manualCategories = [
    'Category Name 1', 'Category Name 2', 'Category Name 3',
    'Category Name 4', 'Category Name 5',
]

const Category = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header />

            <ScrollView contentContainerStyle={styles.container}>
                {/* Default Categories */}
                <Text style={styles.title}>Default Categories</Text>
                <Text style={styles.subTitle}>10 Categories</Text>

                <View style={styles.defaultCategoryContainer}>
                    {defaultCategories.map((cat, index) => (
                        <TouchableOpacity key={index} style={styles.categoryButton}>
                            <Text style={styles.categoryButtonText}>{cat}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Manual Categories */}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View>
                    <Text style={styles.title}>Manual Categories</Text>
                    <Text style={styles.subTitle}>5 Categories</Text>
                    </View>
                    <MaterialIcons name="category" size={22} color={'#539DE2'} style={styles.leftIcon} />
                </View>

                <View style={styles.manualCategoryContainer}>
                    {manualCategories.map((cat, index) => (
                        <View key={index} style={styles.manualItem}>
                            <MaterialIcons name="category" size={20} color="#FF6600" style={styles.leftIcon} />
                            <Text style={styles.manualText}>{cat}</Text>
                            <View style={styles.actions}>
                                <TouchableOpacity>
                                    <FontAwesome name="pencil" size={16} color="#4E8BC3" />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <FontAwesome name="trash" size={16} color="red" style={{ marginLeft: 12 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 12,
    },
    subTitle: {
        color: '#4E8BC3',
        marginBottom: 10,
    },
    defaultCategoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        marginBottom: 15,
    },
    categoryButton: {
        backgroundColor: '#F3954E',
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 14,
        margin: 4,
    },
    categoryButtonText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 14,
    },
    manualCategoryContainer: {
        gap: 12,
    },
    manualItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    leftIcon: {
        marginRight: 10,
    },
    manualText: {
        flex: 1,
        fontSize: 16,
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
})
