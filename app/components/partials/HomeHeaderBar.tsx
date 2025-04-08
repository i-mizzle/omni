import { useTheme } from '@/app/providers/ThemeProvider'
import { colors } from '@/static/colors'
import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ArrowIcon from '../elements/icons/ArrowIcon'
import BellIcon from '../elements/icons/BellIcon'
import Avatar from '../elements/Avatar'

const HomeHeaderBar = () => {
    const {theme} = useTheme()
    const styles = StyleSheet.create({
        barContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center', 
            gap: 10,
            paddingTop: 20,
            width: '100%',
            // backgroundColor: theme === 'dark' ? colors.whiteSmoke : colors.night,
            backgroundColor: theme === 'dark' ? colors.night : colors.whiteSmoke,
        },
        title: {
            fontSize: 16,
            fontFamily: 'Sora_600SemiBold',
            color: theme === 'dark' ? colors.whiteSmoke : colors.night
        },
        menuButton: {
            backgroundColor: theme === 'light' ? '#fff' : '#000', 
            width: 50, 
            height: 50, 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'center', 
            borderRadius: 50, 
        },
    })

    return (
        <View style={styles.barContainer}>
            <View style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center'
            }}>
                <Avatar size={75} uri='https://images.pexels.com/photos/17059425/pexels-photo-17059425/free-photo-of-bearded-man-in-a-baseball-cap.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load' />
                <View>
                    <Text style={{
                        color: theme === 'dark' ? colors.silver : colors.outerSpace,
                        fontSize: 14,
                        fontFamily: 'Sora_400Regular',
                    }}>Welcome</Text>
                    <Text style={styles.title}>Immanuel Onum</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.menuButton}>
                <View style={{
                    position: 'relative'
                }}>
                    <BellIcon width={20} height={20} color={theme === 'dark' ? colors.silver : colors.night} />
                    <View style={{
                        position: 'absolute',
                        width: 7,
                        height: 7,
                        borderRadius: 7,
                        backgroundColor: colors.burntSienna,
                        top: 0,
                        right: 2
                    }}></View>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default HomeHeaderBar
