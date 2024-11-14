import React, { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';

const ViewProfilePage = () => {
    const { user, getProfile } = useAuthStore();

    // Fetch user profile data on component mount
    useEffect(() => {
        getProfile();
    }, [getProfile]);

    const defaultProfileImage = "/path/to/default/image.jpg"; // Fallback image

    return (
        <div className="font-sans bg-gray-100 min-h-screen flex flex-col items-center py-10">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-emerald-500 mb-6">
                    View Profile
                </h1>

                <div className="flex flex-col items-center mb-6">
                    <img
                        src={user.profileImage || defaultProfileImage}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-green-500 shadow-md"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Name</label>
                        <p className="text-lg text-gray-700">{user.name}</p>
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Email</label>
                        <p className="text-lg text-gray-700">{user.email}</p>
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Mobile Number</label>
                        <p className="text-lg text-gray-700">{user.mobileNumber}</p>
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Alternate Mobile</label>
                        <p className="text-lg text-gray-700">{user.alternateMobile}</p>
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Gender</label>
                        <p className="text-lg text-gray-700">{user.gender}</p>
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Hostel Name</label>
                        <p className="text-lg text-gray-700">{user.hostelName}</p>
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Room Number</label>
                        <p className="text-lg text-gray-700">{user.roomNumber}</p>
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Enrollment Number</label>
                        <p className="text-lg text-gray-700">{user.enrollmentNumber}</p>
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-lg font-medium text-gray-700">Permanent Address</label>
                        <p className="text-lg text-gray-700">{user.permanentAddress}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProfilePage;
