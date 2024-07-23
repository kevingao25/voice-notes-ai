import React from 'react';
import { AppProvider } from '../context/AppContext';
import Header from './Header';
import RecordingList from './RecordingList';
import AudioPlayer from './AudioPlayer';
import TranscriptionView from './TranscriptionView';
import AIChat from './AIChat';

const VoiceNotesAI: React.FC = () => {
    return (
        <AppProvider>
            <div className="container mx-auto p-4">
                <Header />
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2">
                        <RecordingList />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <AudioPlayer />
                        <TranscriptionView />
                        <AIChat />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default VoiceNotesAI;