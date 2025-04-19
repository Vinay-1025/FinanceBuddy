import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Header from '../Home/Header'
import ExpenseTop from './ExpenseTop'
import ExpenseForm from './ExpenseForm'

const Expense = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={{padding:20}}>
                <ExpenseTop />
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <ExpenseForm />
            </ScrollView>
        </View>
    )
}

export default Expense

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        padding: 0,
        paddingBottom: 40,
    },
    footerText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        fontWeight: '600',
    },
})
