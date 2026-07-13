import { v2 as cloudinary } from "cloudinary";
import { ApiError } from "./ApiError";

const deleteFromCloudinary = async (imageUrl) => {
  try {
    if (!imageUrl) return;

    const publicId = imageUrl.split("/").slice(-1).join("/").split(".")[0];

    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    throw new ApiError(500, "error deleting image from cloudinary");
  }
};

export { deleteFromCloudinary };
