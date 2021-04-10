import axios from "axios";

// export const axiosWithAuth = authState => {
//   return axios.create({
//     baseURL: 'https://labspt12-express-groomer-e-api.herokuapp.com/',
//     headers: {
//       Authorization: `Bearer ${authState.idToken}`,
//     },
//   });
// };

export const stripeAuth = () => {
  return axios.create({
    baseURL: "https://api.stripe.com",
    headers: {
      Authorization:
        "Bearer pk_test_51ITdzwAARAF8c1EraLHs1nYz3Zkpg5hsRjUxrATwl5TMyUB4e4r1xXEgnP5XYzJoC9WdpdDrOQ1TkQYLN7vngQ7x004MqS2PPp",
    },
  });
};
