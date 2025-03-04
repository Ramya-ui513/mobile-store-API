import React from "react";

const IntroPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg text-center animate-fadeIn">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          📱 Welcome to the <span className="text-blue-500">Mobile Store</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Easily manage your inventory with our user-friendly system:
        </p>
        <ul className="text-gray-700 space-y-2 text-lg">
          <li className="flex items-center justify-center gap-2">
            🛒 <span>View available products</span>
          </li>
          <li className="flex items-center justify-center gap-2">
            ➕ <span>Add new products</span>
          </li>
          <li className="flex items-center justify-center gap-2">
            ✏️ <span>Edit existing products</span>
          </li>
          <li className="flex items-center justify-center gap-2">
            🗑️ <span>Delete products</span>
          </li>
        </ul>
        <p className="text-gray-500 mt-6">
          Start organizing your inventory <span className="font-semibold text-purple-600">seamlessly</span> today! 🚀
        </p>
      </div>
    </div>
  );
};

export default IntroPage;
