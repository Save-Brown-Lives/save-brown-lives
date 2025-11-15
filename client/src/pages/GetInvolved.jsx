//Import useState from react
import { useState } from "react";
// pages/GetInvolved.jsx
export default function GetInvolved() {
  const resources = ["medical", "mental health", "legal", "social work"];
  const [checkedState, setCheckedState] = useState(
    new Array(resources.length).fill(false)
  );
  let resourceArray = [];
  const emptyFormState = {
    name: "",
    purpose: "",
    address: "",
    zipcode: "",
    phone: "",
    city: "",
    state: "",
    email: "",
    website: "",
    resourceType: [],
    contactName: "",
    contactPhone: "",
  };
  //Declare a formData variable and assign it the value of the emptyFormState variable using useState. Also declare the setter/updater function setFormData
  const [formData, setFormData] = useState(emptyFormState);
  const handleChange = (e) => {
    //this function handles changes in the form input and updates the value of formData with each and every keystroke
    const { name, value } = e.target;
    //set form data using the setter function setFormData
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //Resource : https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
  const handleOnChange = (position) => {
    //tracking checked resources here
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };
  console.log(checkedState);
  //Declare an event handler arrow function handleSubmit when user submits form
  const handleSubmit = (event) => {
    //this function handles form submit when the user clicks the submit button
    //prevent default form behavior
    event.preventDefault();
    //print formData on console
    console.log("formData", formData);
    //set resourceType to checkedResources
    checkedState.forEach((item, index) => {
      if (item === true) {
        resourceArray.push(resources[index]);
      }
    });

    //Send POST request to store form data in API on the server in function addOneResource()
    addOneResource();
    //resets the form to its initial state so it is ready for the next user using the setter method
    setFormData(emptyFormState);
  };

  //Declare an arrow function addOneClient that is asynchronus and sends user data to be stored on the server
  const addOneResource = async () => {
    //convert resourceArray to JSON
    let resourceArrayJSON = JSON.stringify(resourceArray);
    //Send a POST request to the API with base url and endpoint /add-one-resource with headers and body
    const response = await fetch("/api/add-one-resource", {
      method: "POST",
      //The content type header tells the server that we are sending JSON data
      headers: {
        "content-type": "application/json ",
      },
      //The request body contains the data to be stored
      body: JSON.stringify({
        name: formData.name,
        purpose: formData.purpose,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        website: formData.website,
        phone: formData.phone,
        zipcode: formData.zipcode,
        resourceType: resourceArrayJSON,
        contactName: formData.contactName,
        email: formData.email,
        contactPhone: formData.contactPhone,
      }),
    });
    //Guard Clause
    if (!response.ok) {
      console.error(`Response status: ${response.status}`);
      // Exit early
      return;
    }
    //Convert the response to string format using text() method
    const responseInText = await response.text();
    console.log("response from post method: ", responseInText);
  };

  return (
    <>
      <h2> Get involved with SBL</h2>
      <p>
        You can support the mission of SBL by getting involved with our mission.
        Fill out the form below to get connected
      </p>

      <form className="get-involved">
        <h3> Find help now </h3>
        <p>
          <label htmlFor="fullName"> Your organization's name </label>
          <input
            name="name"
            id="fullName"
            value={formData.name}
            type="text"
            placeholder="Organization Name"
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="purpose"> Your organization's purpose </label>
          <input
            name="purpose"
            id="purpose"
            value={formData.purpose}
            type="text"
            placeholder="Organization's Purpose"
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="address"> Your organization's address </label>
        </p>
        <p>
          <input
            name="address"
            id="address"
            value={formData.address}
            type="text"
            placeholder="Organization's Address"
            onChange={handleChange}
          />
        </p>
        <p>
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
        </p>
        <p>
          {" "}
          <label htmlFor="city"> City your organization is in </label>
        </p>
        <p>
          <input
            name="city"
            id="city"
            value={formData.city}
            type="text"
            placeholder="City"
            onChange={handleChange}
          />{" "}
        </p>
        <p>
          {" "}
          <label htmlFor="state">State your organization is in </label>
        </p>
        <p>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option defaultValue="">-- Select a State --</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </p>
        <p>
          <label htmlFor="website">Your organization's website</label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            pattern="https://.*"
            size="30"
          />
        </p>
        <p>
          {" "}
          <label htmlFor="email"> Email address </label>
          <input
            name="email"
            id="email"
            value={formData.email}
            type="email"
            onChange={handleChange}
            required
          />{" "}
        </p>
        <p>
          {" "}
          <label htmlFor="tel"> Your organization's phone number </label>
          <input
            name="phone"
            id="tel"
            value={formData.phone}
            type="tel"
            onChange={handleChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
          />{" "}
        </p>
        <fieldset>
          <legend>Organization's Resources Offered :</legend>

          {resources.map((resource, index) => (
            <li key={index}>
              <div className="resources-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={resource}
                    value={resource}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{resource}</label>
                </div>
              </div>
            </li>
          ))}
        </fieldset>
        <p>
          {" "}
          <label htmlFor="contactPhone">
            {" "}
            Best phone number to contact you{" "}
          </label>
          <input
            name="contactPhone"
            id="contactPhone"
            value={formData.contactPhone}
            type="tel"
            onChange={handleChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
          />{" "}
        </p>
        <p>
          {" "}
          <label htmlFor="contactName"> Contact name </label>
          <input
            name="contactName"
            id="contactName"
            value={formData.contactName}
            type="text"
            onChange={handleChange}
            required
          />{" "}
        </p>
        <button type="submit" onClick={handleSubmit}>
          {" "}
          Get Involved{" "}
        </button>{" "}
      </form>
    </>
  );
}
