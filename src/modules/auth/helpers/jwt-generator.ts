import jwt from "jsonwebtoken"
import { User } from "../../../config/entities/users";

export const generarJWT = (usuario: User) => {

    return new Promise((resolve, reject) => {

        jwt.sign({
            id: usuario.id,
            rol: usuario.rol,
            email : usuario.email
            },
            process.env.KEY_TOKEN || "",
            {
                expiresIn: '24h'
            }, (err, token) => {
                if (err) {
                    console.log(err);
                    reject('No se pudo generar el token')
                } else {
                    resolve(token);
                }
            })
    })
}