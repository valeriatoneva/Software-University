import page from ''


export function addSession(ctx, next){
    ctx.user = getUserData();
    next()
}