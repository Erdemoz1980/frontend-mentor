//Register user
const registerUser = async (userData) => {

    const response = await fetch('http://localhost:8000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

  if (!response.ok) {
    const errorData = response.json();
    throw new Error(errorData.message)
  }
    
    const data = await response.json();
    localStorage.setItem('user', JSON.stringify(data))
    return data
};

//Login User
const loginUser = async (loginData) => {

    const response = await fetch('http://localhost:8000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(loginData)
    })

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const data = await response.json();
    localStorage.setItem('user', JSON.stringify(data))
    return data
}

const userService = {
  registerUser,
  loginUser
}

export default userService