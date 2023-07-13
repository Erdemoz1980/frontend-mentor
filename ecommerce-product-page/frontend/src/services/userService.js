const API_URL = 'http://localhost:8000/api/users'
//Register
const register = async (userData) => {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
   
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message)
  }

  return await response.json()
};

//Login
const login = async (userData) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body:JSON.stringify(userData)
  })

  if (!response.ok) {
    const errorData = await response.json() 
    throw new Error(errorData.message)
  }

  return await response.json()
}


//Update User
const update = async (userData) => {
  const response = await fetch(`${API_URL}/update/${userData._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type':'application/json'
    },
    body:JSON.stringify(userData)
  })
  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message)
  }
  return await response.json()
}
const userService = {
  register,
  login,
  update
}

export default userService