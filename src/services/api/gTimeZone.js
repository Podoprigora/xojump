import axios from 'axios';

// Google API Key
const gTimeZoneApi = 'AIzaSyCFi2Xs6dxq2djGI3fDRpVRXMjiMMFNWEg';

// TimeZone docs: https://developers.google.com/maps/documentation/timezone/overview
export const getTimestampByPosition = async (coordinates = []) => {
    const coordinatesString = coordinates.join(',');
    const unixTimestamp = Math.floor(new Date().getTime() / 1000);

    const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${coordinatesString}&timestamp=${unixTimestamp}&key=${gTimeZoneApi}`;

    const { data } = await axios.get(url);

    if (data?.rawOffset) {
        return (unixTimestamp + data.rawOffset + data.dstOffset) * 1000;
    }

    return null;
};
