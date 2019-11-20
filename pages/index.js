import React, { useState } from 'react';
import Layout from '../components/Layout';
import InputWithLabel from '../components/InputWithLabel';
import Button from '../components/Button';

const nameValid = (name) => {
  if (name.length < 2) {
    return 'Name is too short';
  } else if (name.length >= 25) {
    return 'Name is too long';
  }

  return null;
};

const NAME_STEP = 'name';

const INITIAL_STATE = {
  [NAME_STEP]: {
    pageTitle: 'What is your name?',
    name: 'name',
    label: 'Name:',
    type: 'text',
    error: '',
    value: '',
    validate: (value) => nameValid(value),
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

    setFormState({ ...formState, [formStep]: { ...formState[formStep], error: error } })
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
          <Button>Prev</Button>
          <Button onClick={onNext}>Next</Button>
        </div>
      </form>
    </Layout>
  );
};

export default MultiStepForm;
