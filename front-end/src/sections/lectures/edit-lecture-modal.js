import React, { useState, useEffect } from "react";
import { Button, Modal, TextField, Paper, Typography, Box, Chip } from "@mui/material";
import { updateLectureById } from "src/api/lecture-service";

const MyModal = ({ open, setOpen, lecture, fetchLectureDetails }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    hours: "",
    videoUrl: "",
    text: "",
    downloadLinks: [],
    linkInput: "",
  });

  // Initialize form data with the provided lecture values when the modal opens
  useEffect(() => {
    if (lecture) {
      setFormData(lecture);
    }
  }, [lecture]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLinkInputChange = (event) => {
    setFormData({ ...formData, linkInput: event.target.value });
  };

  const handleAddLink = () => {
    if (formData.linkInput.trim() !== "") {
      setFormData({
        ...formData,
        downloadLinks: [...formData.downloadLinks, formData.linkInput],
        linkInput: "",
      });
    }
  };

  const handleDeleteLink = (index) => {
    const updatedLinks = [...formData.downloadLinks];
    updatedLinks.splice(index, 1);
    setFormData({ ...formData, downloadLinks: updatedLinks });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateLectureById(lecture.id, {
      ...formData,
    });
    console.log(formData);
    fetchLectureDetails();
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "white",
          boxShadow: 24,
          padding: "25px",
          p: 4,
        }}
      >
        <Typography variant="h4" color="initial">
          Editar Aula
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Duration (hours)"
            name="hours"
            value={formData.hours}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Video URL"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
          />
          <Typography variant="subtitle1" gutterBottom>
            Download Links:
          </Typography>
          <div>
            {formData.downloadLinks.map((link, index) => (
              <Chip
                key={index}
                label={link}
                style={{ marginRight: "8px" }}
                onDelete={() => handleDeleteLink(index)} // Call handleDeleteLink with the index
              />
            ))}
          </div>
          <TextField
            fullWidth
            label="Add Link"
            value={formData.linkInput}
            onChange={handleLinkInputChange}
            margin="normal"
          />
          <Button variant="outlined" color="primary" onClick={handleAddLink}>
            Add
          </Button>
          <Box display="flex" justifyContent="flex-end">
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Modal>
  );
};

export default MyModal;
