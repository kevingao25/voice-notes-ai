'use client';

import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import RecordingItem from './RecordingItem';

const RecordingList: React.FC = () => {
    const { recordings } = useAppContext();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredRecordings = recordings.filter(recording =>
        recording.id.includes(searchTerm) || recording.date.includes(searchTerm)
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search recordings..."
                className="input input-bordered w-full mb-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="bg-base-200 p-4 rounded-lg">
                {filteredRecordings.map((recording) => (
                    <RecordingItem key={recording.id} {...recording} />
                ))}
            </div>
        </div>
    );
};

export default RecordingList;