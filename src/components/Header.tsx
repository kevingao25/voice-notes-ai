'use client';

import React from 'react';
import { FiTrash2, FiMic } from 'react-icons/fi';
import { useAppContext } from '../context/AppContext';

const Header: React.FC = () => {
    const { setRecordings } = useAppContext();

    const handleDeleteAll = () => {
        setRecordings([]);
    };

    const handleStartRecording = () => {
        // Implement recording logic here
        console.log('Start recording');
    };

    return (
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Voice Notes AI</h1>
            <div className="space-x-2">
                <button className="btn btn-outline btn-sm" onClick={handleDeleteAll}>
                    <FiTrash2 className="mr-2" /> Delete All
                </button>
                <button className="btn btn-primary btn-sm" onClick={handleStartRecording}>
                    <FiMic className="mr-2" /> Start Recording
                </button>
            </div>
        </div>
    );
};

export default Header;