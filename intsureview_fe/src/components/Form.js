import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFishFins } from "@fortawesome/free-solid-svg-icons"
import axios from "axios";
// import SuccessModal from "./SuccessModal";

const Form = () => {
  const [formData, setFormData] = useState({
    species: "",
    description: "",
    rarity: "",
    location: "",
    fun_fact: "",
  });

  const [validationError, setValidationError] = useState("");
//   const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.species.trim() === "") {
      setValidationError("Please enter a real value");
      return;
    }
    if (formData.fun_fact.length > 200) {
      setValidationError("Please make your fact smaller");
      return;
    }

    // Send form data to the backend
    axios
      .post("http://127.0.0.1:8000/fish/", formData)
      .then((response) => {
        // Handle successful response
        console.log("Form submitted successfully:", response.data);
        alert('Success your fish was added')
        // setSuccess(true);
        setFormData({
          species: "",
          description: "",
          rarity: "",
          location: "",
          fun_fact: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("your fish was not processed try again");
      });
  };

//   const closeModal = () => {
//     setSuccess(false);
//   };

  return (
    <section className="bg-white shadow-lg rounded-lg lg:max-w-2xl lg:p-8 pb-12 mb-8 mx-auto">
        <h2 className="mt-4 uppercase text-center font-bold text-2xl text-teal-700"> Add a Fish. . . . <FontAwesomeIcon icon={faFishFins} size="xl" style={{color: "#008b8b",}} /></h2>

        <form className="grid grid-cols-1 md:max-w-75% xl:max-w-xl gap-4 my-12 mx-auto pt-4" onSubmit={handleSubmit}>
        <label className="mt-2 uppercase font-bold text-lg text-grey-darkest">Fish Species</label>
        <input
        className="outline-none w-full rounded-sm focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        onChange={handleChange}
        value={formData.species}
        type="text"
        name="species"
        placeholder=" Fish Species"
        required
        />
        <label className="mt-2 uppercase font-bold text-lg text-grey-darkest"> Is this a rare fish? </label>
        <select className=""
        onChange={handleChange}
        value={formData.rarity}
        name="rarity"
        required
        >
        <option value=""> Select </option>
        <option value="Yes"> Yes </option>
        <option value="No"> No </option>
        </select>
        <label className="mt-2 uppercase font-bold text-lg text-grey-darkest"> Description </label>
        <textarea
        className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        onChange={handleChange}
        value={formData.description}
        type="text"
        name="description"
        placeholder="Describe the fish"
        required
        />
        <label className="mt-2 uppercase font-bold text-lg text-grey-darkest"> Location </label>
        <textarea
        className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        onChange={handleChange}
        value={formData.location}
        type="text"
        name="location"
        required
        placeholder="Location"
        />
        <label className="mt-2 uppercase font-bold text-lg text-grey-darkest"> Interesting Fact </label>
        <textarea
        className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        onChange={handleChange}
        value={formData.fun_fact}
        type="text"
        name="fun_fact"
        placeholder="Fun fact about this fish"
        />
        {validationError && <p className="error">{validationError}</p>}
        {/* {success && <SuccessModal onClose={closeModal} />} */}

        <button type="submit" className="px-4 py-1 text-sm text-teal-700 font-semibold rounded-full border border-teal-600 hover:text-white hover:bg-teal-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"> Submit </button>


        </form>


    </section>

  );
};

export default Form;
