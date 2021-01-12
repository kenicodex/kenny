import React, { useEffect, useState } from 'react';

function HomeEcom(props) {
    const [data, setData] = useState("f")
    useEffect(() => {
        const payload = {
            "csv": {
                "url": "C:/Users/PC/Desktop/code/Intership/csv.csv",
                "select_fields": ["First Name", "Last Name", "Age"],
            }
        }
        fetch('https://just-kenne.glitch.me/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then( value =>{
                setData(value.response);
            })
            .catch((error) => {
                console.log(error)
            });
    })
    return (
        <div className="w-100 body">
            <nav className="h-50px pt-2 k-box k-posr">
                <div className="k-posa h4" style={{ left: "1%" }}> E commerce Site {data} </div>
                <div className="k-posa" style={{ right: "1%" }}>

                </div>
            </nav>
            <main className=" container">
                Welcome to the E commerce Site Prototype at kenny code Portfolio
            </main>
        </div>
    );
}

export default HomeEcom;