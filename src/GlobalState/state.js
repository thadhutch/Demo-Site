import React from 'react';
import { UserProvider } from './user';

function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight(
        (kids, parent) =>
            React.cloneElement(parent, {
                children: kids,
            }),
        children
    );
}

function ContextProvider({ children }) {
    return (
        <ProviderComposer
            contexts={[ <UserProvider />]}
        >
            {children}
        </ProviderComposer>
    )
}

export { ContextProvider };