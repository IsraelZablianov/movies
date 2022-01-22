import { PropsWithChildren } from 'react';
import './Modal.scss';

interface ModalProps {
    open: boolean;
}

export const Modal = ({ children, open }: PropsWithChildren<ModalProps>) => {
    return (
        <div className='Modal' style={{ display: open ? 'block' : 'none' }}>
            { children }
        </div>
    );
};
