import { useState } from "react";
import { ImageSchema, ImageType } from "@/schemas/product";
import CardWrapper from "../cardWrapper";
import Image from "next/image";
import { Upload } from "lucide-react";
import { IoColorPalette } from "react-icons/io5";

export const ImageUploader = ({
  addImage,
}: {
  addImage: (image: ImageType) => void;
}) => {
  const defaultState = {
    file: undefined,
    color: "#000000",
  };
  const [image, setImage] = useState<ImageType>(defaultState); // add a state for errors
  const [errors, setError] = useState<{ message: string | undefined }>({
    message: undefined,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setImage((prevImage) => ({ ...prevImage, [name]: value }));
  };

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      setImage((prevImage) => ({
        ...prevImage,
        file: files[0],
      }));
    }
  };

  const handleSubmit = () => {
    // Validate the image object using the ImageSchema
    const validationResult = ImageSchema.safeParse(image);
    setError({ message: undefined });
    if (validationResult.success) {
      // If the validation is successful, you can submit the image object to your server
      addImage(image);
      setImage(defaultState);
    } else {
      const message = validationResult.error.issues[0].message;
      if (message) {
        setError({ message });
      }
    }
  };

  return (
    <CardWrapper title="Upload Image" description="jpg*,png*,jpeg*">
      <div className="grid gap-2 mb-2">
        {image.file && (
          <Image
            alt="Product image"
            className="aspect-square w-full rounded-md object-cover"
            height="300"
            src={URL?.createObjectURL(image.file)}
            width="300"
          />
        )}
        {errors?.message && (
          <div style={{ color: "red" }}>{errors.message}</div>
        )}
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="relative flex aspect-square w-full items-center justify-center rounded-md border border-dashed  cursor-pointer">
          <Upload className="h-4 w-4 text-muted-foreground" />
          <span className="sr-only">Upload</span>
          <input
            type="file"
            name="url"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept="image/*"
            onChange={handleImage}
            required
          />
        </div>
        <div
          className="relative flex aspect-square w-full items-center justify-center rounded-md border border-dashed cursor-pointer"
          style={{ background: image?.color }}
        >
          <IoColorPalette className="size-4 text-muted-foreground" />
          <span className="sr-only">Color</span>
          <input
            type="color"
            name="color"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            value={image.color}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="border border-dashed cursor-pointer rounded-md p-2 d-center text-muted-foreground text-sm disabled:cursor-default disabled:opacity-50"
          onClick={handleSubmit}
          disabled={!image.file}
        >
          Add
        </button>
      </div>
    </CardWrapper>
  );
};

export default ImageUploader;
