import { Text, View } from "react-native";

export default function Home(){
    return(
        <View style={{flex: 1, display:"flex", justifyContent:'flex-start', alignItems:'center',top:'10%'}}>
            <Text style={{color:'white', fontSize:50}}>Home details</Text>
        </View>
    )
}