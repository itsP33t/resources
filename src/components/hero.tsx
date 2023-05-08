import {
  createStyles,
  Container,
  Text,
  Group,
  UnstyledButton,
  Center,
} from "@mantine/core";
import { IconArrowDownCircle } from "@tabler/icons-react";

const BREAKPOINT = "@media (max-width: 755px)";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    backgroundImage: "url(bg.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "6px",
    //backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: "relative",
    paddingTop: 200,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: "white",
    //theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,
    color: "white",

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,
    display: "flex",
    justifyContent: "center",

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.wrapper}>
        <Container size={700} className={classes.inner}>
          <h1 className={classes.title}>Most useful WebDev resources</h1>

          <Text className={classes.description} color="dimmed">
            Hey, I'm P33t, a web developer. I'm developing websites for over 8
            years and here is my most useful resources.
          </Text>

          <Group className={classes.controls}>
            <Center>
              <UnstyledButton component="a" href="#main">
                <IconArrowDownCircle color="white">
                </IconArrowDownCircle>
              </UnstyledButton>
            </Center>
          </Group>
        </Container>
      </div>
    </>
  );
}
