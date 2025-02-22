import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

const base_url = "http://localhost:3005";

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(base_url + "/users");
    console.log(response.data)
  }

  const getUserById = async (userId) => {
    const response = await axios.get(base_url + "/users/" + userId);
    console.log(response.data)
  }

  const getUserByIdtemplate = async (userId) => {
    const response = await axios.get(`${base_url}/users/${userId}`);//altgr + ; ile sola bakan tırnak açılır
    console.log(response.data)
  }

  const createUser = async (newUser) => {
    const response = await axios.post(`${base_url}/users`, newUser);
    console.log("response", response.data)
  }

  const updateUser = async (userId, updatedUser) => {
    const response = await axios.put(`${base_url}/users/${userId}`, updatedUser)
    console.log("response", response.data)
  }

  const deleteUserById = async (userId) => {
    await axios.delete(`${base_url}/users/${userId}`)
  }

  const getUserId = async (userId) => {
    const response = await axios.get(`${base_url}/users/${userId}`)
    return response.data.postId;
  }

  const getUserPostId = async (postId) => {
    const response = await axios.get("http://jsonplaceholder.typicode.com/posts/" + postId)
    return response.data;
  }

  const getPost = async () => {
    const postId = await getUserId(1)
    const postData = await getUserPostId(postId)
    console.log(postData)
  }

  useEffect(() => {
    // getAllUsers();

    // getUserById(1)

    // getUserByIdtemplate(2)

    // const newUser = {
    //   "username": "bilal",
    //   "password": "123"
    // }
    // createUser(newUser)

    // const updatedUser = {
    //   "username": "murat",
    //   "password": "321"
    // }
    // updateUser("6e8f", updatedUser)

    // deleteUserById("6e8f")

    // getPost();

  }, [])

  return (
    <div></div>
  )
}

export default App
