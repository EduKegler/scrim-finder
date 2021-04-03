import React from 'react';
import cblol from "../../../assets/images/cblol.png";
import gnar from "../../../assets/images/gnar.png";
import './stepOneMatch.css';

const StepOneMatch = React.memo(() => {

    const array = Array(4).fill(1);
    const hasTeam = false;

    return (
        <div className='cf-step-one-match__teams'>
        {hasTeam ? array.map(() =>
            <div className='cf-step-one-match__team'>
                <div className="cf-step-one-match__team-image">
                    <img src={cblol} alt='logo' />
                </div>
                <div className="cf-step-one-match__divider" />
                <div className="cf-step-one-match__team-name">
                    <b>ING</b> INGREJA
                </div>
            </div>
        ) : 
            <div className='cf-step-one-match__team-not-found'>
                <img src={gnar} alt='logo' />
                <div>Ops, parece que você ainda não tem um time.</div>
                <div>Para criar o seu, basta clicar no botão “criar time” logo abaixo.</div>
            </div>}
    </div>
    );
});

export default StepOneMatch;