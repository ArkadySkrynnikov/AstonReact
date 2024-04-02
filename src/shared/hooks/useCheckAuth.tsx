import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import { useState, useEffect } from 'react'

interface IFirebaseUser {
    email: string
    displayName: string | null
    uid: string
    refreshToken: string
}

export const useCheckAuth = () => {
    const auth = getAuth()
    const [user, setUser] = useState<IFirebaseUser | null>(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (res: User | null) => {
            if (res) {
                setUser({
                    email: res.email ?? '',
                    displayName: res.displayName ?? '',
                    uid: res.uid,
                    refreshToken: res.refreshToken,
                })
            }
        })
        return () => unsubscribe()
    }, [auth])

    return user
}
