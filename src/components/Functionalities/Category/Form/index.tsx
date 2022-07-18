import * as React from "react";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

import { BTextInput } from "../../../Form/BTextInput";
import { BCheckbox } from "../../../Form/BCheckbox";
import { BDate } from "../../../Form/BDate";

interface ILoginForm {
  name: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Campo é obrigatório."),
});

const CategoryForm = () => {
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
    <Grid container>
      <Grid item xs={12}>
        <FormProvider {...methods}>
          <Box
            component="form"
            noValidate
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <BTextInput name="name" type="text" label="Nome" />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Salvar
            </Button>
          </Box>
        </FormProvider>
      </Grid>
    </Grid>
  );
};

export default CategoryForm;
