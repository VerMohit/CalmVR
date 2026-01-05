import { useState } from 'react';
import { Container, Group, Title } from '@mantine/core';
import * as classes from './Heading.module.css';

const links = [
  { link: '#About', label: 'About' },
  { link: '#How_It_Works', label: 'How It Works' },
  { link: '#Demo', label: 'Demo' },
  { link: '#Reviews', label: 'Reviews' },
];

export function Heading() {
  const [active, setActive] = useState(links[0].link);

  const navLinks = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        // Use smooth scrolling to the target section
        const targetElement = document.querySelector(link.link);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={`${classes.header} ${classes.stickyNav}`}>
      <Container size="md" className={classes.inner}>
        <Title>
          <span>Calm</span>
          <i>VR</i>
        </Title>
        <Group gap={5} visibleFrom="xs">
          {navLinks}
        </Group>
      </Container>
    </header>
  );
}
