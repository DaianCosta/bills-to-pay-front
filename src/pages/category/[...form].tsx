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
import { NextPage } from "next";

interface ILoginForm {
  name: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Campo é obrigatório."),
});

const CategoryForm: NextPage = () => {
  const methods = useForm<ILoginForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
    },
  });

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
              Cadastro de Categoria
            </Typography>

            <FormProvider {...methods}>
              <Box
                component="form"
                noValidate
                onSubmit={methods.handleSubmit(onSubmit)}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <BTextInput name="name" type="text" label="Name" />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {" "}
                  Salvar
                </Button>
              </Box>
            </FormProvider>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

CategoryForm.getInitialProps = async ({ query }) => {
  const { form } = query;

  console.log("aqui", query);

  return { form };
};

export default CategoryForm;
