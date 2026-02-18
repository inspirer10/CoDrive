import React from 'react';

function CookieSettingsPage() {
    return (
        <main
            style={{
                width: 'min(900px, 90%)',
                margin: '0 auto',
                padding: '10rem 0 5rem',
            }}
        >
            <h1>Cookie Settings</h1>
            <p style={{ marginTop: '1rem', lineHeight: 1.7 }}>
                This demo does not use a remote analytics or advertising cookie
                platform. Local browser storage may be used to keep demo state
                between page reloads.
            </p>
            <p style={{ marginTop: '1rem', lineHeight: 1.7 }}>
                Clear browser storage to reset locally saved demo data.
            </p>
        </main>
    );
}

export default CookieSettingsPage;
