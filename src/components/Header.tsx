'use client'

import React from 'react';
import { FiSettings, FiMessageSquare, FiLogOut, FiLogIn } from 'react-icons/fi';
import { useSession, signIn, signOut } from "next-auth/react"

const Header: React.FC = () => {
    const { data: session } = useSession()

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
                {session ? (
                    <button className="btn btn-ghost btn-sm" onClick={() => signOut()}>
                        <FiLogOut className="w-5 h-5" />
                    </button>
                ) : (
                    <button className="btn btn-primary btn-sm" onClick={() => signIn("google")}>
                        Sign In
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;