import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

const screenWidth = Dimensions.get('window').width

const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    propsForDots: {
        r: '4',
        strokeWidth: '2',
        stroke: '#ffa726',
    },
}

const RecordsStat = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>Reports</Text>
                <Text style={styles.dateRange}>12-Oct-2024 - 31-Dec-2024</Text>
            </View>

            <View style={styles.reportBox}>
                <Text style={styles.sectionTitle}>
                    <TouchableOpacity>
                        <MaterialIcons name='download' size={24} color={'#4E8BC3'} />
                    </TouchableOpacity>
                </Text>
                <View style={styles.reportRow}>
                    <Text style={styles.reportLabel}>Tally</Text>
                    <Text style={styles.income}>+ 0</Text>
                    <Text style={styles.expense}>- 0</Text>
                </View>
                <View style={styles.reportRow}>
                    <Text style={styles.reportLabel}>Average per day</Text>
                    <Text style={styles.income}>+ 0</Text>
                    <Text style={styles.expense}>- 0</Text>
                </View>
                <View style={styles.reportRow}>
                    <Text style={styles.reportLabel}>Average per month</Text>
                    <Text style={styles.income}>+ 0</Text>
                    <Text style={styles.expense}>- 0</Text>
                </View>
                <View style={styles.reportRow}>
                    <Text style={styles.reportLabel}>Total Amount</Text>
                    <Text style={styles.income}>+ 0</Text>
                    <Text style={styles.expense}>- 0</Text>
                </View>
            </View>

            <Text style={{ fontSize: 20, fontWeight: '600' }}>Trends</Text>

            <LineChart
                data={{
                    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
                    datasets: [
                        {
                            data: [500, 100, 750, 800, 900, 850, 700, 400, 600, 950],
                            color: () => 'green',
                            strokeWidth: 2,
                        },
                        {
                            data: [200, 500, 600, 700, 550, 400, 300, 100, 200, 850],
                            color: () => 'red',
                            strokeWidth: 2,
                        },
                    ],
                }}
                width={screenWidth - 32}
                height={250}
                chartConfig={chartConfig}
                bezier
                style={styles.chart}
                withInnerLines={true}
            />

            {/* Custom Legend Below Chart */}
            <View style={styles.legendContainer}>
                <View style={styles.legendItem}>
                    <View style={[styles.legendColor, { backgroundColor: 'green' }]} />
                    <Text style={styles.legendLabel}>Income</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.legendColor, { backgroundColor: 'red' }]} />
                    <Text style={styles.legendLabel}>Expense</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default RecordsStat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    dateRange: {
        fontSize: 14,
        color: '#888',
        textAlign: 'right',
        marginBottom: 10,
    },
    reportBox: {
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        padding: 16,
        marginBottom: 20,
    },
    sectionTitle: {
        marginBottom: 12,
        textAlign: 'right',
    },
    reportRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    reportLabel: {
        flex: 1,
        fontSize: 14,
    },
    income: {
        flex: 0.5,
        fontSize: 14,
        color: 'green',
        textAlign: 'right',
    },
    expense: {
        flex: 0.5,
        fontSize: 14,
        color: 'red',
        textAlign: 'right',
    },
    chart: {
        borderRadius: 10,
        marginTop: 10,
    },
    legendContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        gap: 20,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    legendColor: {
        width: 12,
        height: 12,
        borderRadius: 3,
        marginRight: 6,
    },
    legendLabel: {
        fontSize: 14,
        color: '#000',
    },
})
