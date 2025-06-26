import React, { JSX } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Header component similar to the screenshot
interface SectionHeaderProps {
    title: string;
}

export const SectionHeader = ({ title }: SectionHeaderProps): JSX.Element => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 20,
        marginTop: 40,
        backgroundColor: '#eaff36',
        paddingVertical: 16,
        marginHorizontal: 12,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    headerTextContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
}); 