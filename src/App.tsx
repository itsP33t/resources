// imports
import {
  MantineProvider,
  AppShell,
  Header,
  SimpleGrid,
  Center,
  Card,
  Image,
  Text,
  Button,
  Group,
  Space,
  Badge
} from "@mantine/core";

import {
  IconServerBolt,
  IconExternalLink,
  IconBrush,
  IconPalette,
  IconTextSize,
  IconAlien,
  IconBrandReact,
  IconDeviceLaptop,
  IconHammer,
  IconRobot
} from "@tabler/icons-react";

// components
import { HeaderMegaMenu } from "./components/navbar";
import { Hero } from "./components/hero";
import { MainFooter } from "./components/footer";
import { AffixMain } from "./components/affix";

// data
import hostingData from "./data/hosting";
import bggenData from "./data/backgroundGen";
import DesignAppData from "./data/DesignApp";
import FontsData from "./data/Fonts";
import IconsData from "./data/Icons";
import ReactUiFrameworksData from "./data/reactUiFrameworks";
import MockingToolsData from "./data/MockingTools";
import ToolsData from "./data/tools";
import AIData from "./data/ai";

export default function App() {
  const hosting = hostingData.map((item) => (
    <div>
      <Center>
        <Card shadow="sm" p="lg" radius="md">
          <Card.Section>
            <Image src={item.image} height={160} alt="" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={1000}>{item.title}</Text>
          </Group>

          <Text size="sm" color="dimmed">
            {item.description}
          </Text>

          <Button
            variant="filled"
            color="gray"
            fullWidth
            mt="md"
            radius="md"
            component="a"
            target="_blank"
            href={item.url}
          >
            <IconExternalLink></IconExternalLink> Visit
          </Button>
        </Card>
      </Center>
    </div>
  ));

  const backgroundGen = bggenData.map((item) => (
    <div>
      <Center>
        <Card shadow="sm" p="lg" radius="md">
          <Card.Section>
            <Image src={item.image} height={160} alt="" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={1000}>{item.title}</Text>
          </Group>

          <Text size="sm" color="dimmed">
            {item.description}
          </Text>

          <Button
            variant="filled"
            color="gray"
            fullWidth
            mt="md"
            radius="md"
            component="a"
            target="_blank"
            href={item.url}
          >
            <IconExternalLink></IconExternalLink> Visit
          </Button>
        </Card>
      </Center>
    </div>
  ));

  const DesignApp = DesignAppData.map((item) => (
    <div>
      <Center>
        <Card shadow="sm" p="lg" radius="md">
          <Card.Section>
            <Image src={item.image} height={160} alt="" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={1000}>{item.title}</Text>
          </Group>

          <Text size="sm" color="dimmed">
            {item.description}
          </Text>

          <Button
            variant="filled"
            color="gray"
            fullWidth
            mt="md"
            radius="md"
            component="a"
            target="_blank"
            href={item.url}
          >
            <IconExternalLink></IconExternalLink> Visit
          </Button>
        </Card>
      </Center>
    </div>
  ));

  const Fonts = FontsData.map((item) => (
    <div>
      <Center>
        <Card shadow="sm" p="lg" radius="md">
          <Card.Section>
            <Image src={item.image} height={160} alt="" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={1000}>{item.title}</Text>
          </Group>

          <Text size="sm" color="dimmed">
            {item.description}
          </Text>

          <Button
            variant="filled"
            color="gray"
            fullWidth
            mt="md"
            radius="md"
            component="a"
            target="_blank"
            href={item.url}
          >
            <IconExternalLink></IconExternalLink> Visit
          </Button>
        </Card>
      </Center>
    </div>
  ));

  const Icons = IconsData.map((item) => (
    <div>
      <Center>
        <Card shadow="sm" p="lg" radius="md">
          <Card.Section>
            <Image src={item.image} height={160} alt="" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={1000}>{item.title}</Text>
          </Group>

          <Text size="sm" color="dimmed">
            {item.description}
          </Text>

          <Button
            variant="filled"
            color="gray"
            fullWidth
            mt="md"
            radius="md"
            component="a"
            target="_blank"
            href={item.url}
          >
            <IconExternalLink></IconExternalLink> Visit
          </Button>
        </Card>
      </Center>
    </div>
  ));

  const MockingTools = MockingToolsData.map((item) => (
    <div>
      <Center>
        <Card shadow="sm" p="lg" radius="md">
          <Card.Section>
            <Image src={item.image} height={160} alt="" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={1000}>{item.title}</Text>
          </Group>

          <Text size="sm" color="dimmed">
            {item.description}
          </Text>

          <Button
            variant="filled"
            color="gray"
            fullWidth
            mt="md"
            radius="md"
            component="a"
            target="_blank"
            href={item.url}
          >
            <IconExternalLink></IconExternalLink> Visit
          </Button>
        </Card>
      </Center>
    </div>
  ));


  const ReactUiFrameworks = ReactUiFrameworksData.map((item) => (
    <div>
      <Center>
        <Card shadow="sm" p="lg" radius="md">
          <Card.Section>
            <Image src={item.image} height={160} alt="" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Center inline>
            <Text weight={1000}>{item.title} {' '}
            {item.title === "Mantine" ? <Badge size="sm" variant="filled">My favorite</Badge>: null}
            </Text>
            </Center>
          </Group>

          <Text size="sm" color="dimmed">
            {item.description}
          </Text>

          <Button
            variant="filled"
            color="gray"
            fullWidth
            mt="md"
            radius="md"
            component="a"
            target="_blank"
            href={item.url}
          >
            <IconExternalLink></IconExternalLink> Visit
          </Button>
        </Card>
      </Center>
    </div>
  ));

  const Tools = ToolsData.map((item) => (
    <div>
      <Center>
        <Card shadow="sm" p="lg" radius="md">
          <Card.Section>
            <Image src={item.image} height={160} alt="" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={1000}>{item.title}</Text>
          </Group>

          <Text size="sm" color="dimmed">
            {item.description}
          </Text>

          <Button
            variant="filled"
            color="gray"
            fullWidth
            mt="md"
            radius="md"
            component="a"
            target="_blank"
            href={item.url}
          >
            <IconExternalLink></IconExternalLink> Visit
          </Button>
        </Card>
      </Center>
    </div>
  ));


  const AI = AIData.map((item) => (
    <div>
      <Center>
        <Card shadow="sm" p="lg" radius="md">
          <Card.Section>
            <Image src={item.image} height={160} alt="" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={1000}>{item.title}</Text>
          </Group>

          <Text size="sm" color="dimmed">
            {item.description}
          </Text>

          <Button
            variant="filled"
            color="gray"
            fullWidth
            mt="md"
            radius="md"
            component="a"
            target="_blank"
            href={item.url}
          >
            <IconExternalLink></IconExternalLink> Visit
          </Button>
        </Card>
      </Center>
    </div>
  ));

  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
        colors: {
          primary: [
            "#9debfb",
            "#84e7fa",
            "#6ce2f9",
            "#53ddf9",
            "#09cef6",
            "#08badd",
            "#079cba",
            "#0690ac",
            "#067c93",
            "#045262",
          ],
          gradientFrom: [
            "#99e5ff",
            "#80dfff",
            "#66d8ff",
            "#4dd2ff",
            "#00bfff",
            "#00abe6",
            "#0098cc",
            "#0085b3",
            "#007299",
            "#004c66",
          ],
          gradientTo: [
            "#9dd7fb",
            "#84cdfa",
            "#6cc3f9",
            "#53b9f8",
            "#0a9bf5",
            "#098fe3",
            "#087cc4",
            "#076cac",
            "#065d93",
            "#043e62",
          ],
        },
        primaryShade: 6,
        primaryColor: "primary",
        defaultRadius: "sm",
        defaultGradient: {
          deg: 45,
          to: "gradientTo",
          from: "gradientFrom",
        },
        fontFamily: "'Poppins', sans-serif",
        other: {
          customFontFamily: "'Poppins', sans-serif",
        },
        components: {
          Button: {
            styles: {
              root: {
                borderWidth: 2,
              },
            },
          },
          Chip: {
            styles: {
              label: {
                borderWidth: 2,
              },
            },
          },
          Input: {
            styles: {
              input: {
                borderWidth: 2,
              },
            },
          },
          Pagination: {
            styles: {
              item: {
                borderWidth: 2,
              },
            },
          },
          Switch: {
            styles: {
              track: {
                borderWidth: 2,
              },
            },
          },
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <div style={{ scrollBehavior: "smooth" }}>
        <AppShell
          padding="md"
          header={
            <Header height={5} p="xs">
              {<HeaderMegaMenu></HeaderMegaMenu>}
            </Header>
          }
          footer={<MainFooter></MainFooter>}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <div style={{ height: "80px" }}></div>
          <Hero></Hero>

          <div style={{ height: "120px" }}></div>
          <div id="main"></div>

          {/* AI */}
          <h1>
            <Center inline>
            <IconRobot/> <p style={{paddingRight: "10px"}}>AI</p>
            <Badge size="sm" variant="filled">Trending</Badge>
            </Center>
          </h1>
          <SimpleGrid
            cols={3}
            spacing="lg"
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: "md" },
              { maxWidth: 755, cols: 2, spacing: "sm" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
            {/* AUTO GENERATED CONTENT */}
            {AI}
          </SimpleGrid>
          
          
          {/* HOSTING */}
          <h1>
            <IconServerBolt></IconServerBolt> Hosting
          </h1>
          <SimpleGrid
            cols={3}
            spacing="lg"
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: "md" },
              { maxWidth: 755, cols: 2, spacing: "sm" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
            {/* AUTO GENERATED CONTENT */}
            {hosting}
          </SimpleGrid>

          {/* BACKGROUND GENERATORS */}
          <h1>
            <IconBrush></IconBrush> Background Generators
          </h1>
          <SimpleGrid
            cols={3}
            spacing="lg"
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: "md" },
              { maxWidth: 755, cols: 2, spacing: "sm" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
            {/* AUTO GENERATED CONTENT */}
            {backgroundGen}
          </SimpleGrid>

          {/* DESIGN APPS */}
          <h1>
            <IconPalette></IconPalette> Design Applications
          </h1>
          <SimpleGrid
            cols={3}
            spacing="lg"
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: "md" },
              { maxWidth: 755, cols: 2, spacing: "sm" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
            {/* AUTO GENERATED CONTENT */}
            {DesignApp}
          </SimpleGrid>

          {/* FONTS */}
          <h1>
            <IconTextSize></IconTextSize> Fonts
          </h1>
          <SimpleGrid
            cols={3}
            spacing="lg"
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: "md" },
              { maxWidth: 755, cols: 2, spacing: "sm" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
            {/* AUTO GENERATED CONTENT */}
            {Fonts}
          </SimpleGrid>

          {/* icons */}

          <h1>
            <IconAlien></IconAlien> Icons
          </h1>
          <SimpleGrid
            cols={3}
            spacing="lg"
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: "md" },
              { maxWidth: 755, cols: 2, spacing: "sm" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
            {/* AUTO GENERATED CONTENT */}
            {Icons}
          </SimpleGrid>
          
          {/* React Frameworks */}

          <h1>
            <IconBrandReact></IconBrandReact> React UI Frameworks
          </h1>
          <SimpleGrid
            cols={3}
            spacing="lg"
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: "md" },
              { maxWidth: 755, cols: 2, spacing: "sm" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
            {/* AUTO GENERATED CONTENT */}
            {ReactUiFrameworks}
          </SimpleGrid>
          
          {/* Mocking tools */}
          
          <h1>
            <IconDeviceLaptop></IconDeviceLaptop> Mocking Tools
          </h1>
          <SimpleGrid
            cols={3}
            spacing="lg"
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: "md" },
              { maxWidth: 755, cols: 2, spacing: "sm" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
            {/* AUTO GENERATED CONTENT */}
            {MockingTools}
          </SimpleGrid>
         
         {/* tools, category for anything that didnt fit in the other categories */}
         
          <h1>
            <IconHammer></IconHammer> Tools
          </h1>
          <Text>For anything that does not fit in the categories</Text>
          <Space h="md"></Space>
          <SimpleGrid
            cols={3}
            spacing="lg"
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: "md" },
              { maxWidth: 755, cols: 2, spacing: "sm" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
            {/* AUTO GENERATED CONTENT */}
            {Tools}
          </SimpleGrid>

          <AffixMain></AffixMain>
        </AppShell>
      </div>
    </MantineProvider>
  );
}
