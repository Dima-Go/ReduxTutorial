import { Course } from '../courses/course';
import { IAppState } from './IAppState';
import { FILTER_COURSES } from '../courses/course.action';
import { stat } from 'fs';

const courses =
[
    {
      "id": 1,
      "name": "Building Apps with React (local)",
      "topic": "ReactJS"
    },
    {
      "id": 2,
      "name": "Building Apps with Angulart (local)",
      "topic": "AngularJS"
    },
    {
      "id":3,
      "name": "Building Apps with Angular and Redux (local)",
      "topic": "Angular and Redux"
    }
  ]

const initialState: IAppState =
{
  courses,
  filteredCourses: courses
};

function filterCourses(state, action): IAppState
{
  return Object.assign({}, state,
  {
    filteredCourses: state.courses.filter(course => course.name.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1),
  });
}

export function reducer(state = initialState, action)
{
  switch(action.type)
  {
    case FILTER_COURSES:
      return filterCourses(state, action);
    default:
      return state;
  }
}