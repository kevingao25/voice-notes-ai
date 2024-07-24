// src/components/ControlButtons.tsx

'use client';

import React from 'react';
import { FiTrash2, FiMic } from 'react-icons/fi';
import { useAppContext } from '../context/AppContext';
import useAudioRecorder from '../hooks/useAudioRecorder';

const ControlButtons: React.FC = () => {
    const { setRecordings } = useAppContext();
    const { isRecording, startRecording, stopRecording, audioBlob } = useAudioRecorder();

    const handleDeleteAll = () => {
        setRecordings([]);
    };

    const handleToggleRecording = async () => {
        if (isRecording) {
            stopRecording();
            if (audioBlob) {
                const newRecording = {
                    id: Date.now().toString(),
                    duration: '0.00', // TODO: Implement duration calculation
                    date: new Date().toDateString(),
                    audioBlob: audioBlob,
                };
                setRecordings((recordings) => [...recordings, newRecording]);
            }
        } else {
            await startRecording();
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4 flex justify-center items-center border h-24">
            <button
                className="btn btn-outline mr-4"
                onClick={handleDeleteAll}
            >
                <FiTrash2 className="mr-2" /> Delete All
            </button>
            <button
                className={`btn ${isRecording ? 'btn-error' : 'btn-neutral'}`}
                onClick={handleToggleRecording}
            >
                <FiMic className="mr-2" /> {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
        </div>
    );
};

export default ControlButtons;