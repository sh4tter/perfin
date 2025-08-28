import React from 'react';
import '../../test.css';

const StyleTest: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="test-basic-css mb-4">
        <h2>Basic CSS Test</h2>
        <p>This should have a red background if basic CSS works</p>
      </div>
      
      <div className="test-tailwind-utilities mb-4">
        <h2>Tailwind @apply Test</h2>
        <p>This should have a blue background if Tailwind utilities work</p>
      </div>
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Tailwind CSS Test</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Basic Styling Test</h2>
        <p className="text-gray-600">If you can see proper colors, shadows, and spacing, Tailwind is working!</p>
      </div>

      <div className="bg-gradient-to-r from-primary-500 to-primary-700 text-white p-6 rounded-lg mb-4">
        <h3 className="text-xl font-semibold">Custom Primary Colors</h3>
        <p>This should show a blue gradient background</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-500 p-4 rounded text-white text-center">Green Card</div>
        <div className="bg-red-500 p-4 rounded text-white text-center">Red Card</div>
        <div className="bg-purple-500 p-4 rounded text-white text-center">Purple Card</div>
      </div>

      <button className="mt-4 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
        Test Button
      </button>
    </div>
  );
};

export default StyleTest;
