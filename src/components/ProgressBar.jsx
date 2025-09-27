import { useEffect, useState } from 'react';

export default function ProgressBar({ timer }) {
    const [remainingValue, setRemainingValue] = useState(timer);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingValue((prevRemainingValue) => prevRemainingValue - 10);
        }, 10);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return <progress max={timer} value={remainingValue} className="progressBar" />;
}
