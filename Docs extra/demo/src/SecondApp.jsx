import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";
const SelectableText = ({ text, onSelectionChange }) => {
  const [selection, setSelection] = useState({ start: -1, end: -1 });

  const handleSelectionChange = (event) => {
    const { selectionStart, selectionEnd } = event.nativeEvent;
    setSelection({ start: selectionStart, end: selectionEnd });
    onSelectionChange(event);
  };

  return (
    <Text selectable onSelectionChange={handleSelectionChange}>
      {text}
    </Text>
  );
};

const Login = () => {
  const [selectedText, setSelectedText] = useState("");

  const handleCopyText = async () => {
    if (selectedText.trim() !== "") {
      await Clipboard.setString(selectedText);
      Alert.alert("Text Copied", "Selected text has been copied to clipboard.");
    } else {
      Alert.alert("Error", "No text selected.");
    }
  };

  const handleSelectionChange = (event) => {
    const selected = event.nativeEvent.selection;
    const text = event.nativeEvent.text;
    const selectedText = text.substring(selected.start, selected.end);
    setSelectedText(selectedText);
  };

  return (
    <View>
      <SelectableText
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onSelectionChange={handleSelectionChange}
      />
      <TouchableOpacity onPress={handleCopyText}>
        <Text>Copy Selected Text</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
