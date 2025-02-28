/** @jsxImportSource theme-ui */
//@ts-nocheck

import Head from 'next/head';
import { Container, Flex, Button } from 'krado-react';
import Text from '@/components/fixed-krado-components/Text';
import { motion } from 'framer-motion';
import { Input, Select } from 'theme-ui';
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState(1);
  const [unit, setUnit] = useState('minutes');
  const [eta, setEta] = useState(null);

  const calculateETA = () => {
    let multiplier = 1;
    if (unit === 'days') multiplier = 1440; // 1 day = 1440 minutes
    if (unit === 'weeks') multiplier = 10080; // 1 week = 10080 minutes
    const result = input * multiplier * 2.25;
    setEta(result);
  };

  return (
    <>
      <Head>
        <title>ETA Calculator</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
}
