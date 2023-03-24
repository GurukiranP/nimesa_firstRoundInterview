import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersList, usersPosts } from "./homeSlice";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Home = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.home);
    const [status, setStatus] = useState(false)
    useEffect(() => {
        dispatch(usersList()).then(() => {
            setStatus(true);
        });
        dispatch(usersPosts());
    }, []);

    return (
        <div className="hero-container">
            <div className="curve"></div>
            <Container>
                {status && value.data && value.data.length > 0 && <div className="page-cont">
                    <div className="user-list-cont">
                        <div className="list-header">Select an account</div>
                        <div className="list-body">
                            {value.data.map((user, idx) => (
                                <Link
                                    className="list-item"
                                    key={idx}
                                    to={'/user/' + user.id + '/profile'}
                                >
                                    <div>{user.name}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>}
            </Container>
        </div>
    );
};

export default Home;
