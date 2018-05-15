import { Course } from '../courses/course';
import { IAppState } from './IAppState';
import { FILTER_COURSES } from './actions';
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
      "name": "Building Apps with Angular and Reduxt (local)",
      "topic": "Angular and Redux"
    }
  ]

const initialState: IAppState =
{
  courses, filterCourses: courses
};

function filterCourses(state, action): IAppState
{
  return Object.assign({}, state,
  {
    filterCourses: state.courses.filter(course => course.name.toLowerCase() == action.searcText.toLowerCase()),
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