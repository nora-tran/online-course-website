type RouteProps = {
  title: string;
  path: string;
};

export const PathName = {
  HOMEPAGE: '/',
  ALL_COURSES: '/courses',
};

export const Routes: RouteProps[] = [
  { title: 'Home', path: PathName.HOMEPAGE },
  { title: 'Courses', path: PathName.ALL_COURSES },
];

export const SCHOOL_NAME = 'Sample School';
