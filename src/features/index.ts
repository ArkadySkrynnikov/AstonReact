// import { createAsyncThunk } from '@reduxjs/toolkit'
// import { DocumentData, doc, getDoc, setDoc } from 'firebase/firestore'
// import { db } from '../firebase.ts'
//
// interface User {
//     email: string
//     id: string
// }
//
// export const setDbProfile = createAsyncThunk(
//     'firestore/setDbProfile',
//     async (user: User, { rejectWithValue }) => {
//         try {
//             await setDoc(doc(db, 'users', user.email), {
//                 id: user.id,
//                 // favorites: [],
//                 // history: [],
//             })
//
//             return user
//         } catch (error) {
//             return rejectWithValue('Ошибка базы данных')
//         }
//     },
// )
//
// export const getDbProfile = createAsyncThunk(
//     'firestore/getDbProfile',
//     async (email: string, { rejectWithValue }) => {
//         try {
//             const userRef = doc(db, 'users', email)
//             const docSnap: DocumentData = await getDoc(userRef)
//
//             return docSnap.data()
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     },
// )
//
// export type Inputs = {
//     email: string
//     id: string
// }
//
// export const setProfile = (user: Inputs) => {
//     return setDbProfile(user)
// }
//
// export const getProfile = (email: string) => {
//     return getDbProfile(email)
// }
