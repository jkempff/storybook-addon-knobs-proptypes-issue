import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('with text', () => {
    const disabled = boolean('disabled', false);

    console.log(disabled);

    return (
        <button
            disabled={ disabled }
            onClick={ action('clicked') }
        >
            Hello Button
        </button>
    );
});