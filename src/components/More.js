// src/components/More.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';  // Für die Animation

const More = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [message, setMessage] = useState('');

  const handleOpenForm = () => {
    setShowContactForm(true);
  };

  const handleCloseForm = () => {
    setShowContactForm(false);
    setMessage('');
  };

  const handleSendEmail = () => {
    const mailtoLink = `mailto:zayneed@zayneed.cloud?subject=Contact%20Message&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    handleCloseForm();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1D2433] text-white">
      <h2 className="text-3xl font-semibold mb-6">Mehr</h2>
      <button
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 px-6 rounded-lg hover:shadow-lg transition duration-300"
        onClick={handleOpenForm}
      >
        Kontaktieren
      </button>

      {showContactForm && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[#282c34] rounded-lg p-8 w-96 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Schreiben Sie uns</h3>
            <textarea
              className="w-full h-32 p-4 bg-[#1D2433] text-white border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ihre Nachricht..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex justify-between mt-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                onClick={handleSendEmail}
              >
                Absenden
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
                onClick={handleCloseForm}
              >
                Schließen
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default More;
