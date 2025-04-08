import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Avatar = ({ uri, size = 48 }: { uri: string; size?: number }) => {
    const styles = StyleSheet.create({
        avatarContainer: {
          overflow: 'hidden',
          backgroundColor: '#ccc',
        },
        avatarImage: {
          resizeMode: 'cover',
        },
    });
    
    return (
        <View style={[styles.avatarContainer, { width: size, height: size, borderRadius: size / 2 }]}>
            <Image source={{ uri }} style={[styles.avatarImage, { width: size, height: size, borderRadius: size / 2 }]} />
        </View>
    );
};

export default Avatar;
