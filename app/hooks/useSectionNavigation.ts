'use client';

import { useCallback } from 'react';
import { useLenis } from '../Components/LenisProvider/LenisProvider';

export function useSectionNavigation() {
    const lenis = useLenis();

    return useCallback(
        (section: string) => {
            if (lenis) {
                lenis.scrollTo(`#${section}`, {
                    duration: 1.2,
                });
                return;
            }

            document
                .getElementById(section)
                ?.scrollIntoView({ behavior: 'smooth' });
        },
        [lenis],
    );
}
