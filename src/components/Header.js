import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Popover, Overlay } from "react-bootstrap";

const Header = (props) => {

    const navigate = useNavigate();
    let userData = props.userData;
    let headerName = window.location.href.split('/').pop();
    const [isPopup, setPopup] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleImg = (e) => {
        setPopup(!isPopup);
        setTarget(e.target);
    }

    const handleSignout = () => {
        navigate("/");
    }

    return (
        <div className="page-header-cont">
            <div className="headerName">{headerName}</div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="item-img " ref={ref}>
                    <Overlay
                        show={isPopup}
                        target={target}
                        placement="bottom"
                        container={ref}
                        containerPadding={20
                        }>
                        <Popover id="popover-contained">
                            <div className="popoverBody">
                                <p className="my-1">{userData.name}</p>
                                <p className="text-secondary my-1">{userData.email}</p>
                            </div>
                            <Button variant="danger" onClick={() => handleSignout()}>Sign out</Button>
                        </Popover>
                    </Overlay>
                </div>
                <span onClick={handleImg}>👤<span className="headerName">{userData.name}</span></span>
            </div>
        </div >
    )
}

export default Header;