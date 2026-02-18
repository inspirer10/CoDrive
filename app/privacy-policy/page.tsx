import React from 'react';

function PrivacyPolicyPage() {
    return (
        <main
            style={{
                width: 'min(900px, 90%)',
                margin: '0 auto',
                padding: '10rem 0 5rem',
            }}
        >
            <h1>Privacy Policy</h1>
            <p style={{ marginTop: '1rem', lineHeight: 1.7 }}>
                This portfolio project does not collect personal data on a
                backend server. Any newsletter subscription data is saved only
                in your browser localStorage for demo purposes.
            </p>
            <p style={{ marginTop: '1rem', lineHeight: 1.7 }}>
                Do not submit sensitive personal information in this demo.
            </p>
        </main>
    );
}

export default PrivacyPolicyPage;
