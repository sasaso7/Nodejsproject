import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { ScreenParamList } from "../App";
import { baseUrl } from "../Constants";
import FileViewer from "react-file-viewer";

export function AudioDetails() {
    const route = useRoute<RouteProp<ScreenParamList, 'AudioDetails'>>();
    const { item } = route.params;

    return (
              <SafeAreaView style={styles.screen}>
            <Text style={styles.title}>{item.title}</Text>

            <Text style={styles.desc}>{item.description}</Text>

            <Image
                style={styles.image}
                resizeMode='contain'
                source={{uri: `${baseUrl}/${item.source}`}}
                />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 10,
    },
    desc: {
        color: 'grey',
        lineHeight: 20,
    },
    Audio: {
        flex: 1,
    },
});