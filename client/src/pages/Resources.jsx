// pages/Resources.jsx
//import useState fron React
import { useState } from "react";
export default function Resources() {
  const [formData, setFormData] = useState({
    zipcode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // to find out if it's checked or not; returns true or false
    const checked = e.target.checked;
    console.log(name, value, checked);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData, "formData");
    setFormData({ zipcode: "" });
  };
  return (
    <>
      <h2> Sister Organizations</h2>
      {/* //add a list f national organizations  devoted towards rights of poc*/}
      <form className="zip-form" onSubmit={handleSubmit}>
        <label for="zip">Zip Code</label>
        <input
          id="zipcode"
          type="text"
          name="zipcode"
          pattern="[0-9]*"
          value={formData.zipcode}
          onChange={handleChange}
          required
        />
        <button type="submit"> Submit</button>
      </form>
    </>
  );
}
