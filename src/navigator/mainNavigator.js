import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import BlankScreen28218308Navigator from '../features/BlankScreen28218308/navigator';
import BlankScreen27218307Navigator from '../features/BlankScreen27218307/navigator';

/**
 * new navigators can be imported here
 */ import Admin26218177 from "../features/Admin26218177/navigator"

const AppNavigator = {
  Admin26218177: { screen: Admin26218177 },
  //@BlueprintNavigationInsertion
BlankScreen28218308: { screen: BlankScreen28218308Navigator },
BlankScreen27218307: { screen: BlankScreen27218307Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
