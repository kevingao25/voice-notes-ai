import React from 'react';
import { FiSettings, FiMessageSquare, FiLogOut } from 'react-icons/fi';

const Header: React.FC = () => {
    return (
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Voice Notes AI</h1>
            <div className="flex space-x-2">
                <button className="btn btn-ghost btn-sm">
                    <FiSettings className="w-5 h-5" />
                </button>
                <button className="btn btn-ghost btn-sm">
                    <FiMessageSquare className="w-5 h-5" />
                </button>
                <button className="btn btn-ghost btn-sm">
                    <FiLogOut className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default Header;