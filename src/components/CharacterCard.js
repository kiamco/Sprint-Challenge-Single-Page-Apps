import React from "react";

export default function CharacterCard(props) {
  const {name, avatar, species, location, origin } = props;
    return (
        <div class="ui card">
            <div class="image">
                <img src={avatar}/>
            </div>
            <div class="content">
                <div class="header">name</div>
                <div class="meta">
                    <span class="date">Species: {species} Alive</span>
                </div>
          <div class="description"><p>Location: {location}</p> 
            <p>Origin: {origin}</p> 
          </div>
            </div>
            <div class="extra content">
                <a>
                    <i aria-hidden="true" class="user icon"></i>
                </a>
            </div>
        </div>
    )
}
