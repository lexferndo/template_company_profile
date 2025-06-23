"use client";

import {
  ActionIcon,
  AppShell,
  Avatar,
  Badge,
  Burger,
  Card,
  Drawer,
  em,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import classes from "./custom.module.css";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import iconLogo from "../assets/ic_logo.svg";
import gifHero from "../assets/gif_hero.gif";
import gifAbout from "../assets/gif_about.gif";
import { useEffect, useState } from "react";
import {
  IconBrandWhatsapp,
  IconCloudLock,
  IconCode,
  IconDeviceDesktopCog,
  IconDeviceLaptop,
  IconHeadset,
  IconServerCog,
} from "@tabler/icons-react";
import { GetInTouch } from "./ContactUs";

const CustomLayout = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [widthHeght, setWidthHeight] = useState<number>(500);

  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  useEffect(() => {
    if (isMobile) {
      setWidthHeight(300);
    } else {
      setWidthHeight(500);
    }
  }, [isMobile]);

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px={{ base: "xl", sm: "5rem" }}>
          <Group justify="space-between" style={{ flex: 1 }}>
            <Image src={iconLogo} alt="Logo" height={25} />
            <Group gap={"xl"} visibleFrom="sm">
              <UnstyledButton
                className={classes.control}
                component="a"
                href="#home">
                Home
              </UnstyledButton>
              <UnstyledButton
                className={classes.control}
                component="a"
                href="#about-us">
                About Us
              </UnstyledButton>
              <UnstyledButton
                className={classes.control}
                component="a"
                href="#our-services">
                Services
              </UnstyledButton>
              <UnstyledButton
                className={classes.control}
                component="a"
                href="#contact-us">
                Contact Us
              </UnstyledButton>
            </Group>
          </Group>
          <Burger opened={opened} onClick={open} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>

      <AppShell.Main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "3rem" : "2rem",
        }}>
        <AppShell.Section>
          <Drawer
            hiddenFrom="md"
            position="left"
            size="xs"
            opened={opened}
            onClose={close}
            withCloseButton={false}>
            <Group
              gap={"xl"}
              style={{ flexDirection: "column", alignItems: "flex-start" }}>
              <UnstyledButton className={classes.control}>Home</UnstyledButton>
              <UnstyledButton className={classes.control}>
                About Us
              </UnstyledButton>
              <UnstyledButton className={classes.control}>
                Services
              </UnstyledButton>
              <UnstyledButton className={classes.control}>
                Contact Us
              </UnstyledButton>
            </Group>
          </Drawer>
        </AppShell.Section>

        <AppShell.Section id="home">
          <Flex
            justify={{ base: "center", sm: "space-around" }}
            direction={{ base: "column-reverse", sm: "row" }}
            gap={"md"}>
            <Flex direction={"column"} justify={"center"} gap={10}>
              <Text size="sm" fw={300}>
                - Expert Consulting -
              </Text>
              <Text size="2.5rem">Aftech Solutions</Text>
              <Text size="2.5rem">
                <Text span c="#4F8025" fw={600} inherit>
                  One Stop
                </Text>{" "}
                IT Solutions
              </Text>
              <Text size="lg" fw={300}>
                Empowering your business through smart analysis, <br />
                effective problem-solving, and tailored IT solutions.
              </Text>
            </Flex>

            <Flex justify="center">
              <Image
                src={gifHero}
                alt="Hero GIF"
                height={widthHeght}
                width={widthHeght}
              />
            </Flex>
          </Flex>
        </AppShell.Section>

        <AppShell.Section id="about-us">
          <Flex
            justify={{ base: "center" }}
            direction={{ base: "column-reverse", sm: "row" }}
            // m={"md"}
            gap={"xs"}>
            <Flex justify="center" p={0}>
              <Image
                src={gifAbout}
                alt="About GIF"
                height={widthHeght}
                width={widthHeght}
              />
            </Flex>

            <Flex
              direction={"column"}
              justify={"center"}
              gap={10}
              w={{ base: "100%", sm: "50%" }}>
              <Text size="2rem">About Us</Text>
              <Text size="lg" fw={300} ta={"justify"}>
                At Aftech Solutions, we specialize in delivering comprehensive
                IT services tailored to meet the evolving needs of businesses
                and individuals. Our expertise spans PC/laptop/MacBook repairs,
                remote and on-site troubleshooting, custom software development,
                network setup, and CCTV installation—all designed to keep your
                operations running smoothly.
              </Text>

              <Grid grow gutter={{ base: 5, sm: 10 }}>
                <Grid.Col span={{ base: 6, sm: 4 }} order={{ base: 1, sm: 1 }}>
                  <Badge color="green">Data Security Guaranteed</Badge>
                </Grid.Col>
                <Grid.Col span={{ base: 6, sm: 4 }} order={{ base: 3, sm: 2 }}>
                  <Badge color="green">Cutting-Edge IT Solutions</Badge>
                </Grid.Col>
                <Grid.Col span={{ base: 6, sm: 4 }} order={{ base: 2, sm: 3 }}>
                  <Badge color="green">Fast Response</Badge>
                </Grid.Col>
              </Grid>
            </Flex>
          </Flex>
        </AppShell.Section>

        <AppShell.Section id="our-services">
          <Stack justify="center" align="center">
            <Flex
              justify={"center"}
              direction={"column"}
              gap={"md"}
              w={{ base: "100%", sm: "90%" }}>
              <Text size="2rem" ta={"center"} py={10}>
                Our Services
              </Text>

              <Grid justify="center" align="center" p={15}>
                <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconHeadset size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      IT Support & Consultation
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Expert troubleshooting and tailored IT solutions to keep
                      your operations seamless and efficient.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconCloudLock size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Network & IT Security
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Robust network management and advanced data security
                      systems to safeguard your business.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconDeviceDesktopCog size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Onsite & Remote Helpdesk
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Comprehensive troubleshooting for IT devices and systems,
                      available both onsite and remotely.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconDeviceLaptop size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Computer & Printer Service
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Repair and maintenance for computers, laptops, and
                      printers to ensure peak performance.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconCode size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Website Development & SEO
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Professional website design and SEO optimization to boost
                      your online visibility on search engines like Google.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconServerCog size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Maintenance & Optimization
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Proactive IT system maintenance and performance tuning to
                      enhance business efficiency.
                    </Text>
                  </Card>
                </Grid.Col>
              </Grid>
            </Flex>
          </Stack>
        </AppShell.Section>

        <AppShell.Section id="contact-us">
          <GetInTouch />
        </AppShell.Section>

        <ActionIcon
          variant="filled"
          aria-label="Whatsapp"
          size="3rem"
          color="green"
          radius="100%"
          style={{ position: "fixed", bottom: 20, right: 20 }}
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => window.open("https://wa.me/6285156095138")}>
          <IconBrandWhatsapp
            style={{ width: "70%", height: "70%" }}
            size={20}
            stroke={1.5}
          />
        </ActionIcon>
      </AppShell.Main>
    </AppShell>
  );
};

export default CustomLayout;
