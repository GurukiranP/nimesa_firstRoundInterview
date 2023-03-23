import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

    var menu = [
        { id: 0, name: 'Profile', route: 'profile' },
        { id: 1, name: 'Posts', route: 'posts' },
        { id: 2, name: 'Gallery', route: 'gallery' },
        { id: 3, name: 'ToDo', route: 'todo' }
    ]

    const pageR = window.location.href.split('/').pop();

    return (
        <div className="sidebar-cont">
            {menu.map(item => (
                <Link
                    to={'user/' + props.userData.id + '/' + item.route}
                    className={'sidebar-item ' + (pageR === item.route ? 'active' : '')}
                    key={item.id}
                >
                    <span className="item-title">{item.name}</span>
                    {pageR === item.route ? (
                        <span className="active-icon"> * </span>
                    ) : null}
                </Link>
            ))}
        </div>
    )
}

export default Sidebar;