import React, { useState } from 'react'
import { Text, IconButton, Icon, Center, Box } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ThemeToggle from '../common/theme-toggle'
import SplashScreen from '../Splash/SplashScreen'

function HomeScreen() {
  return (
    <Center
      flex={1}
      _dark={{ bg: 'coolGray.800' }}
      _light={{ bg: 'warmGray.50' }}
    >
      <Text fontSize="lg" display="flex" mb="20">
        The active color mode is{' '}
        <Text bold fontSize="lg">
          test
        </Text>
      </Text>
    </Center>
  )
}

const MainNavigation = () => {
  const Stack = createNativeStackNavigator()
  const [loading, setLoading] = useState(false)

  if (loading) return <SplashScreen />

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <IconButton
                icon={
                  <Icon
                    as={AntDesign}
                    name="menu-fold"
                    size={24}
                    color="black"
                  />
                }
                borderRadius="full"
                _icon={{
                  color: 'orange.500',
                  size: 'md'
                }}
                _hover={{
                  bg: 'orange.600:alpha.20'
                }}
                _pressed={{
                  bg: 'orange.600:alpha.20',
                  _icon: {
                    name: 'menu-unfold'
                  }
                }}
                onPress={() => alert('This is a button!')}
              />
            ),
            headerRight: () => <ThemeToggle />
          }}
        />
      </Stack.Navigator>
    </>
  )
}

export default MainNavigation
