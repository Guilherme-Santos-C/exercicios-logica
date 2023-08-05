var asteroidCollision = function(asteroids){
    let stack = [asteroids[0]]
    let addLast
    
    for(let i = 1; i < asteroids.length; i++){
        addLast = stack[stack.length-1]
        if(asteroids[i] > 0){ // verfica se o asteroid esta indo a direita foco:*prox asteroid 
            if(asteroids[i+1] < 0){ // verifica se o prox asteroid esta vindo a esquerda
                if(-asteroids[i+1] < asteroids[i]){ // verifica se o prox asteroid é menor
                    stack.push(asteroids[i])
                }
            }
            else{
                stack.push(asteroids[i])
            }
        }
        else{ // asteroid esta indo para a esquerda foco:*stack
            if(addLast > 0){ // verfica se o stack esta vindo a direita *colisão
                if(addLast < -asteroids[i]){
                    stack.splice(i-1, 1, asteroids[i])
                }
                else if(addLast == -asteroids[i]){
                    stack.splice(i-1, 1)
                }
            }
            else{ // aqui ele esta indo portanto nenhuma colisão
                stack.push(asteroids[i])
            }
        }
    }
    return stack;
}

console.log(asteroidCollision([-2,1,1,-2]));