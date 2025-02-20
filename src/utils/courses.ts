export type Course = Partial<{
  id: string;
  name: string;
  description: string;
  code: string;
  duration: string;
  eligibility: string;
  qualification: string;
  assessments: string[];
  overview: string;
  skills: string[];
  careers: string[];
  purposes: string[];
  category: string;
  imageUrl: string;
}>;

export const placeholderCourse: Course = {
  assessments: [],
  careers: [],
  category: '',
  code: '',
  description: '',
  duration: '',
  eligibility: '',
  id: '',
  imageUrl: '',
  name: '',
  overview: '',
  purposes: [],
  qualification: '',
  skills: [],
};

const getAllCourses = (): Course[] => {
  // Import metadata files for courses
  const metadataFiles = import.meta.glob('../data/courses/**/metadata.json', {
    eager: true,
  });

  // Import image files (both .jpg and .png)
  const imageFiles = import.meta.glob(['../data/courses/**/image.jpg', '../data/courses/**/image.png'], {
    eager: true,
  });

  return Object.entries(metadataFiles).map(([path, metadata]) => {
    // Extract the folder name from the path (assumed to be the second-to-last part)
    const folderName = path.split('/').slice(-2, -1)[0];

    // Find the corresponding image file based on the folder name
    const imagePath = Object.keys(imageFiles).find((imgPath) =>
        imgPath.includes(`/${folderName}/`)
    );

    const imageUrl = imagePath?.slice(2);

    // Return the course object with metadata and image URL
    return {
      ...(metadata as Course),
      id: folderName,
      imageUrl: imageUrl ? `/src${imageUrl}` : '',
    };
  });
};


export const courses: Course[] = getAllCourses();

export const getCourseById = (courseId: string) => {
  return courses.find((course) => course.id === courseId);
};
