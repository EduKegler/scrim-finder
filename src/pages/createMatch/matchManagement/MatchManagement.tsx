import React from 'react';
import Button from '../../../components/button/Button';
import './matchManagement.css';

interface INextButton {
    label?: string;
    onClick?: () => void;
}

interface ImatchManagement { 
    nextButton?: INextButton;
    title: string;
    children: React.ReactElement | React.ReactElement[] | string;
}

const matchManagement = React.memo((props: ImatchManagement) => {
    const { nextButton, title, children } = props;

    return (
        <div className='cf-match-management'>
            <div className='cf-match-management__title'>
                {title}
            </div>
            {children}
            <div className='cf-match-management__bottom'>
                <Button onClick={nextButton?.onClick}>{nextButton?.label ?? ''}</Button>
            </div>
        </div>
    );
});

export default matchManagement;