import React from "react";




function FishForm() {
    function handleSubmit(e){
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(FormData);

        const formJson = Object.fromEntries(formData.entries());

    }

    return (
        <form method="post" onSubmit={handleSubmit}>
        <label>Fish Species</label>
        <input type='text' name='species'></input>
        <label>Description</label>
        <input type='text' name='description'></input>
        <label>Is this fish rare?
        <select>
            <option value="true" name='rarity'>Yes</option>
            <option value="flase" name='rarity'>No</option>
        </select>
        </label>
        <label>Location or Origins</label>
        <input type='text' name='location'></input>
        <p>Saltwater or Freshwater?</p>
        <label><input type='radio' name='waterType' value='saltwater' /> Saltwater </label>
        <label><input type='radio' name='waterType' value='freshwater' /> Freshwater </label>
        <label><input type='radio' name='waterType' value='brackishwater' /> Brackish Water</label>
        <button type='submit'>Submit</button>
        </form>



    )


}

export default FishForm;
