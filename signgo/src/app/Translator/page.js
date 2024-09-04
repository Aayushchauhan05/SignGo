"use client"
import { useState } from 'react';
import Head from 'next/head';

export default function Translator() {
  const [transcription, setTranscription] = useState('');
  const [translation, setTranslation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fileInput = event.target.elements.fileInput;
    const file = fileInput.files[0];

    if (!file) {
      alert('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('audio', file);

    setLoading(true);

    try {
      const response = await fetch('http://localhost:8081/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Network response was not ok');
      }

      const data = await response.json();
      setTranscription(data.transcription);
      setTranslation(data.translation);
    } catch (error) {
      console.error('Error:', error);
      alert('Error processing file: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>Speech-to-Text and Translation</title>
        <meta name="description" content="Speech-to-Text and Translation App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-center text-2xl font-bold mb-4">Speech-to-Text and Translation</h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="file"
              id="fileInput"
              name="fileInput"
              accept="audio/*"
              className="mb-4 p-2 border rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Upload and Process
            </button>
          </form>
          {loading && <div className="loader" />}
          <div id="results" className="mt-6">
            <h2 className="text-xl font-semibold">Transcription:</h2>
            <p className="text-gray-700">{transcription}</p>
            <h2 className="text-xl font-semibold mt-4">Translation:</h2>
            <p className="text-gray-700">{translation}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
