import React from "react";

const IntroPage = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Header */}
      <header className="py-6 shadow-md bg-blue-600 text-center">
        <h1 className="text-4xl font-bold">Mobile Store Inventory System</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center">
        <div className="bg-white text-gray-800 shadow-2xl rounded-2xl p-8 max-w-lg text-center animate-fadeIn">
          <h2 className="text-3xl font-bold mb-4">
            Welcome to the <span className="text-blue-500">Mobile Store</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Easily manage your inventory with our user-friendly system:
          </p>
          <ul className="text-gray-700 space-y-2 text-lg">
            <li className="flex items-center justify-center gap-2">View available products</li>
            <li className="flex items-center justify-center gap-2">Add new products</li>
            <li className="flex items-center justify-center gap-2">Edit existing products</li>
            <li className="flex items-center justify-center gap-2">Delete products</li>
            <li className="flex items-center justify-center gap-2">Admin Login & Secure Access</li>
            <li className="flex items-center justify-center gap-2">Search & Filter Products</li>
          </ul>
          <p className="text-gray-500 mt-6">
            Start organizing your inventory <span className="font-semibold text-purple-600">seamlessly</span> today! 
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-sm bg-blue-600">
        <p>&copy; {new Date().getFullYear()} Mobile Store Inventory. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default IntroPage;

