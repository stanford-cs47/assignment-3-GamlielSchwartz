import React from 'react'
import { StyleSheet, View, Text, Linking, TouchableOpacity } from 'react-native'
import { iOSColors, iOSUIKit } from 'react-native-typography'
import metrics from '../Themes/Metrics';

handlePress = (url) => {
    Linking.openURL(url);
  };

export default function Article({ title, snippet, byline, date, url }) {
    return (
        <TouchableOpacity style={styles.article} onPress={() => handlePress(url)}>
            <View>
                <Text style={iOSUIKit.title3Emphasized}>{title}</Text>
                <Text style={iOSUIKit.subheadShort}>{snippet + "\n"}</Text>
                <Text style={iOSUIKit.title3}>{byline}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    article: {
        height: metrics.screenHeight / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    date: {
        color: iOSColors.gray
    }
});