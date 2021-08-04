import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MenuItem, Select } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { addCategory } from 'pages/Management/utils';

export default function FormDialog({ open, onClose, onSubmit, defaultValue }) {
  const [data, setData] = useState({
    categoryName: '',
    level: 'WEB',
  });

  console.log(defaultValue);

  useEffect(() => {
    setData({ ...data, ...defaultValue });
  }, [defaultValue.categoryName]);

  const handleClose = () => {
    onClose(false);
  };
  const handleSubmit = () => {
    if (data.categoryName === '') {
      setData({ ...data, errors: { categoryName: 'required' } });
      console.log(data.errors);
    } else {
      console.log(data);
      onSubmit(data);
    }
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
        <DialogTitle id="form-dialog-title">Update Category</DialogTitle>
        <form>
          <DialogContent>
            {/* {errors.categoryName && <span style={{ color: 'red' }}>*</span>} */}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Course name"
              type="text"
              fullWidth
              value={data.categoryName}
              defaultValue={defaultValue.categoryName}
              onChange={(e) => {
                setData({
                  ...data,
                  categoryName: e.target.value,
                  errors: undefined,
                });
              }}
              // {...register('categoryName', {
              //   required: true,
              // })}
            />
            {/* {errors.level && <span style={{ color: 'red' }}>*</span>} */}
            {/* <Select {...register('level', { required: true })}> */}
            <Select
              defaultValue={defaultValue.level}
              onChange={(e) => {
                setData({ ...data, level: e.target.value });
              }}
            >
              <MenuItem value="WEB" selected>
                Web
              </MenuItem>
              <MenuItem value="MOBILE">Mobile</MenuItem>
            </Select>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
