// pages/Resources.jsx
//import useState fron React
import { useEffect, useState } from "react";
//import components
import Card from "../components/Card.jsx";
export default function Resources() {
  const [legalInfo, setLegalInfo] = useState([]);
  //formData
  const [formData, setFormData] = useState({
    zipcode: "",
  });

  //Declare an asynchronous arrow function to get all saved countries from the server
  const getLegalInfo = async (zipcode) => {
    try {
      //Declare  a variable that will hold response from the GET request to /get-all-saved-countries
      const response = await fetch(`/api/get-legal-help/${zipcode}`);
      //Guard Clause
      if (!response.ok) {
        console.error(`Response status: ${response.status}`);
        // Exit early
        return;
      }
      //Convert the response to JSON format using json() method and save it in a variable named data
      const data = await response.json();
      //print data on console
      console.log("lawyers data ", data);

      //set lawyer data using the setter function
      setLegalInfo(data);
    } catch (error) {
      //Print error on console
      console.log("Error retrieving legal resources:" + error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // to find out if it's checked or not; returns true or false
    const checked = e.target.checked;
    console.log(name, value, checked);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("zip :", formData.zipcode);
    getLegalInfo(formData.zipcode);
    setFormData({ zipcode: "" });
  };
  return (
    <>
      <h2> Sister Organizations</h2>
      {/* //add a list f national organizations  devoted towards rights of poc*/}

      <h2>Find resources in your area : </h2>
      <form className="zip-form" onSubmit={handleSubmit}>
        <label htmlFor="zipcode">Zip Code</label>
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
      <div className="results"></div>
    </>
  );
}
