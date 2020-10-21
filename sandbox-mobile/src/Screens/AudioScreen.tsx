import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ListRenderItemInfo,
  Image,
  FlatList,
  Button,
} from "react-native";
import { baseUrl, Blue } from "../Constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export interface AudioEntry {
  id: number;
  title: string;
  description: string;
  source: string;
}

const Item = ({ item, onPress }: { item: AudioEntry; onPress: () => void }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.itemTitle}>{item.title}</Text>
  </TouchableOpacity>
);

async function fetchAudio() {
  const res = await fetch(`${baseUrl}/api/Audio/`);
  const result = await res.json();
  return result.Audio;
}

export function AudioScreen() {
  const navigation = useNavigation();
  const [Audio, setAudio] = useState<AudioEntry[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  function fetchAndSetState() {
    // Reset state
    setAudio([]);
    setError(undefined);

    setTimeout(() => {
      fetchAudio()
        .then((Audio) => {
          setAudio(Audio);
        })
        .catch((e) => {
          setError(e.toString());
        });
    }, 200);
  }

  useEffect(() => {
    fetchAndSetState();
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.buttonWrapper}>
        <Button
          title="Reload Audio"
          color={Blue}
          onPress={() => {
            setTimeout(() => {
              fetchAndSetState();
            }, 200); // Small delay
          }}
        />
      </View>
      {error && <Text>Error: {error}</Text>}
      <FlatList
        data={Audio}
        renderItem={({ item }) => (
          <Item
            item={item}
            onPress={() => navigation.navigate("AudioDetails", { item })}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
 }

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      paddingHorizontal: 16,
    },
    buttonWrapper: {
      flexDirection: "row",
      justifyContent: "flex-end",
      paddingTop: 10,
      paddingBottom: 10,
    },
    item: {
      paddingLeft: 20,
      alignItems: "flex-start",
      backgroundColor: "#ddd",
      borderRadius: 2,
      paddingTop: 10,
      paddingBottom: 10,
      marginVertical: 8,
      marginHorizontal: 10,
    },
    itemTitle: {
      fontSize: 24,
    },
    img: {
      width: 220,
      height: 124,
      borderColor: "#bbb",
      borderWidth: 1,
      borderRadius: 2,
    },
  });
