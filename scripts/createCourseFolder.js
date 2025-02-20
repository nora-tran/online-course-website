import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Function to parse arguments (name=value format)
function parseArgs(args) {
  const parsed = {};
  args.forEach((arg) => {
    const [key, value] = arg.split('=');
    if (key && value !== undefined) {
      parsed[key] = value;
    }
  });
  return parsed;
}

// Get all arguments except the first two (node and script name)
const args = process.argv.slice(2);

// Get folder name (the first positional argument)
const folderName = args[0];

// Parse optional name and description
const { name = '', description = '' } = parseArgs(args.slice(1));

// Check if folder name is provided
if (!folderName) {
  console.error('Error: Course name is required.');
  process.exit(1); // Exit the process with an error code
}

// Use path relative to the project root (not the script directory)
const folderPath = path.resolve('src', 'data', 'courses', folderName);
const metadata = {
  name: name,
  description: description,
  assessments: [],
  careers: [],
  category: '',
  code: '',
  duration: '',
  eligibility: '',
  id: '',
  imageUrl: '',
  overview: '',
  purposes: [],
  qualification: '',
  skills: [],
};

// Function to create the folder and write the metadata.json file
function createCourseFolder() {
  // Ensure the folder structure exists
  fs.mkdirSync(folderPath, { recursive: true });

  // Write the metadata to a json file inside the folder
  fs.writeFileSync(
    path.join(folderPath, 'metadata.json'),
    JSON.stringify(metadata, null, 2),
    'utf8'
  );

  console.log(`Course folder and metadata created at ${folderPath}`);
}

createCourseFolder();
