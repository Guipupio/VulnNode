function user_access_check(userId, resourceId){
    // Essa informação deveria vir do banco de dados e se possível
    // apenas se o usuário do request esteja autenticado e seja igual ao userId
    // Mas para fins de PoC, estou definindo aqui
    dict_users_resources = {
        1: [1,2,3],
        2: [2,5],
        3: [1,3,5],
        4: [1, 2,5],
        // ....
    }

    // Verifica se o usuario existe
    if (userId in dict_users_resources){
        // Verifica se o recurso esta disponivel nos recursos do usuario
       return resourceId in dict_users_resources[`${userId}`]
    }
    return false
}

module.exports = user_access_check;
