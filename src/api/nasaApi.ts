const apiKey = import.meta.env.VITE_NASA_API_KEY;

interface PhotoOfTheDayData {
  title: string;
  url: string;
}

export const getPhotoOfTheDayData = async (): Promise<PhotoOfTheDayData> => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
  );
  return await response.json();
};
