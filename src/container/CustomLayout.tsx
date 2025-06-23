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
import iconLogo from "../assets/ic_header.jpeg";
import gifHero from "../assets/gif_hero.gif";
import gifAbout from "../assets/gif_about.gif";
import { useEffect, useState } from "react";
import {
  IconBrandWhatsapp,
  IconCircleDashedCheck,
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

  const iconCheck = <IconCircleDashedCheck size={20} />;

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
              gap={20}
              w={{ base: "100%", sm: "50%" }}>
              <Text size="2rem">About Us</Text>
              <Text size="lg" fw={300} ta={"justify"}>
                <Text span c="#4F8025" fw={600} inherit>
                  DENEXT
                </Text>{" "}
                is a modern IT Support & Consulting company committed to
                delivering reliable, flexible, and affordable technology
                solutions for SMEs, startups, and large enterprises. We view
                technology not merely as a tool, but as a core strategy to drive
                business growth and efficiency. With a human-centric and
                results-oriented approach, we position ourselves as a trusted
                partner in your digital transformation journey.
              </Text>

              <Flex direction={"column"} gap={20}>
                <Text size="2rem">Why DENEXT ?</Text>

                <Flex gap={10} wrap="wrap" justify="flex-start">
                  <Badge color="green" leftSection={iconCheck} size="md">
                    Professional & Experienced Team
                  </Badge>
                  <Badge color="green" leftSection={iconCheck} size="md">
                    Fast & Efficient Solutions
                  </Badge>
                  <Badge color="green" leftSection={iconCheck} size="md">
                    Available for Remote & Onsite Support
                  </Badge>
                  <Badge color="green" leftSection={iconCheck} size="md">
                    Transparent & Flexible Pricing
                  </Badge>
                  <Badge color="green" leftSection={iconCheck} size="md">
                    Multi-Platform Support (Windows, Linux, macOS)
                  </Badge>
                </Flex>
              </Flex>
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
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconHeadset size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      IT Support (Remote & On-site)
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      We provide daily technical support to help resolve IT
                      issues and ensure your systems run smoothly. Our services
                      include operating system and software installation, along
                      with routine maintenance to keep work devices like PCs,
                      laptops, and printers performing at their best—either
                      remotely or directly at your location.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconCloudLock size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Network & Infrastructure
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Our team designs and implements office network systems,
                      including LAN, WAN, and WiFi. We handle installation and
                      configuration of network equipment such as Mikrotik,
                      Ubiquiti, Cisco, and TP-Link, while ensuring secure,
                      stable, and optimized connections through proper bandwidth
                      management, VLAN structuring, and network security
                      protocols.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconDeviceDesktopCog size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Virtualization & Server
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      We help businesses build robust infrastructure through
                      physical and virtual server setups using Proxmox, VMware,
                      Hyper-V, and Windows Server. Services also include
                      configuring Active Directory, DNS, DHCP, and implementing
                      reliable systems for data replication, high availability,
                      and failover.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconDeviceLaptop size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Website & Application Development
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      From company profiles to custom business tools, we develop
                      professional websites and web applications. Our service
                      covers everything from domain registration and SSL setup
                      to regular maintenance, backup automation, and SEO
                      optimization to improve online presence.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconCode size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Cloud & Email Hosting
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      We support cloud migration and setup for platforms like
                      Google Workspace, Microsoft 365, and Zoho Mail. Our
                      solutions integrate business email, team collaboration
                      tools, and secure storage with full configuration of email
                      protocols like SMTP, DKIM, and SPF to ensure delivery and
                      data safety.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconServerCog size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Digital Security & CCTV
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      We offer digital surveillance solutions using analog or IP
                      CCTV systems from top brands like Hikvision, Dahua, and
                      Ezviz. Our setup includes both local and remote
                      monitoring, fully integrated with your existing network
                      and centralized storage systems like NAS or cloud
                      services.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconServerCog size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Backup & Disaster Recovery
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Our backup strategies include local, offsite, and
                      cloud-based options using tools like Synology, ZFS, rsync,
                      and Google Drive. We also provide data synchronization
                      between branch and main office servers, and implement
                      well-structured disaster recovery plans to ensure business
                      continuity.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconServerCog size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      IT Hardware & Maintenance
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      We offer repair and upgrade services for PCs, laptops, and
                      MacBooks across Windows, macOS, and Linux environments.
                      From hardware procurement and installation to
                      infrastructure audits and IT asset documentation, we
                      ensure your hardware ecosystem stays reliable and
                      organized.
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

        <AppShell.Section
          p={"md"}
          style={{
            borderTop: "1px solid #eaeaea",
          }}>
          <footer style={{ textAlign: "center", justifyContent: "center" }}>
            <Text size="sm" c="dimmed">
              © {new Date().getFullYear()} DENEXT. All rights reserved.
            </Text>
          </footer>
        </AppShell.Section>
      </AppShell.Main>
    </AppShell>
  );
};

export default CustomLayout;
