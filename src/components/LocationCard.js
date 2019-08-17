import React from "react";

export default function LocationCard({name, type, dimension, residents}) {
    return (
            <div class="ui card">
                <div class="content">
                    <div class="header">{name}</div>
                    <div class="meta">
                        <p>{type}
                            - {dimension}</p>
                    </div>
                    <div class="description">
                      {residents.length} residents
                    </div>
                </div>
            </div>
    )
}