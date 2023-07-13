import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFishFins } from "@fortawesome/free-solid-svg-icons"



const Form = () => {
    const[success, setSuccess] = useState(false)
    const[error, setError] = useState(false)
    const [validationError, setValidationError] = useState("");
    const [formData, setFormData] = useState({
    species: "",
    description: "",
    rarity: "",
    location: "",
    fun_fact: "",
  });


//   const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.description.length > 200 ||
      formData.location.length > 200 ||
      formData.fun_fact.length > 200
    ) {
      setValidationError(
        "You exceeded character limit, please shorten submission"
      );
      return;
    }

    // Send form data to the backend
    axios
      .post("http://127.0.0.1:8000/fish/", formData)
      .then((response) => {
        // Handle successful response
        console.log(
          response.status,
          "Form submitted successfully:",
          response.data
        );
        //reset state
        setSuccess(true)
        setError(false)
        setFormData({
          species: "",
          description: "",
          rarity: "",
          location: "",
          fun_fact: "",
        });
      })
      .catch((error) => {
        if (error.response) {
          setError(true)
          setSuccess(false)
          console.log(error.response)
          console.log("server responded")
        } else if (error.request) {
          console.log("network error")
        } else {
          console.log(error);
        }
      });
  };

  const closeModal = () => {
    setSuccess(false)
    setError(false)
  };

  return (
    <section className="bg-white shadow-lg rounded-lg lg:max-w-xl lg:p-8 pb-12 mb-8 mx-6">
        <h2 className="mt-12 pt-12 uppercase text-center font-bold text-2xl text-teal-700"> Add a Fish. . . . <FontAwesomeIcon icon={faFishFins} size="xl" style={{color: "#008b8b",}} /></h2>

        <form className="grid grid-cols-1 md:max-w-75% xl:max-w-xl gap-4 my-12 mx-auto pt-4" onSubmit={handleSubmit}>
        <label className="m-2 uppercase font-bold text-lg text-grey-darkest">Fish Species</label>
        <input
        className="outline-none w-full rounded-sm focus:ring-2 focus:ring-cyan-600 bg-gray-100 text-gray-700"
        onChange={handleChange}
        value={formData.species}
        type="text"
        name="species"
        placeholder=" Fish Species"
        required
        />
        <label className="m-2 uppercase font-bold text-lg text-grey-darkest"> Is this a rare fish? </label>
        <select className="p-1 outline-none rounded-md  focus:ring-2 focus:ring-cyan-600 bg-gray-100 text-gray-400"
        onChange={handleChange}
        value={formData.rarity}
        name="rarity"
        required
        >
        <option value=""> Select </option>
        <option value="Yes"> Yes </option>
        <option value="No"> No </option>
        </select>
        <label className="m-2 uppercase font-bold text-lg text-grey-darkest"> Description </label>
        <textarea
        className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-cyan-600 bg-gray-100 text-gray-700"
        onChange={handleChange}
        value={formData.description}
        type="text"
        name="description"
        placeholder="Describe the fish"
        required
        />
        <label className="m-2 uppercase font-bold text-lg text-grey-darkest"> Location </label>
        <textarea
        className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-cyan-600 bg-gray-100 text-gray-700"
        onChange={handleChange}
        value={formData.location}
        type="text"
        name="location"
        required
        placeholder="Location"
        />
        <label className="mt-2 uppercase font-bold text-lg text-grey-darkest"> Interesting Fact </label>
        <textarea
        className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-cyan-600 bg-gray-100 text-gray-700"
        onChange={handleChange}
        value={formData.fun_fact}
        type="text"
        name="fun_fact"
        placeholder="Fun fact about this fish"
        />
        {validationError && <p className="error">{validationError}</p>}
        <button type="submit" className="px-4 py-1 text-sm text-teal-700 font-semibold rounded-full border border-teal-600 hover:text-white hover:bg-teal-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"> Submit </button>
        </form>

        {success && (<Modal onClose={closeModal} content={<p>Your Fish was successfully added</p>} />
        )}
        {error && (<Modal onClose={closeModal} content={<p>There was an issue trying to submit your fish </p>} />
        )}


    </section>

  );
};

export default Form;
