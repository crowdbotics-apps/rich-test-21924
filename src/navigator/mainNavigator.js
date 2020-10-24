import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps160171Navigator from '../features/Maps160171/navigator';
import Add-Item160170Navigator from '../features/Add-Item160170/navigator';
import Maps160166Navigator from '../features/Maps160166/navigator';
import UserProfile160162Navigator from '../features/UserProfile160162/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps160171: { screen: Maps160171Navigator },
Add-Item160170: { screen: Add-Item160170Navigator },
Maps160166: { screen: Maps160166Navigator },
UserProfile160162: { screen: UserProfile160162Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
