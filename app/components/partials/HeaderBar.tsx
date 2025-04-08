import { useTheme } from '@/app/providers/ThemeProvider'
import { colors } from '@/static/colors'
import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import EllipsisIcon from '../elements/icons/EllipsisIcon'
import ArrowIcon from '../elements/icons/ArrowIcon'

interface Props {
    viewTitle: string
}

const HeaderBar: FC<Props> = ({viewTitle}) => {
    const {theme} = useTheme()
    const styles = StyleSheet.create({
        barContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center', 
            gap: 10,
            width: '100%',
            // backgroundColor: theme === 'dark' ? colors.whiteSmoke : colors.night,
            backgroundColor: theme === 'dark' ? colors.night : colors.whiteSmoke,
        },
        title: {
            fontSize: 16,
            fontFamily: 'Sora_400Regular',
            color: theme === 'dark' ? colors.silver : colors.night
        },
        menuButton: {
            backgroundColor: theme === 'light' ? '#fff' : '#000', 
            width: 50, 
            height: 50, 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'center', 
            borderRadius: 50, 
        }
    })

    return (
        <View style={styles.barContainer}>
            <TouchableOpacity style={styles.menuButton}>
                <ArrowIcon width={20} height={20} color={theme === 'dark' ? colors.whiteSmoke : colors.night} />
            </TouchableOpacity>
            <Text style={styles.title}>{viewTitle}</Text>
            <TouchableOpacity style={styles.menuButton}>
                <EllipsisIcon width={20} height={20} color={theme === 'dark' ? colors.whiteSmoke : colors.night} />
            </TouchableOpacity>

        </View>
    )
}

export default HeaderBar
