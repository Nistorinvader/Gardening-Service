import { Container } from '@mantine/core';
import classes from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
          <p className={classes.logo}>© 2025 Gartenservice Augsburg</p>
          <Link href={'/Impressum'} className={classes.logo} style={{textDecoration: 'none'}}>Impressum</Link>
          <Link href={'/Datenschutz'} className={classes.logo} style={{textDecoration: 'none'}}>Datenschutz</Link>
      </Container>
      <Container className={classes.DHinner}>
        <Link href={'https://github.com/DHensirovskyi'} className={classes.logo} style={{textDecoration: 'none'}}>Website designed & developed by Dmytro Hensirovskyi</Link>
      </Container>
    </footer>
  );
}
