import type { V2_MetaFunction } from "@remix-run/node";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Carina Gonzalez Software Developer" }];
};

export default function Index() {

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const inputProps:any = {
  step: 300,
  inputMode:'text', 
  pattern:`[0-9]*`
};

const handleKeyDown = (e:React.KeyboardEvent<HTMLDivElement>):void => {
  if(e.key === 'Enter' || e.code === 'Enter') {
    e.preventDefault();
  }
}

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
              size="small"
              inputProps={inputProps} 
              placeholder={`name`}
              onKeyDown={handleKeyDown}
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
