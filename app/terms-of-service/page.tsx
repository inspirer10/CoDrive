import React from 'react';

function TermsOfServicePage() {
    return (
        <main
            style={{
                width: 'min(900px, 90%)',
                margin: '0 auto',
                padding: '10rem 0 5rem',
            }}
        >
            <h1>Terms of Service</h1>
            <p style={{ marginTop: '1rem', lineHeight: 1.7 }}>
                CoDrive is a portfolio demo and is provided for presentation
                purposes only. Ride listings and subscriptions are simulated.
            </p>
            <p style={{ marginTop: '1rem', lineHeight: 1.7 }}>
                You are responsible for any content you submit while using this
                demo.
            </p>
        </main>
    );
}

export default TermsOfServicePage;
