import React, { useState } from 'react';
import './FormAddLecturer.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, MenuItem, Select } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { addCategory } from 'pages/Management/utils';

export default function AddLecturerForm({ open, onClose, onSubmit }) {
  const [data, setData] = useState({
    username: '',
    password: '',
    fullName: '',
    email: '',
    address: '',
    phone: '',
    description: '',
    errors: {},
  });
  const handleClose = () => {
    onClose(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    switch (true) {
      case data.username === '':
        errors.username = 'require';
      case data.password === '':
        errors.password = 'require';
      case data.fullName === '':
        errors.fullName = 'require';
      case data.email === '':
        errors.email = 'require';
      case data.address === '':
        errors.address = 'require';
      case data.description === '':
        errors.description = 'require';
      case data.phone === '':
        errors.phone = 'require';
        setData({ ...data, errors: errors });
        break;

      default:
        const a = data;
        delete a.errors;
        onSubmit(a);
        onClose(false);
        break;
    }
    return false;
  };
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">New Category</DialogTitle>
          <DialogContent>
            {/* {errors.categoryName && <span style={{ color: 'red' }}>*</span>} */}

            <Grid container>
              <Grid item xs={6}>
                {data.errors && data.errors.username && (
                  <span className="error">*</span>
                )}
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Username"
                  type="text"
                  fullWidth
                  value={data.username}
                  onChange={(e) => {
                    setData({
                      ...data,
                      username: e.target.value,
                      errors: { ...data.errors, username: undefined },
                    });
                  }} // {...register('categoryName', {
                  //   required: true,
                  // })}
                />
              </Grid>

              <Grid item xs={6}>
                {data.errors && data.errors.password && (
                  <span className="error">*</span>
                )}
                <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  label="Password"
                  type="text"
                  fullWidth
                  value={data.password}
                  onChange={(e) => {
                    setData({
                      ...data,
                      password: e.target.value,
                      errors: { ...data.errors, password: undefined },
                    });
                  }} // {...register('categoryName', {
                  //   required: true,
                  // })}
                />
              </Grid>
              <Grid item xs={6}>
                {data.errors && data.errors.fullName && (
                  <span className="error">*</span>
                )}
                <TextField
                  autoFocus
                  margin="dense"
                  id="fullName"
                  label="Full Name"
                  type="text"
                  fullWidth
                  value={data.fullName}
                  onChange={(e) => {
                    setData({
                      ...data,
                      fullName: e.target.value,
                      errors: { ...data.errors, fullName: undefined },
                    });
                  }} // {...register('categoryName', {
                  //   required: true,
                  // })}
                />
              </Grid>
              <Grid item xs={6}>
                {data.errors && data.errors.email && (
                  <span className="error">*</span>
                )}
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                  value={data.email}
                  onChange={(e) => {
                    setData({
                      ...data,
                      email: e.target.value,
                      errors: { ...data.errors, email: undefined },
                    });
                  }} // {...register('categoryName', {
                  //   required: true,
                  // })}
                />
              </Grid>
              <Grid item xs={6}>
                {data.errors && data.errors.address && (
                  <span className="error">*</span>
                )}
                <TextField
                  autoFocus
                  margin="dense"
                  id="address"
                  label="Address"
                  type="address"
                  fullWidth
                  value={data.address}
                  onChange={(e) => {
                    setData({
                      ...data,
                      address: e.target.value,
                      errors: { ...data.errors, address: undefined },
                    });
                  }} // {...register('categoryName', {
                  //   required: true,
                  // })}
                />
              </Grid>
              <Grid item xs={6}>
                {data.errors && data.errors.phone && (
                  <span className="error">*</span>
                )}
                <TextField
                  autoFocus
                  margin="dense"
                  id="phone"
                  label="Phone"
                  type="phone"
                  fullWidth
                  value={data.phone}
                  onChange={(e) => {
                    setData({
                      ...data,
                      phone: e.target.value,
                      errors: { ...data.errors, phone: undefined },
                    });
                  }} // {...register('categoryName', {
                  //   required: true,
                  // })}
                />
              </Grid>
              <Grid item xs={6}>
                {data.errors && data.errors.description && (
                  <span className="error">*</span>
                )}
                <TextField
                  autoFocus
                  margin="dense"
                  id="description"
                  label="Description"
                  type="description"
                  fullWidth
                  value={data.description}
                  onChange={(e) => {
                    setData({
                      ...data,
                      description: e.target.value,
                      errors: { ...data.errors, description: undefined },
                    });
                  }} // {...register('categoryName', {
                  //   required: true,
                  // })}
                />
              </Grid>
            </Grid>

            {/* {errors.level && <span style={{ color: 'red' }}>*</span>} */}
            {/* <Select {...register('level', { required: true })}> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              OK
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
