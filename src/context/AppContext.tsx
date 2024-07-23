'use client';

import React, { createContext, useState, useContext } from 'react';

interface Recording {
	id: string;
	duration: string;
	date: string;
}

interface AppContextType {
	recordings: Recording[];
	selectedRecording: Recording | null;
	transcription: string;
	setRecordings: React.Dispatch<React.SetStateAction<Recording[]>>;
	setSelectedRecording: React.Dispatch<React.SetStateAction<Recording | null>>;
	setTranscription: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [recordings, setRecordings] = useState<Recording[]>([
		{ id: '1721340562114', duration: '0:04', date: '2024-07-18 16:09:22' },
		{ id: '1721340439541', duration: '0:06', date: '2024-07-18 16:07:19' },
		// ... add more initial recordings
	]);
	const [selectedRecording, setSelectedRecording] = useState<Recording | null>(null);
	const [transcription, setTranscription] = useState<string>('');

	return (
		<AppContext.Provider value={{
			recordings,
			selectedRecording,
			transcription,
			setRecordings,
			setSelectedRecording,
			setTranscription
		}}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (context === undefined) {
		throw new Error('useAppContext must be used within an AppProvider');
	}
	return context;
};