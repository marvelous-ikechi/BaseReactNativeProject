import React, {FunctionComponent} from 'react';
import {SafeAreaView, Text} from 'react-native';
import tw from 'src/lib/tailwind';
import Home from 'src/app/home/Home';

const App: FunctionComponent = () => {
  return (
    <SafeAreaView>
      <Text style={tw`text-black`}>Hello world</Text>
      <Home />
    </SafeAreaView>
  );
};

export default App;
