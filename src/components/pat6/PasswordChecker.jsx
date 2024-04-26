import React, { useState } from "react";

function PasswordChecker({ callback }) {
    const [data, setData] = useState({
        length: '',
        characterSets: {
            lower: false,
            upper: false,
            number: false,
            specialChar: false
        },
    })

    function handleChnage(event) {
        const { name, value } = event.target;
        setData((prevValue) => {
            return({
                ...prevValue,
                [name]: value
            })
        })
    }

    function handleChnageCheckBox(event) {
        const { name, checked } = event.target;
        setData((prevValue) => {
            return({
                ...prevValue,
                characterSets: {
                    ...prevValue.characterSets,
                    [name]: checked
                }
            })
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(data);
        let division = 0;
        let password = '';
        if (data.characterSets.lower) {
            division++;
        } 
        if (data.characterSets.upper) {
            division++;
        }
        if (data.characterSets.number) {
            division++;
        }
        if (data.characterSets.specialChar) {
            division++;
        }
        let divisionLength = parseInt(data.length / division);
        for (let j = 0; j < divisionLength; j++) {
            if (data.characterSets.lower) {
                password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            }
            if (data.characterSets.upper) {
                password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
            }
            if (data.characterSets.number) {
                password += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
            }
            if (data.characterSets.specialChar) {
                password += String.fromCharCode(Math.floor(Math.random() * 10) + 33);
            }
        }
        console.log(password);
        callback(password);
        // setData({
        //     length: '',
        //     characterSets: {
        //         lower: false,
        //         upper: false,
        //         number: false,
        //         specialChar: false
        //     },
        // });
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name='length' type='number' onChange={handleChnage} placeholder='Enter Length...' value={data.length}></input>
                <label htmlFor="lower">Lower Case Letters</label>
                <input name='lower' type='checkbox' onChange={handleChnageCheckBox} value={data.characterSets.lower}></input>
                <label htmlFor="upper">Upper Case Letters</label>
                <input name='upper' type='checkbox' onChange={handleChnageCheckBox} value={data.characterSets.upper}></input>
                <label htmlFor="number">Numbers</label>
                <input name='number' type='checkbox' onChange={handleChnageCheckBox} value={data.characterSets.number}></input>
                <label htmlFor="specialChar">Special Characters</label>
                <input name='specialChar' type='checkbox' onChange={handleChnageCheckBox} value={data.characterSets.specialChar}></input>
                <button>Generate New Random Password</button>
            </form>
        </div>
    )
}

export default PasswordChecker;