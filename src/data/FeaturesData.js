import React from 'react';

import {BsBook} from 'react-icons/bs';
const iconStyle = Icon => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
  {
    name: 'הלכות לשון הרע',
    description: 'כל יום 5 הלכות',
    icon: iconStyle(BsBook),
    imgClass: 'one',
  },
  {
    name: 'מוסר',
    description: 'ללמוד מוסר כל יום  2 דפים',
    icon: iconStyle(BsBook),
    imgClass: 'two',
  },
  {
    name: 'שיעור תורה',
    description: 'כל יום לפחות שעה שיעור תורה',
    icon: iconStyle(BsBook),
    imgClass: 'three',
  },
  {
    name: 'הלכות שבת קודש',
    description: 'כל יום 5 הלכות',
    icon: iconStyle(BsBook),
    imgClass: 'four',
  },
  {
    name: 'הלכות שמיטה',
    description: 'כל יום 5 הלכות',
    icon: iconStyle(BsBook),
    imgClass: 'five',
  },
  {
    name: 'תהילים',
    description: 'כל יום 5 מיזמורים',
    icon: iconStyle(BsBook),
    imgClass: 'six',
  },
];
