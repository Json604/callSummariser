import {NativeModules,PermissionsAndroid,Platform,ToastAndroid} from 'react-native'
const{CallRecording}=NativeModules
export const startRecording=async()=>{
    if(Platform.OS === 'android')return
    const granted=await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
        PermissionsAndroid.PERMISSIONS.PROCESS_OUTGOING_CALLS
    ])
    const allPermissionsGranted=Object.values(granted).every(status=>status==='granted')
}

//
// import { NativeModules, PermissionsAndroid, Platform, ToastAndroid } from 'react-native';
// const { CallRecording } = NativeModules;

// export const startRecording = async () => {
//   if (Platform.OS !== 'android') return;

//   const granted = await PermissionsAndroid.requestMultiple([
//     PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//     PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
//     PermissionsAndroid.PERMISSIONS.PROCESS_OUTGOING_CALLS,
//     PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
//     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//     PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//   ]);

//   const allGranted = Object.values(granted).every(
//     (status) => status === PermissionsAndroid.RESULTS.GRANTED
//   );

//   if (!allGranted) {
//     ToastAndroid.show("Permissions not granted", ToastAndroid.SHORT);
//     return;
//   }

//   CallRecording.startRecording();
//   ToastAndroid.show("Recording Started", ToastAndroid.SHORT);
// };

// export const stopRecording = async () => {
//   if (Platform.OS !== 'android') return null;

//   const filePath = await CallRecording.stopRecording();
//   ToastAndroid.show("Recording Stopped", ToastAndroid.SHORT);
//   return filePath;
// };