import { ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
    text: string;
    icon: ReactNode;
    onClick: () => void;
}

export const Button = ({text, icon, onClick}: ButtonProps) => {
    return (
        <button className='Button' onClick={onClick}>
            <div>
                { text }
            </div>

            { icon }
        </button>
    );
};
