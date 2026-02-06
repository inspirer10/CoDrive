'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

type LenisProviderProps = {
    children: React.ReactNode;
};

function LenisProvider({ children }: LenisProviderProps) {
    useEffect(() => {
        const lenis = new Lenis();
        let rafId = 0;

        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}

export default LenisProvider;
