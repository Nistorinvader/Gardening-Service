'use client';

import { useState, useEffect } from 'react';
import { Paper, Text, Button, Group } from '@mantine/core';
import classes from './CookieBanner.module.css';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookie_consent');
    
    if (!consentGiven) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setVisible(false);
  };

  if (!visible) {
    return null; 
  }

  return (
    <div className={classes.wrapper}>
      <Paper withBorder p="lg" radius="md" shadow="md">
        <Group justify="space-between" gap="md">
          <Text fz="sm" maw={500}>
            Wir verwenden Cookies, um Ihr Erlebnis zu verbessern. Indem Sie auf <b>„Akzeptieren“</b> klicken, erklären Sie sich mit unserer Datenschutzerklärung einverstanden.
          </Text>
          <Button onClick={handleAccept} className={classes.button} size="sm">
            <p className={classes.btnText}>Akzeptieren</p>
          </Button>
        </Group>
      </Paper>
    </div>
  );
}