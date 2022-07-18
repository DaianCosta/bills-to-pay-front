import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
} from "@mui/material";
import { Container } from "@mui/system";
import type { NextPage } from "next";
import React from "react";
import Layout from "../../components/Layout";
import CategoryForm from "../../components/Functionalities/Category/Form";

const Category: NextPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Chart */}
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Button variant="outlined" onClick={handleClickOpen}>
              Open alert dialog
            </Button>
          </Paper>
        </Grid>
      </Container>
      <Dialog open={open} aria-labelledby="alert-dialog-title" fullWidth={true}>
        <DialogTitle id="alert-dialog-title">Cadastro de Categoria</DialogTitle>
        <DialogContent dividers>
          <CategoryForm />
        </DialogContent>
      </Dialog>
    </Layout>
  );
};
export default Category;
