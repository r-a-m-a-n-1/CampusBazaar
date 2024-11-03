import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';

const ProfilePage = () => {
    const { user, updateUser } = useAuthStore(); // Assuming you have user data in your authStore
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [profileImage, setProfileImage] = useState(user.profileImage);

    // Handle file upload for profile image
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfileImage(reader.result);  // Update profile image preview
            updateUser({ ...user, profileImage: reader.result }); // Save to store
        };
        reader.readAsDataURL(file);
    };

    const handleSave = () => {
        updateUser({ ...user, name, email, profileImage });  // Update user info in authStore
        setEditing(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-semibold text-center mb-6">Profile</h2>

            <div className="flex items-center space-x-4 mb-6">
                {/* Profile Image */}
                <div className="relative">
                    <img
                        src={profileImage || 'https://via.placeholder.com/150'}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleImageUpload}
                    />
                    <span className="absolute bottom-0 right-0 bg-green-500 text-white p-1 rounded-full">Edit</span>
                </div>

                <div className="flex-1">
                    {/* User Information */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        {editing ? (
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                            />
                        ) : (
                            <p className="text-gray-700">{name}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        {editing ? (
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                            />
                        ) : (
                            <p className="text-gray-700">{email}</p>
                        )}
                    </div>

                    {/* Edit & Save buttons */}
                    {editing ? (
                        <div className="space-x-4">
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                            <button
                                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
                                onClick={() => setEditing(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <button
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
                            onClick={() => setEditing(true)}
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
