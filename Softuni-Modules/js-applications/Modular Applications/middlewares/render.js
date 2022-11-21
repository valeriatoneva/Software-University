import { render } from '../..node_modules'

let root = document.querySelector('main');

function ctxRender(context){
    render(context, root)
}

export function decorateContext(ctx, next){
    ctx.render = ctxRender;
    next()
}