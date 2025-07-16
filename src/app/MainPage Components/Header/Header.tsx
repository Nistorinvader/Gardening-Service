// src/app/MainPage Components/Header/Header.tsx
'use client'

import { Button, Container, Group, Burger, Drawer} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks'; // useMediaQuery здесь больше не нужен
import classes from './Header.module.css';
import Image from 'next/image'
import Link from 'next/link';

const links = [
  {
    path: '/#Leistungen',
    title: 'Leistungen',
  },
  {
    path: '/#Projekte',
    title: 'Projekte',
  },
  {
    path: '/#Kundenstimmen',
    title: 'Kundenstimmen',
  },
  {
    path: '/#Kontakt',
    title: 'Kontakt',
  },
]

export default function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  
  const desktopItems = links.map((link) => (
    <Link href={link.path} key={link.title} className={classes.nav}>{link.title}</Link>
  ));

  const mobileItems = links.map((link) => (
    <Link href={link.path} key={link.title} className={classes.nav} style={{fontSize: '1.2rem'}} onClick={close}>{link.title}</Link>
  ));

  return (
    <header className={classes.header}>
      <Container fluid className={classes.inner}>
        <Group className={classes.logoBlock}>
          <Link href={'/'}><Image src={'/logo.svg'} alt={'logo'} width={44} height={41} className={classes.logoImg}></Image></Link>
          <Link href={'/'} className={classes.logoText}>Gartenservice Augsburg</Link>
        </Group>

        <Group className={classes.navigation}>
            {desktopItems}
            <Link href={'/#Kontakt'} className={classes.nav} style={{fontWeight: '700'}}>
              <Button className={classes.button} w={168} h={40} px={10}>Angebot anfordern</Button>
            </Link>
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Drawer opened={opened} onClose={close} title="Menü" position="right">
          <div className={classes.drawerContent}>
            {mobileItems}
          </div>
        </Drawer>
      </Container>
    </header>
  );
}