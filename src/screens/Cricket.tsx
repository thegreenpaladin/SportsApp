import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import cricketData from "../../assets/cricketApiData";

function Cricket({ navigation }: any) {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setMatches(JSON.parse(cricketData));
    // setLoading(false);
    fetch(
      "https://api.cricapi.com/v1/matches?apikey=b82687f1-3cdf-4dc0-bf23-f8b3e03f1831&offset=0"
    )
      .then((response) => response.json())
      .then((data) => {
        setMatches(data["data"]);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const displayMatches = (itemObject: any) => {
    const { item, index } = itemObject;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CricketDetails", {
            match: item,
          })
        }
      >
        <View style={styles.matchContainer}>
          <Text>
            {item.teams[0]} vs {item.teams[1]}
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
          <FlatList data={matches} renderItem={displayMatches} />
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

export default Cricket;
