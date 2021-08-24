
import React from 'react'
const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    technology: "",
    shortDescription: "",
    city: "",
    experience: "",
    dob: "",
    userProfile: {firstName:"", lastName: ""},
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {

        case "REGISTER":
            const { firstName, lastName, email, gender, technology, shortDescription, city, experience, dob } = action.payload;
            var user = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                gender: gender,
                technology: technology,
                shortDescription: shortDescription,
                city: city,
                experience: experience,
                dob: dob
            }
            return {
                ...state,
                userProfile: user
            }

        case "RESET":
            return {
                ...state,
                firstName: "",
                lastName: "",
                email: "",
                gender: "",
                technology: "",
                shortDescription: "",
                city: "",
                experience: "",
                dob: "",
                userProfile: user
            }

        default: return state
    }
}

export default registerReducer