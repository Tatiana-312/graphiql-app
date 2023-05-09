// import React, { useEffect, useState } from 'react';
// import { Provider } from 'react-redux';
// import store from '../redux/store';
// import { useAppDispatch } from '../hooks/redux-hooks';
// import { setUser } from '../redux/store/userSlice';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [pending, setPending] = useState(true);

//   const dispatch = useAppDispatch();
//   const auth = getAuth();

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       //   setCurrentUser(user);
//       //   setPending(false);
//       if (user) {
//         dispatch(
//           setUser({
//             email: user.email,
//             id: user.uid,
//             token: user.refreshToken,
//           })
//         );
//       }
//     });
//   }, []);

//   if (pending) {
//     return <>Loading...</>;
//   }

//   return <Provider store={store}>{children}</Provider>;
// };
