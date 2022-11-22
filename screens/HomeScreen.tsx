import React from "react";
import { StyleSheet, FlatList, ScrollView } from "react-native";
import Badge from "../components/badge";
import CityList from "../components/cityList";
import CityListItem from "../components/cityListItem";
import EditScreenInfo from "../components/EditScreenInfo";
import PropertyList from "../components/propertyList";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import NavBar from "../components/models/NavBar";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <CityList />
        {/* <CityListItem city='الرياض' count={250}/> */}
        <PropertyList title={"أضيفت مؤخرا"} label={"للبيع"} />
        <PropertyList title={"أضيفت مؤخرا"} label={"للايجار"} />
      </ScrollView>

      <View style={{ position: "absolute", bottom: 10 }}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
