import axios from "axios";
import { createApiKeyMiddleware } from "../../middleware/apikey.js";

const apiUrl = "api.myquran.com/v2";

export default (app) => {
  // :feature akan menangkap kata setelah /api/islami/ (misal: "quran", "sholat", "cal" dll.)
  // :subpath* akan menangkap SEMUA sisa URL setelahnya
  app.all("/api/islami")
        if (!text) {
        return res.status(400).json({
          status: false,
          error: "Missing required parameter",
          message: "The 'text' parameter is required",
        })
      }
  
  app.all("/api/islami/:feature*", createApiKeyMiddleware(), async (req, res) => {
    const feature = req.params.feature;
    const subpath = req.params[0] || ''; 
    
    const fullPath = `/${feature}${subpath}`;
    
    const { ...queryParams } = req.query;
    try {
      const options = {
        method: req.method,
        url: `https://${apiUrl}${fullPath}`,
        params: queryParams,
        data: req.body,
        headers: {
          ...req.headers,
          host: new URL(`https://${apiUrl}`).host,
        }
      };
      delete options.headers['content-length'];
      delete options.headers['x-vercel-forwarded-for'];
      const apiResponse = await axios(options);
      res.status(apiResponse.status).json(apiResponse.data);
    } catch (error) {
      const status = error.response?.status || 500;
      const data = error.response?.data || {
        status: false,
        error: "Error calling external API",
        message: error.message,
      };
      res.status(status).json(data);
    }
  });
};