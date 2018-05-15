import { Course } from '../courses/course';
import { IAppState } from './IAppState';

const initialState: IAppState =
{
    courses:
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
};

export function reducer(state = initialState, action)
{
    return state;
}