import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showUser } from '../features/userDetailSlice';


const Read = () => {
    const [userData, setUserData] = useState([]);
    const dispatch = useDispatch();
    const {users, loading} = useSelector((state)=> state.app);

    useEffect(() => {
        dispatch(showUser());
    }, []);

   if (loading) {
    return (<h2>loading herer</h2>)
   }

    return (
        <div>
            Read
            <div class="card-body">
                {users && users.map(user => {
                    <h2>{user.name}</h2>
                })}
                <h5 class="card-title">Card title</h5>
                <Link>
                    Card link
                </Link>
            </div>
        </div>

    )
}

export default Read;