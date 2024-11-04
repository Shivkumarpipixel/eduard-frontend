import React from "react";

const InputField = ({ placeholder, label, type, value, onChange, disabled, register,name }) => {
  return (
    <div className="mb-6">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
      disabled={disabled}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...register}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
      />
    </div>
  );
};

export default InputField;
