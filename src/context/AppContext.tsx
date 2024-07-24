'use client';

import React, { createContext, useState, useContext } from 'react';

interface Recording {
	id: string;
	duration: string;
	date: string;
	audioBlob: Blob | null;
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
		{ id: '1721340562114', duration: '0:04', date: '2024-07-18 16:09:22', audioBlob: null },
		{ id: '1721340439541', duration: '0:06', date: '2024-07-18 16:07:19', audioBlob: null },
		{ id: '1721340339541', duration: '0:08', date: '2024-07-18 16:05:19', audioBlob: null },
		{ id: '1721340239221', duration: '0:10', date: '2024-07-18 16:03:19', audioBlob: null },
		{ id: '1721340139151', duration: '0:12', date: '2024-07-18 16:01:19', audioBlob: null },
		{ id: '1721340039540', duration: '0:14', date: '2024-07-18 15:59:19', audioBlob: null },
		{ id: '1721339939510', duration: '0:16', date: '2024-07-18 15:57:19', audioBlob: null },
		{ id: '1721339831951', duration: '0:18', date: '2024-07-18 15:55:19', audioBlob: null },
		{ id: '1721339739513', duration: '0:20', date: '2024-07-18 15:53:19', audioBlob: null },
		{ id: '1721339636141', duration: '0:22', date: '2024-07-18 15:51:19', audioBlob: null }
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