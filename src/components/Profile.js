import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from "react-router-dom";
import { usersList, usersPosts } from './Home/homeSlice';
import { useDispatch } from 'react-redux';
import UserData from './UserData';
import Sidebar from './Sidebar';
import Header from './Header';
import ComingSoon from './ComingSoon';

const Profile = (props) => {

    let { userId } = useParams();
    const dispatch = useDispatch();

    const [isVal, setVal] = useState();
    const [isVal2, setVal2] = useState();

    useEffect(() => {
        dispatch(usersList()).then((response) => {
            response.payload.filter(item => {
                if (parseInt(item.id) === parseInt(userId)) {
                    setVal(item)
                }
            })
        });
        dispatch(usersPosts()).then((response) => {
            response.payload.filter(item => {
                if (parseInt(item.id) === parseInt(userId)) {
                    setVal2(item)
                }
            })
        });
    }, [dispatch]);

    return (
        <div>
            {isVal && isVal2 && <div className="profile-cont">
                <Sidebar userData={isVal} />
                <div className="main-cont">
                    <Header userData={isVal} />
                    <Routes>
                        <Route path={`/user/${isVal.id}/profile`} element={<UserData userData={isVal} data={isVal2}/>} />
                        <Route path={`/user/${isVal.id}/posts`} element={<ComingSoon />} />
                        <Route path={`/user/${isVal.id}/gallery`} element={<ComingSoon />} />
                        <Route path={`/user/${isVal.id}/todo`} element={<ComingSoon />} />
                        <Route path={`/profile`} element={<UserData userData={isVal} />} />
                        <Route path={`/posts`} element={<ComingSoon />} />
                        <Route path={`/gallery`} element={<ComingSoon />} />
                        <Route path={`/todo`} element={<ComingSoon />} />
                    </Routes>
                </div>
            </div>}
        </div>
    )
}

export default Profile;

