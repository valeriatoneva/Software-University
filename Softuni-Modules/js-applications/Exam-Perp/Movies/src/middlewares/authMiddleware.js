import * as authService from '../services/authService.js'

export const authMiddleware = (ctx, next ) => {
    ctx.user = authService.getUser(); // this gives me either the user or undefined 
    
    next()
}