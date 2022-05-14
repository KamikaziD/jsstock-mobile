import React from "react";
import styled from "styled-components/native";
import { Button, Icon, List } from "react-native-paper";

const BtnIcon = styled(List.Icon)`
  height: 40px;
  width: 40px;
  padding-bottom: 30px;
`;

const ImgButton = styled(Button).attrs({
  contentStyle: {
    wrap: true,
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "150px",
  },
  labelStyle: {
    color: `${(props) => props.theme.colors.text.primary}`,
  },
})`
  height: 150px;
  width: 150px;
  margin: 10px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const ImageButton = ({ caption, icon, func }) => {
  return (
    <>
      <ImgButton caption={caption} dark={false} mode="contained" onPress={func}>
        <BtnIcon
          icon={icon}
          color={(props) => props.theme.colors.brand.primary}
        />
        <br />
        {caption}
      </ImgButton>
    </>
  );
};
