// 1.8 Studio: Advanced Practice Problems (https://stepik.org/lesson/50573/step/7?discussion=3757116&thread=solutions&unit=28958)
// Getting average rating

// My function:
const averageRating = apiResult => {
    let allRatings = 0;
    let count = 0;
    for (let result of apiResult.results) {
        try {
            allRatings += (parseFloat(result.rating.valueOf()));
            count++;
        } catch (e) {
            console.log(e.message);
        }
    }
    return allRatings / count;
}

// Testing
const apiResult = {/* copy here API result object from https://gist.github.com/kmcgrady/961cfaf379eb37fce01b64e1ef1a8345 */}
console.log(averageRating(apiResult));

// =====
// Alternative version (it assumes that all results have rating):
const averageRating = ({ results }) => results.reduce((sum, {rating}) => sum + rating, 0) / results.length;