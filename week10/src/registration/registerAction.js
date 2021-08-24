const registerAction = (user = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    technology: "",
    shortDescription: "",
    city: "",
    experience: "",
    dob: ""
}) => {
    return {
        type: "REGISTER",
        payload: user
    }
}

export default registerAction;
