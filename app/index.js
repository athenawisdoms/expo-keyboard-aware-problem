import { Text, TextInput, View } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState(null);
  const [numNewMessages, setNumNewMessages] = useState(0);

  // Simulate a new message received every few seconds
  setInterval(() => {
    setNumNewMessages((numNewMessages) => numNewMessages + 1);
  }, 3000);

  return (
    <SafeAreaView className="flex container h-full">
      <KeyboardAwareScrollView className="flex-grow bg-blue-100">
        {[...Array(10)].map((e, i) => (
          <Text key={i} className="my-10">
            Hello {i}!
          </Text>
        ))}

        {[...Array(numNewMessages)].map((e, i) => (
          <Text key={i} className="my-10">
            New msg {i}!
          </Text>
        ))}
      </KeyboardAwareScrollView>

      <View className="p-3">
        <TextInput
          className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Type your message"
          onChangeText={(value) => setInput(value)}
          value={input}
        />
      </View>
    </SafeAreaView>
  );
}
