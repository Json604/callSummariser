import { StyleSheet,Dimensions } from "react-native";
import { BlurView } from "@react-native-community/blur";
import { Home,CallDetails, Settings } from "../screens";
import { BottomParam } from "../types/navTypes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Feather';


const Tab = createBottomTabNavigator<BottomParam>();
const { width } = Dimensions.get('window');

export default function AppNavigator(){
    return(
        <NavigationContainer >
            <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={{
                // animation:'fade',
                headerShown:false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 50,
                    marginHorizontal:80,
                    height: 70,
                    borderRadius: 50, 
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    borderWidth: 0.5,
                    // borderColor: 'rgba(255,255,255,0.1)', 
                },
                tabBarIconStyle: {
                    marginTop: 10, 
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 5, 
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarBackground: () => null,
            }}
            >
                <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({color,size}: {color:string, size:number}) => (
                        <Icon name='home' color={color} size={size}/>
                    )
                }}
                />
                <Tab.Screen 
                name="CallLog" 
                component={CallDetails} 
                options={{
                    tabBarIcon: ({color,size}: {color:string, size:number}) => (
                        <Icon2 name='phone-call' color={color} size={size}/>
                    )
                }}
                />
                <Tab.Screen 
                name="Settings" 
                component={Settings} 
                options={{
                    tabBarIcon: ({color,size}: {color:string, size:number}) => (
                        <Icon name='gear' color={color} size={size}/>
                    )
                }}/>
            </Tab.Navigator>
                    <BlurView
                    style={{
                        position: 'absolute',
                        bottom: 50,
                        left: 80,
                        width: width - 160, 
                        height: 70,
                        borderRadius: 50,
                        zIndex: -1, 
                    }}
                    blurType="light"
                    blurAmount={10}
                    reducedTransparencyFallbackColor="rgba(0,0,0,0.6)"
                    />
        </NavigationContainer>
    )
}

