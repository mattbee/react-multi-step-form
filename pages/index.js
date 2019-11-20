import React, { useState } from 'react';
import Layout from '../components/Layout';
import InputWithLabel from '../components/InputWithLabel';
import Button from '../components/Button';
import { nameValid, emailValid } from '../helpers/validation';

const NAME_STEP = 'name';
const EMAIL_STEP = 'email';

const INITIAL_STATE = {
  [NAME_STEP]: {
    pageTitle: 'What is your name?',
    name: 'name',
    label: 'Name:',
    type: 'text',
    error: '',
    value: '',
    validate: (value) => nameValid(value),
    prevStep: null,
    nextStep: EMAIL_STEP,
  },
  [EMAIL_STEP]: {
    pageTitle: 'What is your email address?',
    name: 'email',
    label: 'Email:',
    type: 'email',
    error: '',
    value: '',
    validate: (value) => emailValid(value),
    prevStep: NAME_STEP,
    nextStep: null,
  },
};

const MultiStepForm = ({ initialStep = NAME_STEP }) => {
  const [formStep, setFormStep] = useState(initialStep);
  const [formState, setFormState] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const currentFormStep = formState[formStep];
    setFormState({
      ...formState,
      [formStep]: {
        ...formState[formStep],
        error: currentFormStep.validate(e.currentTarget.value),
        value: e.currentTarget.value
      }
    });
  };

  const onNext = (e) => {
    e.preventDefault();
    const value = formState[formStep].value;
    const error = formState[formStep].validate(value);

    if(!error) {
      setFormStep(formState[formStep].nextStep);
    } else {
      setFormState({ ...formState, [formStep]: { ...formState[formStep], error: error } })
    }
  };

  const onPrev = (e) => {
    e.preventDefault();
    setFormStep(formState[formStep].prevStep);
  };

  const currentStep = formState[formStep];

  return (
    <Layout>
      <form action="" method="post" style={{ maxWidth: '20em' }}>
        <h2>{currentStep.pageTitle}</h2>
        <InputWithLabel
          {...currentStep}
          onChange={handleChange}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '2em 0' }}>
          <Button onClick={onPrev} disabled={!currentStep.prevStep}>Prev</Button>
          <Button onClick={onNext} disabled={!currentStep.nextStep}>Next</Button>
        </div>
      </form>
    </Layout>
  );
};

export default MultiStepForm;
