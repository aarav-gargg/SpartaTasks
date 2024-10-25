import React from 'react';

const SubmittedData = ({ formData }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-slate-500 rounded-2xl  hover:scale-105 duration-200 shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Submitted Data</h2>
      {formData ? (
        <div>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Permanent Address:</strong> {formData.permanentAddress}, {formData.permanentCity}, {formData.permanentZip}, {formData.permanentCountry}</p>
          {formData.currentAddress && (
            <p><strong>Current Address:</strong> {formData.currentAddress}, {formData.currentCity}, {formData.currentZip}, {formData.currentCountry}</p>
          )}
          <p><strong>Qualification:</strong> {formData.qualification}</p>
          {formData.qualification === '12th' && (
            <>
              <p><strong>School Name:</strong> {formData.schoolName}</p>
              <p><strong>Marks:</strong> {formData.marks}%</p>
            </>
          )}
          {(formData.qualification === 'Graduation' || formData.qualification === 'Post Graduation') && (
            <>
              <p><strong>College Name:</strong> {formData.collegeName}</p>
              <p><strong>Score/CGPA:</strong> {formData.score}</p>
              <p><strong>Course:</strong> {formData.course}</p>
            </>
          )}
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default SubmittedData;
