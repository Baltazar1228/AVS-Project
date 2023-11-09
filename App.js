import React, { useState } from 'react';

const AddressForm = () => {
  const [address, setAddress] = useState({
    AddressLine1: '',
    City: '',
    State: '',
    ZipCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleVerifyAddress = () => {
    // The logic for verifying an address goes here
    console.log('Verifying Address:', address);
  };

  const handleAddAddress = () => {
     // The logic for adding an address goes here
    console.log('Adding Address:', address);
  };

  const handleUpdateAddress = () => {
     // The logic for updating an address goes here
    console.log('Updating Address:', address);
  };

  const handleDeleteAddress = () => {
     // The logic for deleting an address goes here
    console.log('Deleting Address:', address);
  };

  return (
    <div>
      <div>
        <label>Address Line 1:</label>
        <input
          type="text"
          name="AddressLine1"
          value={address.AddressLine1}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="City" value={address.City} onChange={handleChange} />
      </div>
      <div>
        <label>State:</label>
        <input type="text" name="State" value={address.State} onChange={handleChange} />
      </div>
      <div>
        <label>ZipCode:</label>
        <input type="text" name="ZipCode" value={address.ZipCode} onChange={handleChange} />
      </div>

      <button onClick={handleVerifyAddress}>Verify Address</button>
      <button onClick={handleAddAddress}>Add Address</button>
      <button onClick={handleUpdateAddress}>Update Address</button>
      <button onClick={handleDeleteAddress}>Delete Address</button>
    </div>
  );
};

export default AddressForm;
