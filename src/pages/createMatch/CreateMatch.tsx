import React from 'react';
import './createMatch.css';
import StepOneMatch from './stepOneMatch/StepOneMatch';
import MatchManagement from './matchManagement/MatchManagement';
import StepTwoMatch from './stepTwoMatch/StepTwoMatch';

const CreateMatch = React.memo(() => {

    const hasTeam = false;

    const handleFirstStep = () => {
        setCurrentStep(step.stepOne)
    };

    const handleSecondStep = () => {
        setCurrentStep(step.stepTwo)
    };

    const step = {
        stepOne: 'stepOne',
        stepTwo: 'stepTwo',
        stepThree: 'stepThree'
    }

    const [currentStep, setCurrentStep] = React.useState(step.stepOne);

    return (
        <div className='cf-create-match'>
            {currentStep === step.stepOne &&
                <MatchManagement
                    title='ESCOLHA O SEU TIME'
                    nextButton={{ label: hasTeam ? 'PRÓXIMO' : 'CRIAR TIME', onClick: handleFirstStep }}
                ><StepOneMatch />
                </MatchManagement>
            }
            {currentStep === step.stepTwo &&
                <MatchManagement
                   title='ESCOLHA O SEU NÍVEL'
                   nextButton={{ label: 'PRÓXIMO', onClick: handleSecondStep }}
               ><StepTwoMatch />
               </MatchManagement>
            }
        </div>
    );
});

export default CreateMatch;