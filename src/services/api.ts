import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACK_URL;

export async function updateFilms() {
  try {
    const response = await axios.post(`${BASE_URL}/films/update`, {});
    return response;
  } catch (error: any) {
    return error.response;
  }
}

export async function getPageFilms(page: number) {
  try {
    const response = await axios.get(`${BASE_URL}/films?page=${page}`);
    return response;
  } catch (error: any) {
    return error.response;
  }
}

export async function getAllFilms() {
  try {
    const response = await axios.get(`${BASE_URL}/films`);
    return response;
  } catch (error: any) {
    return error.response;
  }
}
