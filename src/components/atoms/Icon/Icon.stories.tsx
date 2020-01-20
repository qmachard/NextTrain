import React from 'react';

import { storiesOf } from '@storybook/react';

import icons from 'assets/icons.svg';
import { Icon } from './Icon';

const stories = storiesOf('Atoms|Icon', module);

stories.add('default', () => <Icon icon="bell" title="Icone Étoile" />);

// --- List all icons from sprite

const xmlhttp = new XMLHttpRequest();

xmlhttp.onload = function() {
  const parser = new DOMParser();
  const svg = parser.parseFromString(xmlhttp.responseText, 'image/svg+xml');

  const iconsList = Array.prototype.slice.call(
    svg.getElementsByTagName('symbol')
  );

  stories.add('list', () => (
    <ul className="examples">
      {iconsList.map(item => (
        <li key={item.id} className="example">
          <span className="example_view">
            <Icon icon={item.id} title={`Icone ${item.id}`} />
          </span>
          <span className="example_label">{item.id}</span>
        </li>
      ))}
    </ul>
  ));
};

xmlhttp.open('GET', icons, false);
xmlhttp.send();
