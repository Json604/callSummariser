import axios from 'axios';

const ASSEMBLYAI_API_KEY = "2c6531706c614d0597ac82c3295ef487"; // 🔐 Replace with your actual key or import from @env

interface TranscriptionResult {
  transcript: string;
  summary: string;
}

export const transcribeAudio = async (audioUrl: string): Promise<TranscriptionResult> => {
  // Step 1: Submit audio for transcription + summarization
  const submitRes = await axios.post(
    'https://api.assemblyai.com/v2/transcript',
    {
      audio_url: audioUrl,
      summarization: true,
      summary_type: 'bullets',
    },
    {
      headers: {
        authorization: ASSEMBLYAI_API_KEY,
        'content-type': 'application/json',
      },
    }
  );

  const transcriptId = submitRes.data.id;

  // Step 2: Poll AssemblyAI for completion
  let result;
  while (!result || result.status !== 'completed') {
    await new Promise((r) => setTimeout(r, 4000)); // wait 4 seconds
    const pollRes = await axios.get(
      `https://api.assemblyai.com/v2/transcript/${transcriptId}`,
      {
        headers: {
          authorization: ASSEMBLYAI_API_KEY,
        },
      }
    );
    result = pollRes.data;
  }

  return {
    transcript: result.text,
    summary: result.summary,
  };
};