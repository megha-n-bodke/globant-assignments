import React, { useContext } from 'react'
import '../css/form.css'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import registerAction from './registerAction';
import { ReactReduxContext } from 'react-redux'


const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const dispatch = useDispatch();
    const onSubmit = data => {
        dispatch(registerAction(data));
        history.push('/welcome')
    }
    const { store } = useContext(ReactReduxContext)
    return (
        <>

            <form className="form-container" onSubmit={handleSubmit(onSubmit)} >
                <div className="form">
                    <div className="name-container margin ">
                        <input type="text" placeholder="Firstname *" className="font font-size borders rightMargin" name="firstName"  {...register("firstName", { required: true })}></input>
                        <input type="text" placeholder="Lastname *" className="font font-size borders" name="lastName" {...register("lastName", { required: true })} />
                        <p className="errors">{errors.firstName?.type === 'required' && "First name is required"}</p>
                        <p className="errors">{errors.firstName?.type === 'required' && " Last name is required"}</p>
                    </div>

                    <div className="space">
                        <input type="text" placeholder="Email *" className="font font-size borders emailContainer marginRight" name="email" {...register("email", { required: true, pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/ })} />
                        <p className="errors">{errors.email?.type === 'required' && "email is required"}</p>
                        <p className="errors">{errors.email?.type === "pattern" && "Invalid email"}</p>
                    </div>

                    <label className="font font-size">Gender</label>
                    <div className="font">
                        <input
                            type="radio"
                            id="male"
                            value="male"
                            name="gender"
                            className="rightMarginChk"
                            {...register("gender", { required: true })}
                        />
                        <label className="font-size rightMarginChk">Male</label>
                        <input

                            type="radio"
                            id="female"
                            value="female"
                            name="gender"
                            className="rightMarginChk"
                            {...register("gender", { required: true })}
                        />
                        <label className="font-size ">Female</label>
                        <p className="errors">{errors.gender?.type === 'required' && "gender  required"}</p>
                    </div>

                    <label className="font font-size">Technology</label>
                    <div className="font-size">
                        <input type="checkbox" id="react" name="technology" value = "ReactJs" className ="rightMarginChk" {...register("technology", { required: true })} />
                        <label className ="rightMarginChk">ReactJs</label>

                        <input type="checkbox" id="Node" name="technology" value = "Node" className ="rightMarginChk"{...register("technology", { required: true })} />
                        <label className ="rightMarginChk">Node</label>

                        <input type="checkbox" id="Angular" name="technology" value = "Angular" className ="rightMarginChk"{...register("technology", { required: true })} />
                        <label className ="rightMarginChk">Angular</label>

                        <input type="checkbox" id="java" name="technology" value = "Java" className ="rightMarginChk"{...register("technology", { required: true })} />
                        <label className="font-size rightMarginChk">Java</label>
                        <p className="errors">{errors.technology?.type === 'required' && "please select technology"}</p>
                    </div>

                    <div>
                        <input type="text" placeholder="Short Description" className="font-size" name="description" {...register("description", { required: true })} />
                        <p className="errors">{errors.description?.type === 'required' && "please give short description"}</p>

                        <select id="city" className="font-size" {...register("City", { required: true })}>
                            <option value="" > Select a city</option>
                            <option >Pune</option>
                            <option >Mumbai</option>
                            <option >Banglore</option>
                            <option >Chennai</option>
                            <option >Hydrabad</option>
                            <option >Kolkatta</option>
                            <option >Dehli</option>
                            <option >Kochi</option>
                        </select>
                        <p className="errors">{errors.City?.type === 'required' && "please select your city"}</p>

                    </div>
                    <div>
                        <input type="text" placeholder="Experience" className="font-size rightMargin" name="experience" {...register("experience", { required: true })} />
                        <input type="date" placeholder="Date Of Birth" className="font-size rightMargin" name="dob"{...register('dob', { required: true })} />
                        <p className="errors">{errors.experience?.type === 'required' && "please mention your experience"}</p>
                        <p className="errors">{errors.dob?.type === 'required' && "please selcect date"}</p>

                    </div>

                    <div>
                        <button type="reset" className="font-size formButton rightMargin resetBtn">Reset</button>
                        <button type="submit" className="font-size formButton submitBtn">Submit</button>
                    </div>

                </div>
            </form>
        </>
    )
}

export default Form