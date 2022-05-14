import React, { useContext } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { ImageButton } from "../../../components/buttons/button.component";

export const StatsScreen = () => {
  return (
    <>
      <SafeArea>
        <Text style={styles.title}>Admin</Text>
        <View
          style={{
            display: "flex",
            flexFlow: "row wrap",
            marginTop: "50px",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageButton
            icon="tag-plus"
            caption="Add New Item"
            func={() => console.log("I passed a function!!!")}
          />
          <ImageButton
            icon="tag-plus"
            caption="Add New Item"
            func={() => console.log("I passed a function!!!")}
          />
          <ImageButton
            icon="tag-plus"
            caption="Add New Item"
            func={() => console.log("I passed a function!!!")}
          />
          <ImageButton
            icon="tag-plus"
            caption="Add New Item"
            func={() => console.log("I passed a function!!!")}
          />
        </View>
      </SafeArea>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#aa10aa",
    fontSize: 42,
    textAlign: "center",
  },
  body: {
    color: "#000",
    fontSize: 22,
    textAlign: "center",
  },
});
