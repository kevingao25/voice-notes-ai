'use client';

import React from 'react';
import { FiPlay } from 'react-icons/fi';
import { useAppContext } from '../context/AppContext';

const AudioPlayer: React.FC = () => {
    const { selectedRecording, setTranscription } = useAppContext();

    const handlePlay = () => {
        // Implement audio playback logic here
        console.log('Playing audio');
    };

    const handleTranscribe = () => {
        // Implement transcription logic here
        setTranscription("This is a mock transcription for the selected recording.");
    };

    if (!selectedRecording) {
        return <div className="bg-base-200 p-4 rounded-lg">No recording selected</div>;
    }

    return (
        <div className="bg-base-200 p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Recording {selectedRecording.id}</h2>
            <div className="bg-base-100 h-16 rounded mb-2"></div>
            <div className="flex justify-between">
                <button className="btn btn-sm" onClick={handlePlay}>
                    <FiPlay className="mr-2" /> Play
                </button>
                <button className="btn btn-sm" onClick={handleTranscribe}>Transcribe</button>
            </div>
        </div>
    );
};

export default AudioPlayer;