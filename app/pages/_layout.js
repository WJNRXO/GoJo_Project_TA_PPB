import { Tabs } from "expo-router"
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

export default () => {
    return(
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen 
                name="about"
                options={
                    {
                        tabBarIcon: ({color}) => <Ionicons name="information-circle-outline" size={24} color="black" />
                    }
                }
            />
            <Tabs.Screen 
                name="home"
                options={
                    {
                        tabBarIcon: ({color}) => <AntDesign name="home" size={24} color="black" />,
                    }
                }
                />
            <Tabs.Screen 
                name="profile"
                options={
                    {
                        tabBarIcon: ({color}) => <Ionicons name="person-outline" size={24} color="black" />,
                    }
                }
                />
        </Tabs>
        
    )
}