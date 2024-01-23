import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const getFileNameFromUrl = fileURLToPath;

export const getDirNameFromUrl = (url) => dirname(fileURLToPath(url));
