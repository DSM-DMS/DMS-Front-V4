import React, { useState } from 'react';
import { Navigation } from '../../components';
import * as S from './styles';

interface NavigationProps {}

const NavigationContainer: React.FC<NavigationProps> = ({}) => {
  const [isOpen, setOpen] = useState('');
  return <Navigation isOpen={isOpen} setOpen={setOpen} />;
};

export default NavigationContainer;
