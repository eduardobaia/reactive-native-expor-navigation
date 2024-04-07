import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';

import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";


const Drawer = createDrawerNavigator();

StackRoutes
export default function DrawerRoutes(){
    return (
        <Drawer.Navigator screenOptions={{title:''}}>
            <Drawer.Screen
            name="Main"
            component={TabRoutes}
            options={{
                drawerIcon: ({color, size}) => <Feather name="plus" color={color} size={size} />,
                drawerLabel: 'Home'
            }}
            />

            <Drawer.Screen
            name="profile"
            component={StackRoutes}
            options={{
                drawerIcon: ({color, size}) => <Feather name="user" color={color} size={size} />,
                drawerLabel: 'Meu perfil'
            }}
            />
        </Drawer.Navigator>
        
    )
}


