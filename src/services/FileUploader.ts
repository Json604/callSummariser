import RNFS from 'react-native-fs';
import { decode } from 'base64-arraybuffer';
import { supabase } from '../api/supabaseClient';

/**
 * Uploads a local audio file to Supabase Storage
 * @param localFilePath The file path on device (from stopRecording)
 * @param filename A unique name for the upload (e.g. call-123.wav)
 * @returns Public URL of the uploaded audio file
 */
export const uploadAudio = async (localFilePath: string, filename: string): Promise<string> => {
  try {
    // Step 1: Read file from local storage as base64
    const fileBase64 = await RNFS.readFile(localFilePath, 'base64');

    // Step 2: Convert to binary buffer for Supabase
    const fileBuffer = decode(fileBase64);

    // Step 3: Upload to Supabase Storage
    const { error } = await supabase.storage
      .from('recordings')
      .upload(filename, fileBuffer, {
        contentType: 'audio/wav',
        upsert: true,
      });

    if (error) throw error;

    // Step 4: Get public URL for file
    const { publicUrl } = supabase.storage
      .from('recordings')
      .getPublicUrl(filename).data;

    if (!publicUrl) throw new Error("Failed to get public URL");

    return publicUrl;
  } catch (err: any) {
    console.error("Upload failed:", err.message);
    throw err;
  }
};