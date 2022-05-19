import React from "react";
import { Modal, Text } from "react-native";
import styled from "styled-components";

const ModalPlaylistSave = ({ modalVisivle }) => {
  return (
    <Modal transparent={true} visible={modalVisivle} animationType="slide">
      <Container>
        <Text>아</Text>
      </Container>
    </Modal>
  );
};

export default ModalPlaylistSave;
