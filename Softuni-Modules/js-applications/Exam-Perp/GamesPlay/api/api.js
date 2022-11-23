// universal code
let hostname = `http://localhost:3030`; 

async function request(url, options) {
  try {
      const response = await fetch(hostname + url, options);

      if (response.ok == false) {
          const error = await response.json();
          console.log(error);
          throw new Error(error.message);
      }

      try {
          const data = await response.json();
          return data;
      } catch (err) {
          console.log(err);
          return response;
      }
      
  } catch (err) {
      alert(err.message);
      throw err;
  }
}

function getOptions(method = 'get', body) {
  const options = {
      method,
      headers: {}
  };

  const token = localStorage.getItem('authToken');
  
  if (token != null) {
      options.headers['X-Authorization'] = token;
  }

  if (body) {
      options.headers['Content-Type'] = 'application/json'
      options.body = JSON.stringify(body)
  }

  return options;
}

// methods

export async function get(url) {
  return await request(url, getOptions());
}

export async function post(url, data) {
  return await request(url, getOptions('post', data));
}

export async function put(url, data) {
  return await request(url, getOptions('put', data));
}

export async function del(url) {
  return await request(url, getOptions('delete'));
}

// login, register, logout

export async function login(email, password) {
  const result = await post("/users/login", { email, password });

  const userData = {
    email: result.email,
  };

  setUserData(userData);

  return result;
}

export async function register(email, password) {
  // look at the register section
  const result = await post("/users/register", {
    email,
    password,
  });

  const userData = {
    id: result._id,
    email: result.email,
    accessToken: result.accessToken,
  };

  setUserData(userData);

  return result;
}

export function logout() {
  get('/users/logout');
  clearUserData()
}