import React from "react";
import { Image, Spinner, HStack, Heading, Center } from "native-base";


const SplashScreen = () => {
  return (
    <Center flex={1} px="3">
      <HStack space={2} alignItems="center" py="5">
        <Image
          size={"md"}
          resizeMode="cover"
          source={{
            uri: "logo",
          }}
          alt={"WatchMoney"}
        />
      </HStack>
      <HStack space={2} alignItems="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
      </HStack>
    </Center>
  );
};

export default SplashScreen;
