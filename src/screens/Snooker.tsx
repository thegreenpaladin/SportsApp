import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import snookerData from "../../assets/snookerApiData";

function Snooker({ navigation }: any) {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://snooker-detect.p.rapidapi.com/events", {
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "537caeeee7msh9a1999bdc3100d5p1b8116jsnfcf79ccbc56a",
        "X-RapidAPI-Host": "snooker-detect.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFixtures(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const displayFixtures = (itemObject: any) => {
    const { item, index } = itemObject;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("SnookerDetails", {
            match: item,
          })
        }
      >
        <View style={styles.matchContainer}>
          <Text>
            {item.home_team_name} vs {item.away_team_name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <FlatList data={fixtures} renderItem={displayFixtures} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
  },
  matchContainer: {
    height: 40,
    backgroundColor: "#e0e0e0",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
  },
});

export default Snooker;
