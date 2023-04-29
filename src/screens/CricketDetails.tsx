import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function CricketDetails({ navigation, route }: any) {
  const { match } = route.params;
  const { teams, matchType, status, venue, date } = match;

  navigation.setOptions({ headerTitle: `Match Details` });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.matchInfoContainer}>
        <Text style={styles.infoTitle}>Teams</Text>
        <Text>
          {teams[0]} vs {teams[1]}
        </Text>
      </View>
      {matchType && (
        <View style={styles.matchInfoContainer}>
          <Text style={styles.infoTitle}>Match Type</Text>
          <Text>{matchType.toUpperCase()}</Text>
        </View>
      )}
      <View style={styles.matchInfoContainer}>
        <Text style={styles.infoTitle}>Match Status</Text>
        <Text>{status}</Text>
      </View>
      <View style={styles.matchInfoContainer}>
        <Text style={styles.infoTitle}>Match Venue</Text>
        <Text>{venue}</Text>
      </View>
      <View style={styles.matchInfoContainer}>
        <Text style={styles.infoTitle}>Match Date</Text>
        <Text>{date}</Text>
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

export default CricketDetails;
