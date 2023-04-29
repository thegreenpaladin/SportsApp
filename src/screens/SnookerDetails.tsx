import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";

function SnookerDetails({ navigation, route }: any) {
  const { match } = route.params;
  const {
    home_team_name,
    away_team_name,
    home_team_score,
    away_team_score,
    round,
    status,
    tournament_name,
  } = match;

  useEffect(() => {
    navigation.setOptions({ headerTitle: `Match Details` });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.matchInfoContainer}>
        <Text style={styles.infoTitle}>Players</Text>
        <Text>
          {home_team_name} vs {away_team_name}
        </Text>
      </View>
      {home_team_score && away_team_score && (
        <View style={styles.matchInfoContainer}>
          <Text style={styles.infoTitle}>Score</Text>
          <Text>
            {home_team_name}
            {"   "}
            {home_team_score["current"]} - {away_team_score["current"]}
            {"   "}
            {away_team_name}
          </Text>
        </View>
      )}
      {round && (
        <View style={styles.matchInfoContainer}>
          <Text style={styles.infoTitle}>Round</Text>
          <Text>{round["name"]}</Text>
        </View>
      )}
      <View style={styles.matchInfoContainer}>
        <Text style={styles.infoTitle}>Status</Text>
        <Text>{status["description"]}</Text>
      </View>
      <View style={styles.matchInfoContainer}>
        <Text style={styles.infoTitle}>Tournament</Text>
        <Text>{tournament_name}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  matchInfoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    height: 70,
    width: "100%",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  infoTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default SnookerDetails;
