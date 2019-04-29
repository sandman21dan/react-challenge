import { numbersReducer, decrement, increment, addToNumbers, sort, meanAverage, averagesReducer, medianAverage, modeAverage, postsReducer, fetchPosts, counterReducer, fetchPostsSuccess } from './';

describe('numbers reducer', () => {
  it('Increases the counter', () => {
    expect(counterReducer(10, increment())).toEqual(11);
  });

  it('Adds to numbers store', () => {
    expect(numbersReducer([], addToNumbers(20) as any)).toEqual([20]);
  });

  it('Adds to numbers store', () => {
    expect(numbersReducer([20, 30, 40], addToNumbers(50) as any)).toEqual([20, 30, 40, 50]);
  });

  it('Decreases the counter', () => {
    expect(counterReducer(9, decrement())).toEqual(8);
  });
});

describe('numbers reducer', () => {
  it('sorts the numbers array', () => {
    const numbers = [12, 23, 76, 11, 5, 17];
    const expectedNumbers = [5, 11, 12, 17, 23, 76]
    expect(numbersReducer(numbers, sort())).toEqual(expectedNumbers);
  });
});

describe('averages reducer', () => {
  it('finds the mean of the numbers array', () => {
    const initialState = { mean: 0, median: 0, mode: [0] } ;
    const expectedAverage = { mean: 24, median: 0, mode: [0] };
    expect(averagesReducer(initialState, meanAverage([12, 23, 76, 11, 5, 17]))).toEqual(expectedAverage);
  });
  
  it('finds the mean of the numbers array', () => {
    const initialState = { mean: 0, median: 0, mode: [0] } ;
    const expectedAverage = { mean: 145 / 6, median: 0, mode: [0] }
    expect(averagesReducer(initialState, meanAverage([12, 23, 76, 11, 5, 18]))).toEqual(expectedAverage);
  });
  
  it('finds the median of the numbers array', () => {
    const initialState = { mean: 0, median: 0, mode: [0] };
    const expectedAverage = { mean: 0, median: 12, mode: [0] }
    expect(averagesReducer(initialState, medianAverage([12, 23, 76, 11, 5]))).toEqual(expectedAverage);
  });
  
  it('finds the median of the numbers array with even number of elements', () => {
    const initialState = { mean: 0, median: 0, mode: [0] };
    const expectedAverage = { mean: 0, median: 15, mode: [0] }
    expect(averagesReducer(initialState, medianAverage([12, 23, 76, 11, 5, 18]))).toEqual(expectedAverage);
  });
  
  it('finds the mode of the numbers array', () => {
    const initialState = { mean: 0, median: 0, mode: [0] };
    const expectedAverage = { mean: 0, median: 0, mode: [1] }
    expect(averagesReducer(initialState, modeAverage([12, 23, 76, 11, 5, 1, 1, 1]))).toEqual(expectedAverage);
  });

  it('finds the mode of the numbers array', () => {
    const initialState = { mean: 0, median: 0, mode: [0] };
    const expectedAverage = { mean: 0, median: 0, mode: [1, 2, 3] }
    expect(averagesReducer(initialState, modeAverage([12, 23, 76, 11, 5, 1, 1, 1, 2, 2, 2, 3, 3, 3]))).toEqual(expectedAverage);
  });
});

describe('posts reducer', () => {
  it('sets the fetchingPosts to true', () => {
    const initialState = {
      fetchingPosts: false,
      data: [],
      failure: false,
    };
    const expectedState = { fetchingPosts: true, data: [], failure: false };
    expect(postsReducer(initialState, fetchPosts())).toEqual(expectedState);
  });
  it('sets fetchingPosts to false and ', () => {
    const posts = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
    ]
    const initialState = {
      fetchingPosts: false,
      data: [],
      failure: false,
    };

    const expectedState = { fetchingPosts: false, data: posts, failure: false };
    expect(postsReducer(initialState, fetchPostsSuccess(posts))).toEqual(expectedState);
  });
});