import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import JSZip from "jszip";

const UploadFile = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const inputfile = e.target.files[0];

    if (inputfile) {
      if (inputfile.type === "application/zip") {
        // Create a new JSZip instance
        const zip = new JSZip();

        try {
          // Load the ZIP file
          const zipData = async () => {
            await zip.loadAsync(inputfile);
          };

          // Check if the ZIP file is password-protected
          if (zipData.password) {
            setFile(null);
            alert("The selected ZIP file is password-protected.");
          } else {
            if (inputfile.size <= 50 * 1024 * 1024) {
              // 5MB in bytes
              setFile(inputfile);
            } else {
              setFile(null);
              alert("File size must be 50MB or less.");
            }
            setFile(inputfile);
          }
        } catch (error) {
          setFile(null);
          alert("Error reading the ZIP file.");
        }
      } else {
        setFile(null);
        alert("Please select a ZIP file.");
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    propData.setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${url}`, {
      method: "POST",
      header: { "Content-Type": "multipart/form-data" },
      body: formData,
    });
    console.log(response);
    if (response.ok) {
      alert(
        "File uploaded. Thankyou for contributing to JU Nexus. -Team Edgerunners "
      );

      props.setVerified(false);
    } else {
      alert("Some error ocurred. Please try again.");
    }
    propData.setLoading(false);
  };
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div>
        <p className="p-12  text-left text-4xl font-extrabold  ">
          Upload Files
        </p>
      </div>
      <div className="flex flex-col p-4 gap-8 px-12 items-center justify-center">
        <div>
          Only .zip files accepted!
          <p>Max Size: 50MB.</p>
        </div>
        <div className="flex items-center justify-center">
          <label className="file-input-container grid grid-cols-1 md:w-full items-center justify-center p-6 py-12 border-2 border-black rounded-md text-xl text-center">
            {file ? `Selected file: ${file.name}` : "Choose File"}
            <input
              className="hidden  items-center justify-center p-6 text-lg gap-6 border-2 border-black rounded-md file-input "
              type="file"
              accept=".zip,.rar,.7zip"
              placeholder="+"
              onChange={handleFileChange}
            />{" "}
          </label>
        </div>
        <div className="flex justify-center">
          <button
            disabled={!file}
            type="submit"
            className={`flex  items-center justify-center ml-4 p-2 w-[50%] md:w-[10%] bg-blue-200 rounded-xl cursor-pointer  ${
              file
                ? "hover:scale-105 transition hover:ease-in-out shadow-lg border-2 border-white hover:border-black text-black"
                : ""
            } `}
          >
            {file && <p>Submit</p>}
          </button>
        </div>
      </div>
    </form>
  );
};

export default UploadFile;
