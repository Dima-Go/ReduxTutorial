export const FILTER_COURSES = 'courses/FILTER';

export function filterCourses(searcText: string)
{
    return {
        type: FILTER_COURSES,
        searcText,
    };
}