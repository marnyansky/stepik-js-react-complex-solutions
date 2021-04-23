// https://stepik.org/lesson/50573/step/5?thread=solutions&unit=28958
// Return rating and name from every object in apiResult - array of objects (https://gist.github.com/kmcgrady/961cfaf379eb37fce01b64e1ef1a8345)
const businessNamesAndRatings = apiResult =>
    apiResult.results.map(x => ({rating: x.rating, name: x.name}));