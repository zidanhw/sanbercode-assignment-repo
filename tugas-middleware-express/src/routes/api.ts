import express, {Request, Response}from "express";
import multer from "multer";
import cloudinary from "../utils/cloudinary";

const router = express.Router();
const upload = multer({ dest : 'uploads/'})


router.post('/upload-single', upload.single('photo'), async (req: Request, res: Response) => {
    try {
        const result = await cloudinary.uploader.upload(req.file!.path);
        res.status(200).json({
            message: 'Photo uploaded succesfully.',
            url: result.secure_url
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to upload photo',
            error: (error as Error).message || 'An unknown error occurred.',
        })
    }
})

router.post('/upload-multiple', upload.array('photos', 10), async (req: Request, res: Response) => {
    if (!req.files || !Array.isArray(req.files)) {
      return res.status(400).json({ message: 'No files uploaded' });
    }
  
    try {
      const uploadPromises = req.files.map((file: Express.Multer.File) => {
        return cloudinary.uploader.upload(file.path);
      });
  
      const results = await Promise.all(uploadPromises);
      const urls = results.map(result => result.secure_url);
  
      res.status(200).json({
        message: 'Photos uploaded successfully',
        urls,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Failed to upload photos',
        error: (error as Error).message || 'An unknown error occurred.' ,
      });
    }
  });
  

export default router;
