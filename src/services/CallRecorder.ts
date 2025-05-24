import {NativeModules,PermissionAndroid,Platform,ToastAndroid} from 'react-native';
const{CallRecording}=NativeModules
export const startRecording=async()=>{
    if(Platform.Os!=='Android')return
    const granted=await PermissionAndroid.requestMultiple([
        PermissionAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionAndroid.PERMISSIONS.READ_PHONE_STATE,
        
    ])
}