import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'
import prismadb from '../../lib/prismadb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    console.log("Register point 1")
    console.log(process.env.NODE_ENV)
    if (req.method !== 'POST') {
        return res.status(405).end();
    }
    console.log("Register point 2")
    try {
        
        console.log("Register point 3")        
        const { email, name, password } = req.body

        const existingUser = await prismadb.user.findUnique({
            where: {
                email,
            }
        })
        console.log("Register point 4")        

        if (existingUser) {
            return res.status(422).json({
                error: 'Email taken'
            })
        }

        console.log("Register point 5")        

        const hashedPassword = await bcrypt.hash(password, 12)

        console.log("Register point 6")        

        const user = await prismadb.user.create({
            data: {
                email, 
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date()
            }
        })
        console.log("Register point 7")                

        return res.status(200).json(user)
    } catch (error) {   
        console.log(error)
        return res.status(400).end();
    }
} 