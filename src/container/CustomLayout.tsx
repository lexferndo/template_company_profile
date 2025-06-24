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
import iconLogo from "../../public/favicon.png";
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
            <Flex justify={"center"} align={"center"}>
              <Image src={iconLogo} alt="Logo" height={50} />
              <Flex direction={"column"} gap={2}>
                <Text size="1.5rem" fw={700} lts={8.5}>
                  DENEXT
                </Text>
                <Text size="8px" fw={400}>
                  DELIVERING THE NEXT INNOVATION
                </Text>
              </Flex>
            </Flex>
            <Group gap={"xl"} visibleFrom="sm">
              <UnstyledButton
                className={classes.control}
                component="a"
                href="#home">
                Beranda
              </UnstyledButton>
              <UnstyledButton
                className={classes.control}
                component="a"
                href="#about-us">
                Tentang
              </UnstyledButton>
              <UnstyledButton
                className={classes.control}
                component="a"
                href="#our-services">
                Layanan
              </UnstyledButton>
              <UnstyledButton
                className={classes.control}
                component="a"
                href="#contact-us">
                Kontak
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
              <Text size="2.5rem">DENEXT</Text>
              <Text size="2.5rem">
                <Text span c="#4F8025" fw={600} inherit>
                  One Stop
                </Text>{" "}
                IT Solutions
              </Text>
              <Text size="lg" fw={300}>
                {/* Empowering your business through smart analysis, <br />
                effective problem-solving, and tailored IT solutions. */}
                Solusi IT cerdas untuk mendukung pertumbuhan dan efisiensi
                bisnis Anda.
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
              <Text size="2rem">Tentang Kami</Text>
              <Text size="lg" fw={300} ta={"justify"}>
                <Text span c="#4F8025" fw={600} inherit>
                  DENEXT
                </Text>{" "}
                adalah perusahaan IT Support & Konsultan Teknologi modern yang
                berkomitmen untuk memberikan solusi teknologi yang handal,
                fleksibel, dan terjangkau bagi UMKM, startup, hingga perusahaan
                berskala besar. Kami memandang teknologi bukan sekadar alat
                bantu, tetapi sebagai strategi utama untuk mendorong pertumbuhan
                dan efisiensi bisnis. Dengan pendekatan yang berpusat pada
                manusia dan berorientasi pada hasil, kami hadir sebagai mitra
                terpercaya dalam mendampingi transformasi digital bisnis Anda.
              </Text>

              <Flex direction={"column"} gap={20}>
                <Text size="2rem">Kenapa DENEXT ?</Text>

                <Flex gap={10} wrap="wrap" justify="flex-start">
                  <Badge color="green" leftSection={iconCheck} size="md">
                    Tim Profesional & Berpengalaman
                  </Badge>
                  <Badge color="green" leftSection={iconCheck} size="md">
                    Solusi Cepat & Efisien
                  </Badge>
                  <Badge color="green" leftSection={iconCheck} size="md">
                    Bisa Remote & Onsite
                  </Badge>
                  <Badge color="green" leftSection={iconCheck} size="md">
                    Harga Transparan & Fleksibel
                  </Badge>
                  <Badge color="green" leftSection={iconCheck} size="md">
                    Support Multi-platform (Windows, Linux, Mac)
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
                Layanan Kami
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
                      Kami menyediakan dukungan teknis harian untuk membantu
                      menangani berbagai masalah IT serta menjaga agar sistem
                      dan perangkat tetap berjalan optimal. Layanan ini mencakup
                      instalasi sistem operasi dan software, serta pemeliharaan
                      rutin untuk memastikan performa perangkat kerja seperti
                      PC, laptop, dan printer tetap maksimal—baik secara jarak
                      jauh maupun langsung di lokasi Anda.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconCloudLock size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Jaringan & Infrastruktur
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Kami merancang dan mengimplementasikan sistem jaringan
                      kantor seperti LAN, WAN, dan WiFi. Proses instalasi dan
                      konfigurasi mencakup perangkat seperti Mikrotik, Ubiquiti,
                      Cisco, dan TP-Link, dilengkapi dengan manajemen bandwidth,
                      pengaturan VLAN, dan pengamanan jaringan agar tetap stabil
                      dan aman.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconDeviceDesktopCog size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Virtualisasi & Server
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Kami membantu bisnis membangun infrastruktur server fisik
                      maupun virtual menggunakan platform seperti Proxmox,
                      VMware, Hyper-V, dan Windows Server. Layanan ini termasuk
                      konfigurasi Active Directory, DNS, DHCP, hingga sistem
                      replikasi dan High Availability (HA) untuk memastikan
                      keandalan operasional server Anda.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconDeviceLaptop size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Website & Aplikasi
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Kami mengembangkan website dan aplikasi berbasis web yang
                      disesuaikan dengan kebutuhan bisnis Anda. Layanan kami
                      mencakup pendaftaran domain, pengelolaan SSL, maintenance
                      rutin, backup otomatis, dan optimasi SEO agar bisnis Anda
                      tampil maksimal secara online.
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
                      Kami mendukung migrasi dan pengelolaan layanan cloud
                      seperti Google Workspace, Microsoft 365, dan Zoho Mail.
                      Kami juga mengintegrasikan email bisnis, penyimpanan
                      cloud, dan kolaborasi tim, dilengkapi konfigurasi keamanan
                      email seperti SMTP, DKIM, dan SPF untuk menjaga reputasi
                      email dan keamanan data.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconServerCog size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Keamanan Digital & CCTV
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Kami menyediakan solusi pengawasan digital melalui
                      instalasi CCTV analog maupun IP dari merek terpercaya
                      seperti Hikvision, Dahua, dan Ezviz. Sistem kami mendukung
                      pemantauan lokal maupun jarak jauh, serta integrasi dengan
                      jaringan dan penyimpanan terpusat seperti NAS atau cloud.
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
                      Kami menawarkan solusi backup lokal, offsite, dan cloud
                      menggunakan sistem seperti Synology, ZFS, rsync, dan
                      Google Drive. Selain itu, kami menangani sinkronisasi data
                      antar server (misalnya antara kantor pusat dan data
                      center) serta menyusun dan menerapkan rencana pemulihan
                      bencana (Disaster Recovery Plan).
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg">
                    <Avatar color="green" radius="md" size="lg">
                      <IconServerCog size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Perangkat IT & Pemeliharaan
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Kami melayani perbaikan dan upgrade perangkat seperti PC,
                      laptop, dan MacBook untuk berbagai sistem operasi
                      (Windows, macOS, Linux). Layanan kami juga mencakup
                      pengadaan perangkat keras, instalasi, audit infrastruktur
                      IT, dan dokumentasi aset untuk membantu manajemen
                      perangkat Anda lebih tertata.
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
