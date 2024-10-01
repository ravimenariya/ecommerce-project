import React, { useEffect, useState } from 'react';
import { fetchProduct } from '../../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FiEdit2 } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { createProduct } from '../../redux/productSlice';
function Product() {
  const { handleSubmit, register } = useForm();
  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000, // Slightly wider for more spacing
    bgcolor: 'rgb(30 30 40)', // Darker background for a more subdued look
    color: 'white',
    borderRadius: '12px', // Rounded corners for a modern look
    boxShadow: '5px 5px 20px rgba(75,75,75,0.7),-5px -5px 20px rgba(75,75,75,0.7)', // Softer, more diffused shadow for better focus
    p: 4,
  };


  const { product } = useSelector((state) => state.product);

  const handleEdit = () => {
    setIsEdit(true)
    handleOpen()
  }
  const columns = [
    {
      field: 'image',
      headerName: 'Image',
      width: 120,
      renderCell: (params) => (
        <div>
          <img
            className="object-contain w-14"
            src={`http://localhost:3000/${params.value}`}
          />
        </div>
      ),
    },
    { field: 'name', headerName: 'Name', width: 100 },
    {
      field: 'price',
      headerName: 'Price(Rs.)',
      width: 150,
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 150
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 250,
    },
    {
      field: 'discountPrice',
      headerName: 'Discount Price(Rs.)',
      width: 120
    },
    {
      field: 'stock',
      headerName: 'Stock Avail.',
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div className="flex m-2 gap-2 cursor-pointer justify-around">
          <FiEdit2 size={26} onClick={handleEdit} className="text-blue-500" />

          <MdDeleteOutline size={26} className="text-red-500" />
        </div>
      ),
    },
  ];

  const onSubmit = async (data) => {
    console.log(data.discountPercentage);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('image', data.image[0]);
    formData.append('category', data.category);
    formData.append('stock', data.stock);
    formData.append('description', data.description);
    formData.append('discountPercentage', data.discountPercentage);
    console.log('formdata', formData);
    await dispatch(createProduct(formData));
    dispatch(fetchProduct());
    handleClose();
  };

  const handleButtonClick = () => {
    setIsEdit(false);
    handleOpen()
  }

  return (
    <div className="m-10">
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 px-6 py-2 rounded-sm my-4 text-white font-semibold"
      >
        Add Product
      </button>
      <Box sx={{ height: 400, width: '85%', display: 'flex', justifyContent: 'center' }}>
        <DataGrid
          rows={product}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          style={{ color: "black", backgroundColor: "rgb(100, 150, 200)" }}
        />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className='space-y-2  h-12  p-3 text-3xl mb-4'>Product Details</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-gray-300 block">Name</label>
                <input
                  className="input_field bg-gray-700 border border-gray-600 rounded-md p-3 text-white w-full focus:ring-2 focus:ring-blue-500 focus:outline-none h-10"
                  type="text"
                  {...register('name')}
                  placeholder="Enter name"
                />
              </div>

              {/* Price Field */}
              <div className="space-y-2">
                <label className="text-gray-300 block">Price</label>
                <input
                  className="input_field bg-gray-700 border border-gray-600 rounded-md p-3 text-white w-full focus:ring-2 focus:ring-blue-500 focus:outline-none h-10"
                  type="number"
                  {...register('price')}
                  placeholder="Enter price"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Category Field */}
              <div className="space-y-2">
                <label className="text-gray-300 block">Category</label>
                <input
                  className="input_field bg-gray-700 border border-gray-600 rounded-md p-3 text-white w-full focus:ring-2 focus:ring-blue-500 focus:outline-none h-10"
                  type="text"
                  {...register('category')}
                  placeholder="Enter category"
                />
              </div>

              {/* Stock Field */}
              <div className="space-y-2">
                <label className="text-gray-300 block">Stock</label>
                <input
                  className="input_field bg-gray-700 border border-gray-600 rounded-md p-3 text-white w-full focus:ring-2 focus:ring-blue-500 focus:outline-none h-10"
                  type="number"
                  {...register('stock')}
                  placeholder="Enter stock"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Image Field */}
              <div className="space-y-2">
                <label className="text-gray-300 block">Image</label>
                <input
                  className="input_field bg-gray-700 border border-gray-600 rounded-md p-3 text-white w-full focus:ring-2 focus:ring-blue-500 focus:outline-none h-10"
                  type="file"
                  {...register('image')}
                />
              </div>

              {/* Discount Percentage Field */}
              <div className="space-y-2">
                <label className="text-gray-300 block">Discount Percentage</label>
                <input
                  className="input_field bg-gray-700 border border-gray-600 rounded-md p-3 text-white w-full focus:ring-2 focus:ring-blue-500 focus:outline-none h-10"
                  type="number"
                  {...register('discountPercentage')}
                  placeholder="Enter discount percentage"
                />
              </div>
            </div>

            {/* Description Field */}
            <div className="space-y-2">
              <label className="text-gray-300 block">Description</label>
              <input
                type="textbox"
                className="input_field bg-gray-700 border border-gray-600 rounded-md p-3 text-white w-full focus:ring-2 focus:ring-blue-500 focus:outline-none h-10"
                {...register('description')}
                placeholder="Enter description"
              />
            </div>

            {/* Submit Button */}
            <button
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md w-full mt-4 text-white"
              type="submit"
            >
              {isEdit ? "Update Product" : "Add Product"}
            </button>
          </form>
        </Box>


      </Modal>
    </div>
  );
}

export default Product;
