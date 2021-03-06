import React, { useState } from "react";

export default function Search() {
    const Moralis = require('moralis');
    Moralis.initialize("7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD");
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    async function getData() {
        if (query) {
            try {
                const data = await Moralis.Cloud.run("searchQueryUser", { value: query });
                setResults(data);
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div style={{ margin: "20px" }} >
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}></input>
            <div style={{ background: "white", width: "80px", height: "40px", color: "black", cursor: "pointer" }} onClick={() => getData()}>search</div>
            {results.map(user => {
                return (
                    <div style={{ color: "white" }}>{user.attributes.username}</div>
                )
            })}
        </div>
    );
}