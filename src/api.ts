import axios from "axios";

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {

  getAllAlbums: async () => {
    let response = await http.get('/albums')
    return response.data
  },
  
  getAlbumDetails: async (albumId : number) => {
    let response = await http.get(`/albums/${albumId}`)
    return response.data
  },

  getAllPhotos: async (albumId : number) => {
    let response = await http.get(`/albums/${albumId}/photos`)
    return response.data
  },

  getPhotoDetails: async (albumId : number) => {
    let response = await http.get(`/photos/${albumId}`)
    return response.data
  },

}