import React from 'react';

const FreestylePlayer = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg w-80 text-center">
                <h2 className="text-2xl font-bold text-pink-500 mb-4">Xava Freestyle</h2>
                <audio 
                    controls 
                    controlsList="nodownload" 
                    className="w-full mt-2 rounded"
                >
                    <source src="/freestyle/xava freestyle.mp3" type="audio/mpeg" />
                    Dein Browser unterstützt den Audio-Player nicht.
                </audio>
            </div>
        </div>
    );
};

export default FreestylePlayer;
