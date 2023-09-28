import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import {useNavigate} from "react-router-dom";


const Create = () => {

    const [userFormData, setFormData] = useState({ name: "", username: "", email: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...userFormData,
            [name]: value
        })
        // console.log(userFormData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("test", userFormData);
        dispatch(createUser(userFormData));
        navigate("/read");

    }

    return (
        <div>
            <form className="w-50 mx-auto" onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="inputname">Name</label>
                    <input type="text" class="form-control" placeholder="Enter Name" name="name" value={userFormData.name} onChange={handleInput} />
                </div>
                <div class="form-group">
                    <label for="inputname">username</label>
                    <input type="text" class="form-control" placeholder="Enter Username" name="username" value={userFormData.username} onChange={handleInput} />
                </div>
                <div class="form-group">
                    <label for="inputname">email</label>
                    <input type="text" class="form-control" placeholder="Enter Email" name="email" value={userFormData.email} onChange={handleInput} />
                </div>
                <div class="mb-3">
                    <input type="radio" class="form-check-input" />
                    <label class="form-check-label" for="exampleCheck1">Male</label>
                    <br></br>
                    <input type="radio" class="form-check-input" />
                    <label class="form-check-label" for="exampleCheck1">Female</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Create