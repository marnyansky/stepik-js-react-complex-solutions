// 1.8 Studio: Advanced Practice Problems (https://stepik.org/lesson/50573/step/6?discussion=3746065&thread=solutions&unit=28958)
// Filtering API results based on distance

// Pre-written function: produces the distance (in miles) between two earth coordinates
const earthDistance = (coord1, coord2) => {
    const RADIUS_OF_EARTH = 3961; // miles
    const lat1 = coord1.lat * Math.PI / 180;
    const lat2 = coord2.lat * Math.PI / 180;
    const lon1 = coord1.lng * Math.PI / 180;
    const lon2 = coord2.lng * Math.PI / 180;

    const dlon = lon2 - lon1;
    const dlat = lat2 - lat1;

    const a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) *
        Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return RADIUS_OF_EARTH * c;
}

// My function: shows results within 0.01 mile "from me"
const aroundMe = (apiResult, coord) =>
    apiResult.results.filter(x => earthDistance(coord, x.geometry.location) <= 0.01);

// Testing
const apiResult = {/* copy here API result object from https://gist.github.com/kmcgrady/961cfaf379eb37fce01b64e1ef1a8345 */}
console.log(aroundMe(apiResult, {lat: -33.8671207, lng: 151.2016385}));