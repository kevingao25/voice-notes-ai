// src/hooks/useAudioRecorder.ts

import { useState, useCallback } from 'react';

interface AudioRecorderHook {
    isRecording: boolean;
    startRecording: () => Promise<void>;
    stopRecording: () => void;
    audioBlob: Blob | null;
}

const useAudioRecorder = (): AudioRecorderHook => {
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

    const startRecording = useCallback(async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const recorder = new MediaRecorder(stream);
            setMediaRecorder(recorder);

            recorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    setAudioChunks((chunks) => [...chunks, event.data]);
                }
            };

            recorder.onstop = () => {
                const blob = new Blob(audioChunks, { type: 'audio/webm' });
                setAudioBlob(blob);
                setAudioChunks([]);
            };

            recorder.start();
            setIsRecording(true);
        } catch (error) {
            console.error('Error starting recording:', error);
        }
    }, []);

    const stopRecording = useCallback(() => {
        if (mediaRecorder && isRecording) {
            mediaRecorder.stop();
            setIsRecording(false);
            mediaRecorder.stream.getTracks().forEach(track => track.stop());
        }
    }, [isRecording, mediaRecorder]);

    return { isRecording, startRecording, stopRecording, audioBlob };
};

export default useAudioRecorder;