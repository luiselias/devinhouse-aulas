try {
    throw new Error('Meu erro maroto!');
} catch (error) {
    console.log('O erro que deu foi', error);
}