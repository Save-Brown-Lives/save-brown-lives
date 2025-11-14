//Import useState from react
import { useState } from "react";
// pages/GetHelp.jsx
export default function GetHelp() {
  //Declare an emptyFormState variable of type object to reset the form data
  const emptyFormState = {
    name: "",
    city: "",
    state: "",
    email: "",
    message: "",
  };
  //Declare a formData variable and assign it the value of the emptyFormState variable using useState. Also declare the setter/updater function setFormData
  const [formData, setFormData] = useState(emptyFormState);
  //Declare an event handler arrow function handleChange to handle changes in form input
  const handleChange = (e) => {
    //this function handles changes in the form input and updates the value of formData with each and every keystroke
    const { name, value } = e.target;
    //set form data using the setter function setFormData
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  //Declare an event handler arrow function handleSubmit when user submits form
  const handleSubmit = (event) => {
    //this function handles form submit when the user clicks the submit button
    //prevent default form behavior
    event.preventDefault();
    //print formData on console
    console.log("formData", formData);
    //Send POST request to store form data in API on the server in function addOneClient()
    addOneClient();
    //resets the form to its initial state so it is ready for the next user using the setter method
    setFormData(emptyFormState);
  };

  //Declare an arrow function addOneClient that is asynchronus and sends user data to be stored on the server
  const addOneClient = async () => {
    //Send a POST request to the API with base url and endpoint /add-one-user with headers and body
    const response = await fetch("/api/add-one-client", {
      method: "POST",
      //The content type header tells the server that we are sending JSON data
      headers: {
        "content-type": "application/json ",
      },
      //The request body contains the data to be stored
      body: JSON.stringify({
        name: formData.name,
        city: formData.city,
        state: formData.state,
        email: formData.email,
        message: formData.message,
      }),
    });
    //Guard Clause
    if (!response.ok) {
      console.error(`Response status: ${response.status}`);
      // Exit early
      return;
    }
    //Convert the response to JSON format using json method
    const responseInJSONFormat = await response.json();
    console.log("response from post method: ", responseInJSONFormat);
  };
  return (
    <>
      <h2> Get help now</h2>
      <p>
        If you or someone you know have been wrongfully arrested, you can find
        resources in your city on the resources page. If there are no resources
        in your city, please fill out the form below to get support.
      </p>
      <form className="get-help-form">
        <h3> Find help now </h3>
        <p>
          <label htmlFor="fullName"> Your name </label>
        </p>
        <p>
          <input
            name="name"
            id="fullName"
            value={formData.name}
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
          />
        </p>
        <p>
          {" "}
          <label htmlFor="city"> City you are in </label>
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
          <label htmlFor="state">State you are in </label>
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
          {" "}
          <label htmlFor="email"> Email address </label>
        </p>
        <p>
          <input
            name="email"
            id="email"
            value={formData.email}
            type="email"
            onChange={handleChange}
          />{" "}
        </p>
        <label htmlFor="message">
          {" "}
          Describe in detail about your situation{" "}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          rows="4"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
}
