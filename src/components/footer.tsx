import { createStyles, Container, Group, Anchor } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function MainFooter() {
  const { classes } = useStyles();
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <h1>P33t.net</h1>
        <Group className={classes.links}>
          <Anchor<"a">
            color="dimmed"
            key={"Buy me a coffee"}
            href={"https://ko-fi.com/p33tdev"}
            onClick={(event) => event.preventDefault()}
            size="sm"
          >
            Buy me a coffee
          </Anchor>

          <Anchor<"a">
            color="dimmed"
            key={"Contribute"}
            href={"https://github.com/itsP33t/resources"}
            onClick={(event) => event.preventDefault()}
            size="sm"
          >
            Contribute
          </Anchor>
        </Group>
      </Container>
    </div>
  );
}
