import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {
    Ionicons,
    MaterialCommunityIcons,
    FontAwesome5,
    Entypo,
    Feather
} from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

type NavItem = {
    key?: string;
    label?: string;
    route?: string;
    icon?: (color: string) => JSX.Element;
    divider?: boolean;
};

const navItems: NavItem[] = [
    {
        key: 'getPremium',
        label: 'Get Premium',
        icon: (color) => <FontAwesome5 name="crown" size={12} color={color} />
    },
    {
        key: 'dashboard',
        label: 'Dashboard',
        route: '/home',
        icon: (color) => <MaterialCommunityIcons name="view-dashboard" size={16} color={color} />
    },
    {
        key: 'refunds',
        label: 'Refunds',
        route: '/components/Pages/Refunds/Refunds',
        icon: (color) => <Entypo name="credit-card" size={16} color={color} />
    },
    {
        key: 'exports',
        label: 'Exports',
        route: '/components/Pages/Exports/Exports',
        icon: (color) => <Feather name="upload" size={17} color={color} />
    },
    {
        key: 'scheduledPayments',
        label: 'Scheduled Payments',
        route: '/components/Pages/SPayments/SPayments',
        icon: (color) => <Ionicons name="calendar-outline" size={16} color={color} />
    },
    {
        key: 'budgetPlans',
        label: 'Budget Plans',
        icon: (color) => <Ionicons name="wallet-outline" size={16} color={color} />
    },
    {
        key: 'setGoals',
        label: 'Set Goals',
        route: '/components/Pages/Goals/Goals',
        icon: (color) => <MaterialCommunityIcons name="target" size={20} color={color} />
    },
    {
        key: 'records',
        label: 'Records',
        route: '/components/Pages/Records/Records',
        icon: (color) => <Feather name="file-text" size={18} color={color} />
    },
    {
        key: 'categories',
        label: 'Categories',
        route: '/components/Pages/Category/Category',
        icon: (color) => <Ionicons name="list" size={18} color={color} />
    },
    {
        key: 'billsOverview',
        label: 'Bills Overview',
        route: '/components/Pages/Bills/Bills',
        icon: (color) => <Ionicons name="document-text-outline" size={18} color={color} />
    },
    {
        key: 'statistics',
        label: 'Statistics',
        icon: (color) => <Ionicons name="bar-chart-outline" size={15} color={color} />
    },
    { divider: true },
    {
        key: 'upiHistory',
        label: 'UPI History',
        route: '/components/Pages/Upi/Upi',
        icon: (color) => <FontAwesome5 name="history" size={15} color={color} />
    },
    {
        key: 'myProfile',
        label: 'My Profile',
        route: '/components/Pages/Profile/Profile',
        icon: (color) => <Ionicons name="person-outline" size={16} color={color} />
    },
    {
        key: 'cleanData',
        label: 'Clean Data',
        icon: (color) => <Feather name="trash-2" size={16} color={color} />
    },
    { divider: true },
    {
        key: 'settings',
        label: 'Settings',
        icon: (color) => <Ionicons name="settings-outline" size={16} color={color} />
    },
    {
        key: 'manageAccount',
        label: 'Manage Account',
        icon: (color) => <MaterialCommunityIcons name="account-cog-outline" size={18} color={color} />
    },
    {
        key: 'logout',
        label: 'Log out',
        route: '/',
        icon: (color) => <Ionicons name="log-out-outline" size={18} color={color} />
    },
    { divider: true },
    {
        key: 'terms',
        label: 'Terms & Conditions',
        icon: (color) => <Feather name="file-text" size={18} color={color} />
    }
];

const Sidebar: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleNavigation = (route?: string) => {
        if (typeof route === 'string') {
            router.push(route);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                {navItems.map((item, index) => {
                    if (item.divider) {
                        return <View key={`divider-${index}`} style={styles.divider} />;
                    }

                    const isActive = item.route && pathname.includes(item.route);

                    return (
                        <TouchableOpacity
                            key={item.key || `item-${index}`}
                            style={[styles.item, isActive && styles.activeItem]}
                            onPress={() => handleNavigation(item.route)}
                        >
                            <View style={styles.icon}>
                                {item.icon && item.icon(isActive ? '#EE8E46' : 'white')}
                            </View>
                            <Text style={[styles.label, isActive && styles.activeLabel]}>
                                {item.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default Sidebar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EE8E46',
        paddingTop: 10,
        paddingRight: 5,
        position: 'absolute',
        zIndex: 9999,
        top: 180,
        paddingBottom: 8
    },
    scroll: {
        paddingBottom: 5
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 20,
    },
    activeItem: {
        backgroundColor: '#FFF',
        borderRadius: 5,
    },
    icon: {
        marginRight: 15,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    activeLabel: {
        color: '#EE8E46'
    },
    divider: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginVertical: 10,
        marginHorizontal: 20
    }
});
