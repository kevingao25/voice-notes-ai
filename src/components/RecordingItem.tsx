'use client';

import React from 'react';
import { useAppContext } from '../context/AppContext';

interface RecordingItemProps {
    id: string;
    duration: string;
    date: string;
}

const RecordingItem: React.FC<RecordingItemProps> = ({ id, duration, date }) => {
    const { setSelectedRecording } = useAppContext();

    const handleClick = () => {
        setSelectedRecording({ id, duration, date, audioBlob: null });
    };

    return (
        <div
            className="mb-2 p-2 bg-base-100 rounded hover:bg-base-300 cursor-pointer"
            onClick={handleClick}
        >
            <p className="font-semibold">Recording {id}</p>
            <p className="text-sm">{duration} • {date}</p>
        </div>
    );
};

export default RecordingItem;