import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ListRenderItemInfo, FlatList, Button } from "react-native";
import { baseUrl, Blue } from '../Constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export interface AudioEntry {
    id: number;
    title: string;
    description: string;
    source: string;

}

const Item = ({ item}: { item: AudioEntry}) => (
    <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <AudioPlayer src={`${baseUrl}/${item.source}` }
        //Removes volume button
        customVolumeControls={[]}
        //Removes shuffle button
        customAdditionalControls={[]}
        //Removes arrows
        showJumpControls={false}
         onPlay={e => console.log("onPlay")} style={{width:"700px", marginTop:10, backgroundColor: "#B99480", borderRadius:3,}}
        />
    </View>
    
);

async function fetchAudios() {
    const res = await fetch(`${baseUrl}/api/audio/`)
    const result = await res.json();
    return result.audio;
}

export function AudioScreen() {
    const navigation = useNavigation();
    const [ Audio, setAudio ] = useState<AudioEntry[]>([]);
    const [ error, setError ] = useState<string | undefined>(undefined);

    function fetchAndSetState() {
        // Reset state
        setAudio([])
        setError(undefined);
        setTimeout(() => {
            fetchAudios().then(imgs => {
                setAudio(imgs);
            }).catch(e => {
                setError(e.toString());
            });
        }, 200);
    }

    // Load Audios when screen loads
    useEffect(() => {
        fetchAndSetState();
    }, []);

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.buttonWrapper}>
                <Button
                    title="Reload Audios"
                    color={Blue}
                    onPress={() => {
                        setTimeout(() => {
                            fetchAndSetState();
                        }, 200); // Small delay
                    }}
                />
            </View>
            {error && (
                <Text>Error: {error}</Text>
            )}
            <FlatList
                data={Audio}
                renderItem={({ item }) => <Item item={item}/>}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 2,
        paddingHorizontal: 16,
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 10,
        paddingBottom: 10,
        marginRight:20,
    },
    item: {
        alignItems: "center",
        backgroundColor: "#ddd",
        borderRadius: 2,
        paddingTop: 10,
        paddingBottom: 20,
        marginVertical: 8,
        marginLeft: 30,
        marginRight:30

    },
    itemTitle: {
        fontSize: 20
    },
    img: {
        width: 220,
        height: 124,
        borderColor: "#bbb",
        borderWidth: 1,
        borderRadius: 2,
    },
});
