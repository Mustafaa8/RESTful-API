import crypto from 'crypto'

export const random = ()=>{return crypto.randomBytes(128).toString('base64')}
export const authentication = (salt:string,password:string)=>{
    return crypto.createHmac('sha256',[salt,password].join('/')).update(`${process.env.CRYPTO_SECRET}`).digest('hex')
} 