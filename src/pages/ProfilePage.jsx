import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import defaultProfileImage from './profilePic.png'; // Adjust path as needed

const ProfilePage = () => {
    const { user, updateUser } = useAuthStore();
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        profileImage: user.profileImage || defaultProfileImage,
        mobileNumber: user.mobileNumber || '',
        alternateMobile: user.alternateMobile || '',
        gender: user.gender || '',
        hostelName: user.hostelName || '',
        roomNumber: user.roomNumber || '',
        enrollmentNumber: user.enrollmentNumber || '',
        permanentAddress: user.permanentAddress || ''
    });
    const [isEditable, setIsEditable] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFormData((prevData) => ({ ...prevData, profileImage: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleEdit = () => {
        setIsEditable((prev) => !prev);
    };

    const validateForm = () => {
        const { name, mobileNumber, gender, hostelName, roomNumber, permanentAddress } = formData;
        if (!name || !mobileNumber || !gender || !hostelName || !roomNumber || !permanentAddress) {
            alert('Please fill in all the fields');
            return false;
        }

        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(mobileNumber)) {
            alert('Please enter a valid 10-digit mobile number');
            return false;
        }

        return true;
    };

    const handleSave = async () => {
        if (validateForm()) {
            await updateUser(formData);  // Update the profile in the store
            setIsEditable(false);
            alert('Profile updated successfully!');
        }
    };

    return (
        <div className="font-sans bg-gray-100 min-h-screen flex flex-col items-center py-10">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-emerald-500 mb-6">
                    Personal Information
                </h1>

                <div className="flex flex-col items-center mb-6">
                    <label htmlFor="profileImageUpload" className="cursor-pointer">
                        <img
                            src={formData.profileImage}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover border-4 border-green-500 shadow-md"
                        />
                    </label>
                    {isEditable && (
                        <input
                            type="file"
                            id="profileImageUpload"
                            className="hidden"
                            onChange={handleImageUpload}
                        />
                    )}
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            readOnly
                            className="mt-1 block w-full border border-gray-300 bg-gray-100 p-2 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            readOnly
                            className="mt-1 block w-full border border-gray-300 bg-gray-100 p-2 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Mobile Number</label>
                        <input
                            type="tel"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                            pattern="[0-9]{10}"
                            className={`mt-1 block w-full border p-2 rounded-md shadow-sm ${
                                isEditable ? 'bg-white' : 'bg-gray-100'
                            }`}
                            placeholder="Enter a valid mobile number"
                            disabled={!isEditable}
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Alternate Mobile</label>
                        <input
                            type="tel"
                            name="alternateMobile"
                            value={formData.alternateMobile}
                            onChange={handleInputChange}
                            pattern="[0-9]{10}"
                            className={`mt-1 block w-full border p-2 rounded-md shadow-sm ${
                                isEditable ? 'bg-white' : 'bg-gray-100'
                            }`}
                            disabled={!isEditable}
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className={`mt-1 block w-full border p-2 rounded-md shadow-sm ${
                                isEditable ? 'bg-white' : 'bg-gray-100'
                            }`}
                            disabled={!isEditable}
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Hostel Name</label>
                        <input
                            type="text"
                            name="hostelName"
                            value={formData.hostelName}
                            onChange={handleInputChange}
                            className={`mt-1 block w-full border p-2 rounded-md shadow-sm ${
                                isEditable ? 'bg-white' : 'bg-gray-100'
                            }`}
                            disabled={!isEditable}
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Room Number</label>
                        <input
                            type="text"
                            name="roomNumber"
                            value={formData.roomNumber}
                            onChange={handleInputChange}
                            className={`mt-1 block w-full border p-2 rounded-md shadow-sm ${
                                isEditable ? 'bg-white' : 'bg-gray-100'
                            }`}
                            disabled={!isEditable}
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Enrollment Number</label>
                        <input
                            type="text"
                            name="enrollmentNumber"
                            value={formData.enrollmentNumber}
                            onChange={handleInputChange}
                            className={`mt-1 block w-full border p-2 rounded-md shadow-sm ${
                                isEditable ? 'bg-white' : 'bg-gray-100'
                            }`}
                            disabled={!isEditable}
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-lg font-medium text-gray-700">Permanent Address</label>
                        <textarea
                            name="permanentAddress"
                            value={formData.permanentAddress}
                            onChange={handleInputChange}
                            className={`mt-1 block w-full border p-2 rounded-md shadow-sm ${
                                isEditable ? 'bg-white' : 'bg-gray-100'
                            }`}
                            rows="3"
                            disabled={!isEditable}
                        />
                    </div>
                </form>

                <div className="flex justify-center mt-6">
                    {isEditable ? (
                        <button
                            onClick={handleSave}
                            className="bg-green-500 text-white px-6 py-2 rounded shadow mr-4"
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            onClick={toggleEdit}
                            className="bg-blue-500 text-white px-6 py-2 rounded shadow"
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
