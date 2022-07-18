import * as React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import Layout from "../../components/Layout";
import { Paper } from "@mui/material";
import { BTextInput } from "../../components/Form/BTextInput";
import { BCheckbox } from "../../components/Form/BCheckbox";
import { BDate } from "../../components/Form/BDate";

interface ILoginForm {
  firstName: string;
  lastName: string;
  datePay: Date;
  email: string;
  password: string;
  confirm: boolean;
}

const schema = yup.object().shape({
  firstName: yup.string().required("Campo é obrigatório."),
  email: yup
    .string()
    .email("Informe um email válido")
    .required("O email é obrigatório."),
  datePay: yup.string().required("A data é obrigatória."),
  password: yup
    .string()
    .min(6, "A senha deve possuir no mínimo 6 caracteres.")
    .required("A senha é obrigatória."),
  confirm: yup.boolean().isTrue(),
});

export default function SignUp() {
  const methods = useForm<ILoginForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      datePay: new Date(""),
      email: "",
      password: "",
      confirm: false,
    },
  });

  React.useEffect(() => {
    methods.setValue("confirm", true);
    methods.setValue("firstName", "Daian");
  }, []);

  const onSubmit = (data: ILoginForm) => {
    console.log(data);
    methods.reset();
  };

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>

            <FormProvider {...methods}>
              <Box
                component="form"
                noValidate
                onSubmit={methods.handleSubmit(onSubmit)}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <BTextInput
                      name="firstName"
                      type="text"
                      label="First Name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <BTextInput name="lastName" type="text" label="Last Name" />
                  </Grid>
                  <Grid item xs={12}>
                    <BTextInput name="email" type="text" label="E-mail" />
                  </Grid>
                  <Grid item xs={12}>
                    <BTextInput name="password" type="password" label="Senha" />
                  </Grid>
                  <Grid item xs={12}>
                    <BDate label="Data de Pagamento" name="datePay" />
                  </Grid>
                  <Grid item xs={12}>
                    <BCheckbox
                      name="confirm"
                      label="I want to receive inspiration, marketing promotions and updates via email"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </FormProvider>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
