// imports
import { MantineProvider, AppShell, Navbar, Header, createStyles } from '@mantine/core';


 
// scroll-behavior: smooth;

// components
import {HeaderMegaMenu} from './components/navbar';
import {Hero} from './components/hero';


const useStyles = createStyles((theme) => ({
  main: {
    scrollBehavior: 'smooth',
  }
}));


export default function App() {
  const { classes, theme } = useStyles();
  return (
    <MantineProvider theme={{
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
          "#045262"
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
          "#004c66"
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
          "#043e62"
        ]
      },
      primaryShade: 6,
      primaryColor: "primary",
      defaultRadius: "sm",
      defaultGradient: {
        deg: 45,
        to: "gradientTo",
        from: "gradientFrom"
      },
      fontFamily: "'Poppins', sans-serif",
      other: {
        customFontFamily: "'Poppins', sans-serif"
      },
      components: {
        Button: {
          styles: {
            root: {
              borderWidth: 2
            }
          }
        },
        Chip: {
          styles: {
            label: {
              borderWidth: 2
            }
          }
        },
        Input: {
          styles: {
            input: {
              borderWidth: 2
            }
          }
        },
        Pagination: {
          styles: {
            item: {
              borderWidth: 2
            }
          }
        },
        Switch: {
          styles: {
            track: {
              borderWidth: 2
            }
          }
        }
      }
    }} withGlobalStyles withNormalizeCSS >
      <div style={{scrollBehavior: "smooth"}}>
      <AppShell
      padding="md"
      header={<Header height={5} p="xs">{<HeaderMegaMenu></HeaderMegaMenu>}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <div style={{height: "80px"}}></div>
      <Hero></Hero>
      <div style={{height: "15000px"}}></div>
      <div id="main" ></div>
    </AppShell>
    </div>
    </MantineProvider>
  );
}