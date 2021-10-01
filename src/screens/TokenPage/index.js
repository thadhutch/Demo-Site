import { createClient } from 'urql';
import { useEffect, useState } from 'react';


const APIURL = 'https://api.thegraph.com/subgraphs/name/gysr-io/gysr-polygon';

const query = `
    query
`

const Token = () => {

    const Moralis = require('moralis');
    Moralis.initialize("7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD");

    async function init(){
        await Moralis.initPlugins();
        await Moralis.enable();
        const tokens = await Moralis.Plugins.oneInch.getSupportedTokens({
            chain: 'polygon',
        });
        console.log(tokens);
    }

    init();
}