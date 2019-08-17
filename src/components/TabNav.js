import React from "react";
import {Tab, Menu, Icon, Divider} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
    return (
        <div class="ui menu">
            <a class="item"> 
                <NavLink exact className="home-page" to={'/'}>
                    <Icon name='home' size='large' color='black' />
                        Homepage
                </NavLink>
            </a>
            <a class="item">
                <NavLink exact className="characters" to={'/characters'}>
                    <Icon name='users' size='large' color='black' />
                    Characters
                </NavLink>
            </a>
            <a class="item">
                <NavLink exact className="location" to={'/locations'}>
                    <Icon name='map' size='large' color='black' />
                    Location
                </NavLink>
            </a>
            <a class="item">
                <NavLink exact className="episode" to={'/episodes'}>
                    <Icon name='video camera' size='large' color='black' />
                    Episode
                </NavLink>
            </a>
        </div>
    )
};
