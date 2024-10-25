import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubmittedData from './SubmittedData';

const Task3 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    permanentAddress: '',
    permanentCity: '',
    permanentZip: '',
    permanentCountry: '',
    currentAddress: '',
    currentCity: '',
    currentZip: '',
    currentCountry: '',
    qualification: '12th',
    schoolName: '',
    marks: '',
    collegeName: '',
    score: '',
    course: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [copyAddress, setCopyAddress] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddressCopy = (e) => {
    setCopyAddress(e.target.checked);
    if (e.target.checked) {
      setFormData({
        ...formData,
        currentAddress: formData.permanentAddress,
        currentCity: formData.permanentCity,
        currentZip: formData.permanentZip,
        currentCountry: formData.permanentCountry,
      });
    } else {
      setFormData({
        ...formData,
        currentAddress: '',
        currentCity: '',
        currentZip: '',
        currentCountry: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    setSubmittedData(formData);
  };

  return (
    <>
      {!submittedData ? (
        <form className="max-w-lg mx-auto my-10 px-6" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-center mb-6">Candidate Registration Form</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full p-2 border rounded mb-4"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full p-2 border rounded mb-4"
                required
              />
              <div className="flex items-center mb-4">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full p-2 border rounded mr-2"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-blue-600"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <div className="flex items-center">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                  className="w-full p-2 border rounded mr-2"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-blue-600"
                >
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>


            <div>
              <h3 className="text-xl font-semibold mb-4">Address Information</h3>
              <input
                type="text"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleInputChange}
                placeholder="Permanent Address"
                className="w-full p-2 border rounded mb-4"
                required
              />
              <input
                type="text"
                name="permanentCity"
                value={formData.permanentCity}
                onChange={handleInputChange}
                placeholder="City"
                className="w-full p-2 border rounded mb-4"
                required
              />
              <input
                type="text"
                name="permanentZip"
                value={formData.permanentZip}
                onChange={handleInputChange}
                placeholder="Zip Code"
                className="w-full p-2 border rounded mb-4"
                required
              />
              <input
                type="text"
                name="permanentCountry"
                value={formData.permanentCountry}
                onChange={handleInputChange}
                placeholder="Country"
                className="w-full p-2 border rounded mb-4"
                required
              />
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  checked={copyAddress}
                  onChange={handleAddressCopy}
                  className="mr-2"
                />
                <label>Copy Permanent Address to Current Address</label>
              </div>
              <input
                type="text"
                name="currentAddress"
                value={formData.currentAddress}
                onChange={handleInputChange}
                placeholder="Current Address"
                className="w-full p-2 border rounded mb-4"
                required
                disabled={copyAddress}
              />
              <input
                type="text"
                name="currentCity"
                value={formData.currentCity}
                onChange={handleInputChange}
                placeholder="City"
                className="w-full p-2 border rounded mb-4"
                required
                disabled={copyAddress}
              />
              <input
                type="text"
                name="currentZip"
                value={formData.currentZip}
                onChange={handleInputChange}
                placeholder="Zip Code"
                className="w-full p-2 border rounded mb-4"
                required
                disabled={copyAddress}
              />
              <input
                type="text"
                name="currentCountry"
                value={formData.currentCountry}
                onChange={handleInputChange}
                placeholder="Country"
                className="w-full p-2 border rounded mb-4"
                required
                disabled={copyAddress}
              />
            </div>


            <div>
              <h3 className="text-xl font-semibold mb-4">Educational Qualifications</h3>
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-4"
              >
                <option value="12th">12th</option>
                <option value="Graduation">Graduation</option>
                <option value="Post Graduation">Post Graduation</option>
              </select>

              {formData.qualification === '12th' && (
                <>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleInputChange}
                    placeholder="School Name"
                    className="w-full p-2 border rounded mb-4"
                    required
                  />
                  <input
                    type="text"
                    name="marks"
                    value={formData.marks}
                    onChange={handleInputChange}
                    placeholder="Marks"
                    className="w-full p-2 border rounded mb-4"
                    required
                  />
                </>
              )}

              {formData.qualification === 'Graduation' && (
                <>
                  <input
                    type="text"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    placeholder="College Name"
                    className="w-full p-2 border rounded mb-4"
                    required
                  />
                  <input
                    type="text"
                    name="score"
                    value={formData.score}
                    onChange={handleInputChange}
                    placeholder="Score"
                    className="w-full p-2 border rounded mb-4"
                    required
                  />
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    placeholder="Course"
                    className="w-full p-2 border rounded mb-4"
                    required
                  />
                </>
              )}

              {formData.qualification === 'Post Graduation' && (
                <>
                  <input
                    type="text"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    placeholder="College Name"
                    className="w-full p-2 border rounded mb-4"
                    required
                  />
                  <input
                    type="text"
                    name="score"
                    value={formData.score}
                    onChange={handleInputChange}
                    placeholder="Score"
                    className="w-full p-2 border rounded mb-4"
                    required
                  />
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    placeholder="Course"
                    className="w-full p-2 border rounded mb-4"
                    required
                  />
                </>
              )}
            </div>

            <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
              Submit
            </button>
          </div>
        </form>
      ) : (
        <SubmittedData formData={submittedData} />
      )}

      <button
        onClick={() => navigate('/')}
        className="fixed bottom-5 right-5 bg-slate-950 text-white py-2 px-4 rounded-full shadow-lg hover:bg-slate-800 transition-colors duration-300"
      >
        Back to Home
      </button>
    </>
  );
};

export default Task3;
