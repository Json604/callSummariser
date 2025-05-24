import {NativeModules,PermissionAndroid,Platform,ToastAndroid} from 'react-native'
const{CallRecording}=NativeModules
export const startRecording=async()=>{
    if(Platform.Os!=='Android')return
    const granted=await PermissionAndroid.requestMultiple([
        PermissionAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionAndroid.PERMISSIONS.READ_PHONE_STATE,
        PermissionAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        PermissionAndroid.PERMISSIONS.PROCESS_OUTGOING_CALLS
    ])
}