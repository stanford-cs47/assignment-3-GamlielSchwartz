import React from 'react'
import { StyleSheet, View, Text, Linking, TouchableOpacity } from 'react-native'
import { iOSColors, iOSUIKit } from 'react-native-typography'
import metrics from '../Themes/Metrics';
import { MaterialIcons } from '@expo/vector-icons';

handlePress = (url) => {
    Linking.openURL(url);
};

export default function Article(props) {
    const url = props.url;
    const title = props.title;
    const snippet = props.snippet;
    const byline = props.byline;
    const date = props.date;
    return (
        <TouchableOpacity style={styles.article} onPress={() => handlePress(url)}>
            <View style={{ flexGrow: 1, flex: 1, margin: 10 }}>
                    <Text style={iOSUIKit.title3Emphasized}>{title}</Text>

                <Text style={iOSUIKit.subheadShort}>{snippet + "\n"}</Text>
                <Text style={iOSUIKit.title3}>{byline}</Text>
                <Text style={styles.date}>{date}</Text>
                <MaterialIcons
                        name="delete"
                        size={32}
                        color="black"
                        onPress={() => props.setArticles(url)}
                        style={{ flex: 1 }}
                    />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    article: {
        flex: 1,
        height: metrics.screenHeight / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    date: {
        color: iOSColors.gray
    }
});