import React, { useState } from 'react';
import Layout from '../components/Layout';
import InputWithLabel from '../components/InputWithLabel';
import Button from '../components/Button';

const NAME_STEP = 'name';

const INITIAL_STATE = {
  [NAME_STEP]: {
    pageTitle: 'What is your name?',
    name: 'name',
    label: 'Name:',
    type: 'text',
    error: '',
    value: '',
    nextStep: null,
  },
};

const MultiStepForm = ({ initialStep = NAME_STEP }) => {
  const [formStep, setFormStep] = useState(initialStep);
  const [formState, setFormState] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [formStep]: {
        ...formState[formStep],
        value: e.currentTarget.value
      }
    });
  };

  const onNext = (e) => {
    e.preventDefault();
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
