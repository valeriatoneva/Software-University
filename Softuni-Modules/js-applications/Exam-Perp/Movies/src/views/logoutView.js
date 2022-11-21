import { html } from '../../node_modules/lit-html/lit-html.js'

import * as authService from '../services/authService.js'

export const logoutView = (ctx) => {
        authService.logout()
        .then(() => {
            ctx.page.redirect('/')
        })
    }