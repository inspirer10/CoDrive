'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import Lenis from 'lenis';

type LenisContextType = Lenis | null;

const LenisContext = createContext<LenisContextType>(null);

export const useLenis = () => useContext(LenisContext);

type LenisProviderProps = {
    children: React.ReactNode;
};

function LenisProvider({ children }: LenisProviderProps) {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        const lenisInstance = new Lenis();
        setLenis(lenisInstance);

        let rafId = 0;

        const raf = (time: number) => {
            lenisInstance.raf(time);
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenisInstance.destroy();
        };
    }, []);

    return (
        <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
    );
}

export default LenisProvider;
