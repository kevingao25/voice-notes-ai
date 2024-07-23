'use client';

import React from 'react';
import { useAppContext } from '../context/AppContext';

const TranscriptionView: React.FC = () => {
    const { transcription } = useAppContext();

    if (!transcription) {
        return null;
    }

    return (
        <div className="bg-base-200 p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Transcription</h2>
            <p>{transcription}</p>
        </div>
    );
};

export default TranscriptionView;