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

// interface FooterSimpleProps {
//   links: { link: string; label: string }[];
// }

export function MainFooter() {
  const { classes } = useStyles();
  //   const items = links.map((link) => (
  //     <Anchor<'a'>
  //       color="dimmed"
  //       key={link.label}
  //       href={link.link}
  //       onClick={(event) => event.preventDefault()}
  //       size="sm"
  //     >
  //       {link.label}
  //     </Anchor>
  //   ));

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
        </Group>
      </Container>
    </div>
  );
}
