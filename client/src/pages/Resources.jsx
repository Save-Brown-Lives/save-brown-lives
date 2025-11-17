// pages/Resources.jsx
//import useState fron React
import { useEffect, useState } from "react";
//import components
import Card from "../components/Card.jsx";
import ResultCard from "../components/ResultCard.jsx";
export default function Resources() {
  const [allInfo, setAllInfo] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState(allInfo);
  //formData
  const [formData, setFormData] = useState({
    zipcode: "",
  });

  //Declare an asynchronous arrow function to get all saved countries from the server
  const getAllInfo = async (zipcode) => {
    try {
      //Declare  a variable that will hold response from the GET request to /get-all-saved-countries
      const response = await fetch(`/api/get-all-help/${zipcode}`);
      //Guard Clause
      if (!response.ok) {
        console.error(`Response status: ${response.status}`);
        // Exit early
        return;
      }
      //Convert the response to JSON format using json() method and save it in a variable named data
      const data = await response.json();
      //print data on console
      console.log(" data ", data);

      //set lawyer data using the setter function
      setAllInfo(data);
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
    getAllInfo(formData.zipcode);
    setFormData({ zipcode: "" });
  };

  useEffect(() => {
    setFilteredInfo(allInfo);
  }, [allInfo]);

  return (
    <main>
      <h2> Helpful Organizations</h2>
      <Card
        aLink="https://innocenceproject.org/about/"
        aText="Innocence Project"
        pText="Founded in 1992 by visionary attorneys Peter Neufeld and Barry Scheck,
          the Innocence Project has been at the forefront of criminal justice
          reform, using DNA and other scientific advancements to prove wrongful
          conviction."
      />
      <Card
        aLink="https://naacp.org/"
        aText="National Association for the Advancement of Colored People (NAACP)"
        pText="The National Association for the Advancement of Colored People (NAACP) is an American civil rights organization formed in 1909 as an interracial endeavor to advance justice for African Americans by a group including W. E. B. Du Bois, Mary White Ovington, Moorfield Storey, Ida B. Wells, Lillian Wald, Emil G. Hirsch and Henry Moskowitz. Over the years, leaders of the organization have included Thurgood Marshall and Roy Wilkins. The NAACP is the largest and oldest civil rights group in America."
      />

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
      {filteredInfo.map((info, index) => (
        <ResultCard info={info} key={"index_" + index} />
      ))}
    </main>
  );
}
