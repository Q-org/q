import React from 'react';
import ErrorBoundary from '@docusaurus/ErrorBoundary';

export default function SafeComponent() {
    return (

        <ErrorBoundary
            fallback={({ error, tryAgain }) => (
                <div>
                    <p>出错了: {error.message}.</p>
                    <button onClick={tryAgain}>试试!</button>
                </div>
            )}>
            <SomeDangerousComponentThatMayThrow />
        </ErrorBoundary>
    );
}