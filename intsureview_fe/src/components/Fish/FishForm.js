import React from "react";
import { useState } from "react";
import { createFish } from '../../utilities/fish-services'




function FishForm(props) {
    // const [isLoading, setIsLoading] = useState(true)
    const [newForm, setNewForm]= useState({
        species: "",
        description: "",
        rarity: "",
        location: "",

    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await createFish(newForm)
            // setIsLoading(true)
            setNewForm({
                species: "",
                description: "",
                rarity: "",
                location: "",
                // waterType: "",

            })
        } catch (err) {
            console.log(err)
        }
    }
    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value })
    }



    return (
        <form onSubmit={handleSubmit}>
        <label>Fish Species</label>
        <input
        onChange={handleChange}
        value={newForm.species}
        type='text'
        name='species'
        required
        placeholder="enter the species of fish"
        />
        <label>Description</label>
        <input
        onChange={handleChange}
        value={newForm.description}
        type='text'
        name='description'
        required
        placeholde="describe the fish"
        />
        <label>Is this fish rare?
        <select onChange={handleChange} value={newForm.value}>
            <option value="1" name='rarity'>Yes</option>
            <option value="2" name='rarity'>No</option>
        </select>
        </label>
        <label>Location or Origins</label>
        <input
        onChange={handleChange}
        value={newForm.location}
        type='text'
        name='location'
        required
        placeholder="where can you find this fish"
        />
        {/* <p>Saltwater or Freshwater?</p>
        <label><input type='radio' name='waterType' value={newForm.} /> Saltwater </label>
        <label><input type='radio' name='waterType' value='freshwater' /> Freshwater </label>
        <label><input type='radio' name='waterType' value='brackishwater' /> Brackish Water</label> */}
        <button type='submit'>Submit</button>
        </form>



    )


}

export default FishForm;
