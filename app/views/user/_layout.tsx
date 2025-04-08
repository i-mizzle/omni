import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '@/static/colors';
import { useTheme } from '@/app/providers/ThemeProvider';
import HomeIcon from '@/app/components/elements/icons/HomeIcon';
import TransactionsIcon from '@/app/components/elements/icons/TransactionsIcon';
import ChartIcon from '@/app/components/elements/icons/ChartIcon';
import CogIcon from '@/app/components/elements/icons/CogIcon';
import HomeScreen from './HomeScreen';
import { useGlobalStyles } from '@/app/hooks/useGlobalStyles';
import TransactionsScreen from './TransactionsScreen';
import SettingsScreen from './SettingsScreen';
import StatisticsScreen from './StatisticsScreen';


const UserLayout = () => {
    const { theme } = useTheme()
    const globalStyles = useGlobalStyles()
    const styles = StyleSheet.create({
        tabBar: {
            position: 'absolute',
            height: 60,
            borderTopWidth: 0,
            elevation: 0,
            backgroundColor: theme === 'dark' ? colors.night : colors.whiteSmoke,
            paddingVertical: Platform.OS === 'android' ? 10 : 10,
            // paddingTop: Platform.OS === 'android' ? 20 : 30,
        },
        plusButton: {
            top: -20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        plusIconWrapper: {
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: colors.burntSienna,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: colors.burntSienna,
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.25,
            shadowRadius: 5,
            elevation: 5,
        },
        tabBarButton:{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
        },
        tabBarButtonText: {
            fontSize: 12,
        }

    });

    const inactiveIconColor = theme === 'dark' ? colors.silver : colors.outerSpace

    const Tab = createBottomTabNavigator();

    const Home = () => <HomeScreen />
    const Transactions = () => <TransactionsScreen />;
    const Settings = () => <SettingsScreen />;
    const Statistics = () => <StatisticsScreen />;
    const Dummy = () => null; // placeholder for central Plus button

    const CustomTabBarButton = ({ children, onPress }: any) => (
    <TouchableOpacity
        style={styles.plusButton}
        onPress={onPress}
        activeOpacity={1}  // Disable the "pulsing" effect
    >
        {children}
    </TouchableOpacity>
    );


    return (
        // Remove NavigationContainer here since it's already handled by expo-router
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: true,
            tabBarLabelStyle: {
                
                color: '#333', // Won’t work directly here, needs to be handled in `tabBarLabel`
            },
            tabBarStyle: styles.tabBar,
            headerShown: false,
        }}
        >
        <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                        fontSize: 10,
                        fontWeight: '600',
                        fontFamily: 'Sora_600SemiBold',
                        color: focused ? colors.burntSienna : inactiveIconColor,
                    }}>
                        Home
                    </Text>
                ),
                tabBarIcon: ({ focused }) => (
                    // <View style={styles.tabBarButton}>
                        <HomeIcon width={24} height={24} color={focused ? colors.burntSienna : inactiveIconColor} />
                    //     <Text style={styles.tabBarButtonText}>Home</Text>
                    // </View>
                )}
            }
        />
        <Tab.Screen 
            name="Transactions" 
            component={Transactions} 
            options={{
                tabBarLabel: ({ focused }) => (
                    <Text 
                        numberOfLines={1}
                        ellipsizeMode="tail" 
                        style={{
                            fontSize: 10,
                            fontWeight: '600',
                            fontFamily: 'Sora_600SemiBold',
                            color: focused ? colors.burntSienna : inactiveIconColor,
                        }}
                    >
                        Transactions
                    </Text>
                ),
                tabBarIcon: ({ focused }) => (
                    <TransactionsIcon width={30} height={30} color={focused ? colors.burntSienna : inactiveIconColor} />
                )}
            }
        />
        <Tab.Screen 
            name="Plus" 
            component={Dummy} 
            options={{
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props}>
                        <View style={styles.plusIconWrapper}>
                            <Icon name="add" size={28} color="#fff" />
                        </View>
                    </CustomTabBarButton>
                )}
            }
        />
        <Tab.Screen 
            name="Statistics" 
            component={Statistics} 
            options={{
                tabBarLabel: ({ focused }) => (
                    <Text 
                        numberOfLines={1}
                        ellipsizeMode="tail" 
                        style={{
                            fontSize: 10,
                            fontWeight: '600',
                            fontFamily: 'Sora_600SemiBold',
                            color: focused ? colors.burntSienna : inactiveIconColor,
                        }}>
                        Statistics
                    </Text>
                ),
                tabBarIcon: ({ focused }) => (
                    <ChartIcon width={30} height={30} color={focused ? colors.burntSienna : inactiveIconColor} />
                )}
        }
        />
        <Tab.Screen 
            name="Settings" 
            component={Settings} 
            options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                        fontSize: 10,
                        fontWeight: '600',
                        fontFamily: 'Sora_600SemiBold',
                        color: focused ? colors.burntSienna : inactiveIconColor,
                    }}>
                        Settings
                    </Text>
                ),
                tabBarIcon: ({ focused }) => (
                    <CogIcon width={28} height={28} color={focused ? colors.burntSienna : inactiveIconColor} />
                )}
            }
        />
        </Tab.Navigator>
    );
};

export default UserLayout;
