export function random(length: number): string{
    const character ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomCharacter =''

    for (let i = 0; i < length; i++){
        const randomI = Math.floor(Math.random() * character.length)
        randomCharacter += character.charAt(randomI)
    }

    return randomCharacter
}