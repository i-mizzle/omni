import { useGlobalStyles } from '@/app/hooks/useGlobalStyles'
import { useTheme } from '@/app/providers/ThemeProvider'
import { colors } from '@/static/colors'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ArrowIcon from '../../elements/icons/ArrowIcon'
import ExchangeIcon from '../../elements/icons/ExchangeIcon'
import ReceiveIcon from '../../elements/icons/ReceiveIcon'
import SendIcon from '../../elements/icons/SendIcon'

const HomeBalanceCard = () => {
    const globalStyles = useGlobalStyles()
    const { theme } = useTheme()
    const styles = StyleSheet.create({
        balanceContainer: {
            padding: 20,
            backgroundColor: theme === 'dark' ? colors.eerieBlack : '#fff',
            borderRadius: 10,
            width: '100%',
            marginTop: 20,
            // flex: 1,
            alignItems: 'stretch',
            shadowColor: theme === 'light' ? '#000' : colors.burntSienna,
            // shadowOffset: { width: 0, height: 0 },
            // shadowOpacity: 0.1,
            // shadowRadius: 6,
            // elevation: 8
        },
        balance: {
            fontFamily: 'Sora_400Regular',
            // fontFamily: 'SpaceMono-Bold',
            fontSize: 28,
            lineHeight: 40,
            // letterSpacing: -1.5,
            color: theme === 'dark' ? colors.whiteSmoke : colors.night,
        },
        balanceLabel: {
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: 3,
            marginBottom: 10,
            color: theme === 'dark' ? colors.silver : colors.outerSpace
        },
        buttonsContainer: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'center',
            gap: 15,
            maxWidth: '100%',
            marginTop: 20
        },
        button: {
            borderRadius: 15,
            width: '30%',
            padding: 15,
            textAlign: 'center',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme === 'dark' ? '#ffffff09' : colors.whiteSmoke,
        },
        buttonText: {
            fontSize: 12,
            fontFamily: 'Sora_600SemiBold',
            color: theme === 'dark' ? colors.silver : colors.outerSpace,
            marginTop: 5
        }

    })

    return (
        <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>TOTAL BALANCE</Text>
            <Text style={styles.balance}>₦37,420.96</Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <SendIcon width={30} height={30} color={theme === 'dark' ? colors.burntSienna : colors.silver} />
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <ReceiveIcon width={30} height={30} color={theme === 'dark' ? colors.burntSienna : colors.silver} />
                    <Text style={styles.buttonText}>Receive</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <ExchangeIcon width={30} height={30} color={theme === 'dark' ? colors.burntSienna : colors.silver} />
                    <Text style={styles.buttonText}>Exchange</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeBalanceCard