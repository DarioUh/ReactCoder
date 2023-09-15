const FetchSimulation = (dataBase, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve(dataBase);
            } else {
                reject(new Error("Algo salió mal"));
            }
        }, time);
    });
}

export default FetchSimulation;
