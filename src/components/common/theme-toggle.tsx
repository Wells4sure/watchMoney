import React from 'react'
import { HStack, Switch, useColorMode, Text } from 'native-base'

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light' ? true : false}
        onToggle={toggleColorMode}
      ></Switch>
      <Text>Light</Text>
    </HStack>
  )
}

export default ThemeToggle
