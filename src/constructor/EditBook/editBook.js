import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField, DeleteForeverIcon } from '@mui/material';
import { grey } from '@mui/material/colors';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const bookObject = {
  title: "",
  excerpt: "",
  ISBN: "",
  category: "",
  subcategory: "",
  reviews: ""

}
export default function BoxComponent() {
  const [model, setmodel] = useState(bookObject)
  const [booklist, setbooklist] = useState([])
  const [edit, setEdit] = useState(false)

  const changeHandler = (e) => {
    const value = e.target.value
    setmodel(model => ({
      ...model,
      [e.target.name]: value
    }))
  }
  console.log(model)

  const Addbook = () => {
    if(edit){
const updateBookList  = booklist.map((row)=>
row.id === model.id? model : row)

setbooklist(updateBookList)
setEdit(false)
setmodel(bookObject)
    }
    else{
    let listitem = booklist;
    const item = {
      id: booklist.length,
      ...model,
    }
    listitem = [...booklist, item]
    setbooklist(listitem)
    ClearData()
  }
  }
  const ClearData = () => {
    setmodel(bookObject)
  }
  const deleteRow = (id) => {
    const filtered = booklist.filter(item => item.id != id)
    setbooklist(filtered)
  }

  //edit row
  const editRow = (data) => {
    setmodel(data)
    setEdit(true)
  }

  return (
    <>
      <Box sx={{ m: 2, p: 2, border: '1px solid grey' }}>
        <TextField label="title" name="title" variant="outlined" onChange={changeHandler} fullWidth sx={{ me: 2, mb: 2 }} value={model.title} />
        <TextField label="excerpt" name="excerpt" variant="outlined" onChange={changeHandler} fullWidth sx={{ me: 2, mb: 2 }} value={model.excerpt} />
        <TextField label="ISBN" name="ISBN" variant="outlined" onChange={changeHandler} fullWidth sx={{ me: 2, mb: 2 }} value={model.ISBN} />
        <TextField label="category" name="category" variant="outlined" onChange={changeHandler} fullWidth sx={{ me: 2, mb: 2 }} value={model.category} />
        <TextField label="subcategory" name="subcategory" variant="outlined" onChange={changeHandler} fullWidth sx={{ me: 2, mb: 2 }} value={model.subcategory} />
        <TextField label="reviews" name="reviews" variant="outlined" onChange={changeHandler} fullWidth sx={{ me: 2, mb: 2 }} value={model.reviews} />
        <Box textAlign="center">

          <Button variant="contained" color="success" onClick={Addbook}>{edit ? "Update" : "Submit"}</Button>
          <Button variant="contained" sx={{ ml: 3 }} onClick={ClearData}>Clear</Button>

        </Box>
      </Box>
      <Box sx={{ m: 2, p: 2, border: "1px solid grey" }}>
        <table style={{ width: "100%" }}>
          <tr style={{ background: "grey" }}>
            <th style={{ textAlign: "right" }}>title</th>
            <th style={{ textAlign: "center" }}>excerpt</th>
            <th style={{ textAlign: "left" }}>ISBN</th>
            <th style={{ textAlign: "left" }}>category</th>
            <th style={{ textAlign: "left" }}>subcategory</th>
            <th style={{ textAlign: "left" }}>reviews</th>
            <th style={{ textAlign: "left" }}>Actions</th>

          </tr>

          {booklist && booklist.map((row, index) =>
            <tr>
              <td>{row.title}</td>
              <td>{row.excerpt}</td>
              <td>{row.ISBN}</td>
              <td>{row.category}</td>
              <td>{row.subcategory}</td>
              <td>{row.reviews}</td>
              <td><BorderColorOutlinedIcon style={{ color: "green", cursor: "pointer" }} onClick={() => editRow(row)} />
                <DeleteForeverOutlinedIcon style={{ color: "red", cursor: "pointer", margin: 2 }} onClick={() => deleteRow(row.id)} /></td>
              <td></td>
            </tr>
          )}
        </table>
      </Box>
    </>
  );
}