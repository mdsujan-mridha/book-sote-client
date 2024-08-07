

import { AccountTree, AttachMoney, Description, Spellcheck } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getSingleSellBookDetails, updateProduct } from '../Action/sellBookAction';
import { toast } from 'react-toastify';
import { UPDATE_SELL_BOOK_RESET } from '../Constant/sellBookConstant';

const UpdateProduct = () => {

    const categories = [
        "Romance",
        "History",
        "Philosophy",
        "Poetry",
        "Memoir",
        "Fantasy",
        "Science Fiction",
    ];
    const { id } = useParams();
    const dispatch = useDispatch();
    const { book, error } = useSelector((state) => state.book);
    const { loading, error: updateError, isUpdate } = useSelector((state) => state.updateSellBook);

    const navigate = useNavigate()
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [oldImages, setOldImages] = useState([]);
    const productId = id;

    console.log(productId);

    useEffect(() => {

        if (book && book?._id !== productId) {
            dispatch(getSingleSellBookDetails(productId))
        } else {
            setName(book?.title);
            setDescription(book?.description);
            setPrice(book?.price);
            setCategory(book?.category);
            setOldImages(book?.images);
        }
        if (error) {
            toast.error(error)
            dispatch(clearErrors());
        }
        if (updateError) {
            toast.error(updateError);
            dispatch(clearErrors());
        }
        if (isUpdate) {
            toast.success("Update product successful");
            navigate("/admin/dashboard")
            dispatch({ type: UPDATE_SELL_BOOK_RESET });
        }

    }, [book, error, updateError, dispatch, isUpdate, navigate, productId]);

    console.log(book);
    // update product handler 
    const updateProductHandlerSubmit = (e) => {
        e.preventDefault();
        const requestBody = {
            title: name,
            description: description,
            price: price,
            author: author,
            category: category,
            images: images, // To store Base64 encoded images
        };
        dispatch(updateProduct(productId, requestBody));

    }
    const updateProductImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);
        setOldImages([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                    setImages((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });
    };



    return (
        <Fragment>
            {/* <MetaData title="Create Product" /> */}
            <div className="dashboard">
                <Sidebar />
                <div className="newProductContainer">
                    <form
                        className="createProductForm"
                        encType="multipart/form-data"
                        onSubmit={updateProductHandlerSubmit}
                    >
                        <h1>Update Product</h1>
                        <div>
                            <Spellcheck />
                            <input
                                type="text"
                                placeholder="Product Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <Spellcheck />
                            <input
                                type="text"
                                placeholder="Author"
                                required
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </div>
                        <div>
                            <AttachMoney />
                            <input
                                type="number"
                                placeholder="Price"
                                required
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        <div>
                            <Description />
                            <textarea
                                placeholder="Product Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                cols="30"
                                rows="1"
                            ></textarea>
                        </div>
                        <div>
                            <AccountTree />
                            <select onChange={(e) => setCategory(e.target.value)}>
                                <option value="">Choose Category</option>
                                {categories.map((cate) => (
                                    <option key={cate} value={cate}>
                                        {cate}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div id="createProductFormFile">
                            <input
                                type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={updateProductImagesChange}
                                multiple
                            />
                        </div>

                        <div id="createProductFormImage">
                            {oldImages &&
                                oldImages.map((image, index) => (
                                    <img key={index} src={image.url} alt="Old Product Preview" />
                                ))}
                        </div>

                        <div id="createProductFormImage">
                            {imagesPreview.map((image, index) => (
                                <img key={index} src={image} alt="Product Preview" />
                            ))}
                        </div>

                        <Button
                            id="createProductBtn"
                            type="submit"
                            disabled={loading ? true : false}
                        >
                            Create
                        </Button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default UpdateProduct;