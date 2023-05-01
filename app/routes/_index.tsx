import type { V2_MetaFunction } from "@remix-run/node";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));



export default function Index() {

  const inputProps = {
    step: 300,
  };
  return (
    <Container maxWidth="xl">
      <Grid container spacing={6}>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs={6}>
          <Stack
            component="form"
            sx={{
              width: "100%",
            }}
            spacing={2}
            noValidate
            autoComplete="off"
          >
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              inputProps={inputProps} 
            />
            <TextField
              hiddenLabel
              id="filled-hidden-label-normal"
              defaultValue="Normal"
              variant="filled"
            />
          </Stack>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Container>
  );
}
