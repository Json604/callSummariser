import {supabase}from './supabaseClient';

interface CallData {
  user_id: string;
  audio_url: string;
  transcript: string;
  summary: string;
}

export const saveCallRecord = async (callData: CallData): Promise<void> => {
  const { error } = await supabase.from('calls').insert([callData]);

  if (error) {
    console.error('Failed to save call record:', error.message);
    throw error;
  }
};