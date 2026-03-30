// multer is a middleware for handling multipart/form-data, which is primarily used for uploading files.
import multer from "multer";

export const upload = multer({ storage: multer.diskStorage({}) });
