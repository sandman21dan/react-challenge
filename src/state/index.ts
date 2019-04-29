import { createAction, Action } from 'redux-actions';
import { combineReducers } from 'redux';

export interface Post {
  userId : number;
  id: number;
  title: string;
  body: string;
}

export interface AppAverages {
  mean: number;
  median: number;
  mode: number[];
}

export interface StatePosts {
  fetchingPosts: boolean;
  data: Post[];
  failure: boolean;
}

export interface AppState {
  counter: number;
  numbers: number[];
  inputField: number;
  averages: AppAverages;
  posts: StatePosts;
}

const defaultState: AppState = {
  counter: 0,
  numbers: [12, 23, 24, 45, 32],
  inputField: 1,
  averages: {
    mean: 0,
    median: 0,
    mode: [0],
  },
  posts: {
    fetchingPosts: false,
    data: [],
    failure: false,
  }
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INPUT_FIELD_CHANGE = 'INPUT_FIELD_CHANGE';
const ADD_TO_NUMBERS = 'ADD_TO_NUMBERS';
const RESET_NUMBERS = 'RESET_NUMBERS';
const SORT = 'SORT';
const MEAN_AVERAGE = 'MEAN_AVERAGE';
const MEDIAN_AVERAGE = 'MEDIAN_AVERAGE';
const MODE_AVERAGE = 'MODE_AVERAGE';

const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';


export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const addToNumbers = createAction(ADD_TO_NUMBERS, (numbers: number) => numbers);
export const inputFieldChange = createAction(INPUT_FIELD_CHANGE, (entry: number) => entry);
export const resetNumberList = createAction(RESET_NUMBERS, (numbers: number) => numbers);
export const sort = createAction(SORT);
export const meanAverage = createAction<number[]>(MEAN_AVERAGE);
export const medianAverage = createAction<number[]>(MEDIAN_AVERAGE);
export const modeAverage = createAction<number[]>(MODE_AVERAGE);

export const fetchPosts = createAction(FETCH_POSTS);
export const fetchPostsSuccess = createAction<Post[]>(FETCH_POSTS_SUCCESS);
export const fetchPostsFailure = createAction(FETCH_POSTS_FAILURE);

export const counterReducer = (counter: number = defaultState.counter, action: Action<void>) => {
  switch (action.type) {
    case INCREMENT:
      return counter + 1;
    case DECREMENT:
      return counter - 1;
    default:
      return counter;
  }
}

export const inputFieldReducer = (inputField: number = defaultState.inputField, action: Action<number>): number => {
  switch (action.type) {
    case INPUT_FIELD_CHANGE:
      return action.payload || 0;
    default:
      return inputField;
  }
}

export const numbersReducer = (numbers: number[] = defaultState.numbers, action: Action<number>): number[] => {
  switch (action.type) {
    case ADD_TO_NUMBERS:
      if (action.payload) {
        return [...numbers, action.payload];
      }
      return numbers;
    case RESET_NUMBERS:
      return defaultState.numbers;
    case SORT:
      const sorted = numbers.slice().sort((a, b) => (a - b));
      return sorted;
    default:
      return numbers;
  }
}

export const averagesReducer = (averages: AppAverages = defaultState.averages, action: Action<number[]>): AppAverages => {
  const numbers = action.payload;
  switch (action.type) {
    case MEAN_AVERAGE:
      if (numbers) {
        const total = numbers.reduce((a, b) => a += b);
        const mean = total / numbers.length;
        return {
          ...averages,mean,
        }
      }
      return averages;
    case MEDIAN_AVERAGE:
      if (numbers) {
        const sorted = numbers.slice().sort((a, b) => (a - b));
        const half = Math.floor(sorted.length / 2);
        let median = 0;
        if (sorted.length % 2) {
          median = sorted[half];
        } else {
          median = (sorted[half - 1] + sorted[half]) / 2;
        }
        return { ...averages, median }
      }
      return averages;
    case MODE_AVERAGE:
      if (numbers) {
        const appearances = {};
        const mode = [];
        numbers.forEach((num) => {
          appearances[num] = appearances[num] ? appearances[num] + 1 : 1;
        });

        let max = 0;

        for (const key in appearances) {
          if (appearances[key] > max) {
            max = appearances[key];
          }
        }
        for (const key in appearances) {
          if (appearances[key] === max) {
            mode.push(parseInt((key), 10));
          }
        }
        return { ...averages, mode }
      }
    default:
      return averages;
  }
}

export const postsReducer = (posts: StatePosts = defaultState.posts, action: Action<Post[]> ) : StatePosts => {
  switch(action.type){
    case FETCH_POSTS_SUCCESS:
      if(action.payload){
        return {...posts, fetchingPosts: false, data: action.payload}
      }
    case FETCH_POSTS:
      return {...posts, fetchingPosts: true}
    default: 
      return posts;
  }

}

export default combineReducers({
  counter: counterReducer,
  inputField: inputFieldReducer,
  numbers: numbersReducer,
  averages: averagesReducer,
  posts: postsReducer, 
});

