// import multer from "multer";

// const storage = multer.diskStorage({});
// const upload = multer({ storage });

// export default upload;

import multer from "multer";

const storage = multer.diskStorage({}); // no destination so multer keeps file in memory
const upload = multer({ storage });

export default upload;

