// import React from 'react'

// function AddItem() {
//   return (
//     <div>
//       <form> 
//         <input className='btn1'  type="text" placeholder='Enter Item Name' /> <br />
//         <input className='btn1' type="text" placeholder='About the Item' /><br />
//         <input className='btn1'  type="number" placeholder='Price of the Item' />
//       </form>
//     </div>
//   )
// }

// export default AddItem


import React, { useState } from 'react';
import './style.css';


function AddItem() {
    const [itemDetails, setitemDetails] = useState({
        itemName: "",
        description: "",
        prize: 0,
    });
    const submitForm = async (event) => {
        event.preventDefault();  

        const { itemName, description, prize } = itemDetails;

        const reqBody = {
            itemName,
            description,
            prize,
        };

        try {
            const response = await fetch("http://localhost:3000/menu", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reqBody), 
            });

            if (response.ok) {
                const result = await response.json(); 
                alert("Item added successfully");
            } else {
                alert("Failed to add item: " + response.statusText);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        }
    };
    return (
        <div className="add-item-container">
            <form>
                <input className="btn1" type="text" onChange={(e) => setitemDetails({ ...itemDetails, itemName: e.target.value })} placeholder="Enter Item Name" /> <br />
                <input className="btn1" type="text" onChange={(e) => setitemDetails({ ...itemDetails, description: e.target.value })} placeholder="About the Item" /><br />
                <input className="btn1" type="number" onChange={(e) => setitemDetails({ ...itemDetails, price: Number(e.target.value) })} placeholder="Price of the Item" />
                <button type="submit" onClick={submitForm}>Submit</button>
            </form>
        </div>
    );
}

export default AddItem;