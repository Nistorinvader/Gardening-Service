'use client';

import { Button } from '@mantine/core';
import { FaWhatsapp } from 'react-icons/fa';
import classes from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  const phoneNumber = '491725711590';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className={classes.stickyWrapper}>
      <Button
        component="a"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        leftSection={<FaWhatsapp size={20} />}
        size="lg"
        radius="xl"
        color="green"
        className={classes.button}
      >
        WhatsApp
      </Button>
    </div>
  );
}
