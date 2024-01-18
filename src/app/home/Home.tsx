import React, {FunctionComponent} from 'react';
import {SafeAreaView, Text} from 'react-native';
import tw from 'src/lib/tailwind';

const Home: FunctionComponent = () => {
  return (
    <SafeAreaView>
      <Text style={tw`text-black`}>Hello this is the boss</Text>
    </SafeAreaView>
  );
};

export default Home;
