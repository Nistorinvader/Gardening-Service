'use client';

import { Affix, Button, Transition } from '@mantine/core';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '491725711590';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted>
        {(transitionStyles) => (
          <Button
            component="a"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            leftSection={<FaWhatsapp size={20} />}
            style={transitionStyles}
            size="lg"
            radius="xl"
            color="green"
          >
            WhatsApp
          </Button>
        )}
      </Transition>
    </Affix>
  );
}