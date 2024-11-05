import React, { useState } from 'react';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative flex w-full max-w-4xl h-[700px] bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="hidden md:block md:w-1/2 lg:w-2/3 bg-gradient-to-r from-purple-400 to-blue-400">
                    <img
                        src="/p1.jpg"
                        alt="Plant"
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="flex flex-col justify-center w-full md:w-1/2 lg:w-1/3 p-8">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                    >
                        &times;
                    </button>

                    <h1 className="text-4xl font-libre font-bold text-gray-800 mb-6">EcoQ</h1>
                    <p className="text-xl font-semibold font-sans text-gray-600 mb-4">{isSignIn ? 'Log In' : 'Sign Up'}</p>

                    <form className="space-y-6">
                        {!isSignIn && (
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Your name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Your email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Your password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            {isSignIn ? 'Log In' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="mt-4 text-sm text-gray-600">
                        {isSignIn ? (
                            <p>
                                Don’t have an account?{' '}
                                <span onClick={toggleForm} className="text-blue-500 cursor-pointer hover:underline">
                  Sign Up
                </span>
                            </p>
                        ) : (
                            <p>
                                Already have an account?{' '}
                                <span onClick={toggleForm} className="text-blue-500 cursor-pointer hover:underline">
                  Log In
                </span>
                            </p>
                        )}
                    </div>

                    {isSignIn && (
                        <div className="mt-2 text-blue-500 text-sm cursor-pointer hover:underline">
                            I forgot my password
                        </div>
                    )}


                    <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-400">
                        <a href="#" className="hover:underline">Terms of use</a> • <a href="#" className="hover:underline">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
